// Economic data layer for FOV.
//
// LIVE: Bank of Canada Valet API (free, no key) for policy rate, prime rate,
// and 5-year Government of Canada bond yield. Falls back to clearly-labelled
// placeholder values if a fetch fails.
//
// PLACEHOLDER (ready for API integration): inflation trend, employment trend,
// and general outlook. Swap in Statistics Canada WDS or another provider.

const VALET = 'https://www.bankofcanada.ca/valet/observations';

const SERIES = {
  policyRate: 'V39079',          // Target for the overnight rate
  primeRate: 'V80691311',        // Prime business rate
  bond5y: 'BD.CDN.5YR.DQ.YLD',   // GoC 5-year benchmark bond yield
};

async function fetchSeries(seriesId) {
  const res = await fetch(`${VALET}/${seriesId}/json?recent=1`, {
    next: { revalidate: 3600 }, // cache 1 hour
  });
  if (!res.ok) throw new Error(`Valet ${seriesId}: ${res.status}`);
  const data = await res.json();
  const obs = data.observations?.[0];
  return { value: parseFloat(obs[seriesId].v), date: obs.d };
}

// ---- PLACEHOLDERS — READY FOR API INTEGRATION ----------------------------

// TODO: connect Statistics Canada CPI (e.g. StatsCan WDS vector v41690973)
function getInflationTrendPlaceholder() {
  return {
    label: 'Inflation trend',
    value: 'Near the 2% target',
    trend: 'stable',
    isPlaceholder: true,
  };
}

// TODO: connect Statistics Canada Labour Force Survey (unemployment rate)
function getEmploymentTrendPlaceholder() {
  return {
    label: 'Employment trend',
    value: 'Labour market stable',
    trend: 'stable',
    isPlaceholder: true,
  };
}

// TODO: connect an economic outlook source (BoC MPR summary, big-bank forecasts)
function getOutlookPlaceholder() {
  return {
    label: 'General outlook',
    value:
      'Markets are weighing whether the Bank of Canada holds or trims its policy rate over the coming year.',
    isPlaceholder: true,
  };
}

// --------------------------------------------------------------------------

export async function getEconomicSnapshot() {
  const snapshot = {
    asOf: new Date().toISOString().slice(0, 10),
    policyRate: { label: 'Bank of Canada policy rate', value: null, isPlaceholder: false },
    primeRate: { label: 'Prime rate', value: null, isPlaceholder: false },
    bond5y: { label: '5-year GoC bond yield', value: null, isPlaceholder: false },
    inflation: getInflationTrendPlaceholder(),
    employment: getEmploymentTrendPlaceholder(),
    outlook: getOutlookPlaceholder(),
  };

  const [policy, prime, bond] = await Promise.allSettled([
    fetchSeries(SERIES.policyRate),
    fetchSeries(SERIES.primeRate),
    fetchSeries(SERIES.bond5y),
  ]);

  if (policy.status === 'fulfilled') {
    snapshot.policyRate.value = `${policy.value.value.toFixed(2)}%`;
    snapshot.policyRate.date = policy.value.date;
  } else {
    snapshot.policyRate = { ...snapshot.policyRate, value: '2.75%', isPlaceholder: true };
  }

  if (prime.status === 'fulfilled') {
    snapshot.primeRate.value = `${prime.value.value.toFixed(2)}%`;
    snapshot.primeRate.date = prime.value.date;
  } else {
    snapshot.primeRate = { ...snapshot.primeRate, value: '4.95%', isPlaceholder: true };
  }

  if (bond.status === 'fulfilled') {
    snapshot.bond5y.value = `${bond.value.value.toFixed(2)}%`;
    snapshot.bond5y.date = bond.value.date;
  } else {
    snapshot.bond5y = { ...snapshot.bond5y, value: '3.00%', isPlaceholder: true };
  }

  return snapshot;
}
