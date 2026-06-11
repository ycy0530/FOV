// FOV questionnaire — 10 questions.
// Each option carries points toward fixed (f) and/or variable (v) suitability.

export const QUESTIONS = [
  {
    id: 'risk',
    label: 'Risk tolerance',
    text: 'How would you describe your comfort with financial risk?',
    options: [
      { text: 'I avoid risk — I want predictability', f: 2, v: 0, tag: 'You prefer predictability over potential upside' },
      { text: "I can handle some ups and downs", f: 1, v: 1, tag: 'You can tolerate moderate uncertainty' },
      { text: "I'm comfortable taking risk for potential savings", f: 0, v: 2, tag: "You're comfortable accepting risk for potential savings" },
    ],
  },
  {
    id: 'payment_changes',
    label: 'Payment changes',
    text: 'If your mortgage payment could change over time, how would you feel?',
    options: [
      { text: 'Very uncomfortable — I want the same payment every month', f: 2, v: 0, tag: 'A fluctuating payment would cause you stress' },
      { text: "Slightly uneasy, but I'd manage", f: 1, v: 1, tag: 'You could manage some payment movement' },
      { text: "Fine — I'd adjust as needed", f: 0, v: 2, tag: "Payment changes wouldn't bother you" },
    ],
  },
  {
    id: 'knowledge',
    label: 'Mortgage knowledge',
    text: 'How familiar are you with how mortgage rates work in Canada?',
    options: [
      { text: "Beginner — it's mostly new to me", f: 1, v: 0, tag: "You're newer to how rates work, so simplicity helps" },
      { text: 'I know the basics', f: 0, v: 0, tag: 'You understand the basics of fixed vs variable' },
      { text: 'Confident — I follow rates and the Bank of Canada', f: 0, v: 1, tag: 'You actively follow rates and could manage a variable product' },
    ],
  },
  {
    id: 'timeline',
    label: 'Ownership timeline',
    text: 'How long do you expect to keep this home (or this mortgage)?',
    options: [
      { text: 'Less than 3 years', f: 0, v: 2, tag: 'A shorter timeline often favours lower-penalty variable options' },
      { text: '3 to 5 years', f: 0, v: 1, tag: 'A mid-length timeline keeps your options open' },
      { text: 'More than 5 years', f: 1, v: 0, tag: 'A longer hold can suit locked-in payment stability' },
    ],
  },
  {
    id: 'income',
    label: 'Income stability',
    text: 'How stable is your household income?',
    options: [
      { text: 'Variable — commission, seasonal, or self-employed', f: 2, v: 0, tag: 'Variable income pairs better with a predictable payment' },
      { text: 'Mostly stable with some variation', f: 1, v: 0, tag: 'Some income variation suggests value in payment certainty' },
      { text: 'Very stable — salaried or pension', f: 0, v: 1, tag: 'Stable income gives you room to absorb rate movement' },
    ],
  },
  {
    id: 'cashflow',
    label: 'Cash flow flexibility',
    text: 'If your payment rose by a few hundred dollars a month, your budget would be…',
    options: [
      { text: 'Stretched — money is tight most months', f: 2, v: 0, tag: 'A tight budget needs protection from payment increases' },
      { text: 'Okay — some room to absorb it', f: 1, v: 1, tag: 'You have a reasonable cushion in your budget' },
      { text: 'Comfortable — plenty of buffer', f: 0, v: 2, tag: 'Strong monthly cash flow can absorb rate swings' },
    ],
  },
  {
    id: 'rates_rising',
    label: 'Rate-rise concern',
    text: 'How worried are you about interest rates rising during your term?',
    options: [
      { text: "Very worried — I'd lose sleep over it", f: 2, v: 0, tag: 'Rising rates would genuinely worry you' },
      { text: 'Somewhat — I think about it occasionally', f: 1, v: 0, tag: 'You have some concern about rates rising' },
      { text: "Not really — I'd ride it out", f: 0, v: 1, tag: "Rising rates wouldn't shake you" },
    ],
  },
  {
    id: 'rates_falling',
    label: 'Rate-drop outlook',
    text: 'Do you believe rates are likely to fall over the next few years?',
    options: [
      { text: "Yes — I'd want to benefit if they drop", f: 0, v: 2, tag: 'You expect rates to fall and want to capture that' },
      { text: 'Not sure either way', f: 0, v: 0, tag: "You're neutral on where rates go next" },
      { text: "No — I think they'll stay flat or rise", f: 1, v: 0, tag: "You don't expect rates to drop meaningfully" },
    ],
  },
  {
    id: 'certainty_vs_savings',
    label: 'Certainty vs savings',
    text: 'Which matters more to you?',
    options: [
      { text: 'Certainty — knowing exactly what I pay', f: 2, v: 0, tag: 'You value certainty above potential savings' },
      { text: 'Lean certainty, but savings tempt me', f: 1, v: 0, tag: 'You lean toward certainty, with some appetite for savings' },
      { text: 'Potential savings — even with some risk', f: 0, v: 2, tag: 'Potential savings matter more to you than certainty' },
    ],
  },
  {
    id: 'break_early',
    label: 'Breaking early',
    text: 'How likely are you to sell, refinance, or break this mortgage before the term ends?',
    options: [
      { text: 'Likely — life or plans may change', f: 0, v: 2, tag: 'Variable penalties (3 months interest) are usually far lower if you break early' },
      { text: 'Possibly — hard to say', f: 0, v: 1, tag: 'Flexibility has value if your plans might change' },
      { text: "Unlikely — I'll see the term through", f: 1, v: 0, tag: "You're likely to hold the full term" },
    ],
  },
];
