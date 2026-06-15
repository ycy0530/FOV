// FOV questionnaire -- 10 questions, 4 graded options each (V3 -- scenario-based).
// Each option carries points toward fixed (f) and/or variable (v) suitability.

export const QUESTIONS = [
  {
    id: 'risk',
    label: 'Rate jump reaction',
    text: 'The Bank of Canada raises rates 0.75% in a single announcement. Your variable mortgage payment jumps ~$200/month overnight. Your honest reaction?',
    options: [
      { text: "I'd be stressed and regret not locking in", f: 2, v: 0, tag: 'A sudden rate jump would genuinely shake you -- predictability matters more to you than potential savings' },
      { text: "I'd be uneasy but would manage", f: 1, v: 0, tag: 'You lean cautious -- some payment certainty would help you sleep at night' },
      { text: "I'd be fine -- rates move both ways", f: 0, v: 1, tag: 'You can absorb short-term payment swings without it affecting your daily life' },
      { text: "I'd see it as temporary and stay the course", f: 0, v: 2, tag: "Rate volatility doesn't rattle you -- you take the long view on mortgage costs" },
    ],
  },
  {
    id: 'payment_changes',
    label: 'Fixed vs. variable trade-off',
    text: 'Your neighbour locked in at 4.99% fixed. You went variable at 5.45% today -- but could be at 4.70% in 12 months, or 5.80%. How do you feel about that trade-off?',
    options: [
      { text: "I'd take fixed -- I don't want to think about it", f: 2, v: 0, tag: 'You value a set payment you can budget around, even if it costs a bit more' },
      { text: "I'd lean fixed -- the certainty is worth it", f: 1, v: 0, tag: 'You prefer knowing what you owe each month over chasing potential savings' },
      { text: "I'd probably go variable -- the savings potential is real", f: 0, v: 1, tag: 'You can manage payment movement if the average rate works out in your favour' },
      { text: "Variable all day -- I'll take the lower rate and ride it", f: 0, v: 2, tag: "Payment changes wouldn't bother you -- you're focused on total interest paid" },
    ],
  },
  {
    id: 'knowledge',
    label: 'Mortgage knowledge',
    text: "When you hear 'prime minus 0.90%', do you know what that means for your actual monthly payment?",
    options: [
      { text: "No idea -- this is mostly new to me", f: 1, v: 0, tag: "You're newer to how rates work -- a fixed rate keeps things simple while you get comfortable" },
      { text: "I know it's tied to the Bank of Canada somehow", f: 0, v: 0, tag: 'You understand the basics of fixed vs. variable rate products' },
      { text: 'Yes -- I understand how prime moves and what it means for my payment', f: 0, v: 1, tag: 'You understand how variable rates track prime and can follow along as rates move' },
      { text: 'Yes -- and I follow BoC announcements and rate cycles', f: 0, v: 1, tag: 'You actively track rate trends and are well-positioned to manage a variable product' },
    ],
  },
  {
    id: 'timeline',
    label: 'How long are you staying?',
    text: 'Be honest -- how long are you actually keeping this home before selling, upsizing, or relocating?',
    options: [
      { text: 'Probably under 3 years -- this is a stepping stone', f: 0, v: 2, tag: 'A shorter timeline strongly favours variable -- fixed penalties if you break early can be brutal' },
      { text: '3-5 years, then likely upsizing or moving', f: 0, v: 1, tag: 'A mid-length timeline keeps your options open -- flexibility has real value here' },
      { text: '5-10 years -- this feels like a medium-term home', f: 1, v: 0, tag: 'A longer hold can justify locking in and removing payment uncertainty' },
      { text: 'This is our long-term home -- 10+ years', f: 2, v: 0, tag: 'A long-term hold pairs well with a locked-in rate -- consistency becomes an asset' },
    ],
  },
  {
    id: 'income',
    label: 'Income stability',
    text: 'If your mortgage payment rose $400/month tomorrow, would your income reliably cover it -- without touching savings?',
    options: [
      { text: "No -- I'm commission, seasonal, or self-employed and it varies", f: 2, v: 0, tag: 'Variable income plus a variable rate is a double risk -- a fixed payment gives you one less thing to worry about' },
      { text: "It would be tight -- my income has some variation", f: 1, v: 0, tag: 'Some income uncertainty suggests value in knowing your exact payment each month' },
      { text: 'Yes, with some adjustments -- I have a stable salary', f: 0, v: 1, tag: 'Stable income gives you room to absorb normal rate movement without stress' },
      { text: 'Easily -- we have strong income, dual earners, or long job tenure', f: 0, v: 2, tag: 'Very stable household income gives you strong capacity to ride rate swings comfortably' },
    ],
  },
  {
    id: 'cashflow',
    label: 'Monthly breathing room',
    text: 'After mortgage, property tax, strata fees (if any), groceries, childcare, and car payments -- how much is left over each month?',
    options: [
      { text: 'Very little -- most months are fully spoken for', f: 2, v: 0, tag: 'A tight monthly budget needs protection from payment increases -- predictability is essential' },
      { text: 'A few hundred, but not much wiggle room', f: 1, v: 0, tag: 'Limited budget room favours knowing your payment in advance so you can plan ahead' },
      { text: 'A comfortable cushion -- maybe $500-$1,000 free', f: 0, v: 1, tag: 'Reasonable monthly buffer means you can absorb moderate payment movement without stress' },
      { text: 'Plenty -- cash flow is not a concern for us', f: 0, v: 2, tag: 'Strong monthly cash flow gives you room to ride rate swings and still hit your savings goals' },
    ],
  },
  {
    id: 'rates_rising',
    label: '2022-23 stress test',
    text: 'In 2022-23, the BoC raised rates 10 times in 18 months. Variable holders on a $700K mortgage saw payments spike $800-$1,200/month. How would that have affected you?',
    options: [
      { text: 'That would have been devastating -- I could not absorb that', f: 2, v: 0, tag: 'A spike like 2022-23 would have seriously strained you -- fixed removes that risk entirely' },
      { text: 'Really difficult -- I would have had to cut back significantly', f: 1, v: 0, tag: 'That kind of increase would have put real pressure on your household budget' },
      { text: 'Tough but manageable -- I would have figured it out', f: 0, v: 1, tag: 'Rate increases would be uncomfortable but not catastrophic given your financial position' },
      { text: 'Fine -- I have the income and savings buffer to handle it', f: 0, v: 2, tag: "Even a sharp rate cycle like 2022-23 wouldn't have threatened your financial stability" },
    ],
  },
  {
    id: 'rates_falling',
    label: 'Rate outlook',
    text: 'The BoC has already cut rates several times since 2024. Do you think there is more room to drop over your next 3-5 year term?',
    options: [
      { text: "Yes -- I think rates keep dropping and I want to benefit", f: 0, v: 2, tag: 'You expect continued rate cuts and want your payment to fall automatically as they do' },
      { text: 'Probably -- I lean toward more cuts ahead', f: 0, v: 1, tag: 'You lean toward rates drifting lower, which would benefit variable borrowers over time' },
      { text: "Not sure -- could go either way from here", f: 0, v: 0, tag: "You're neutral on the rate outlook -- neither fixed nor variable has a clear edge for you here" },
      { text: "No -- I think rates stay flat or tick back up", f: 1, v: 0, tag: "You don't expect meaningful rate drops, which reduces the main upside of going variable" },
    ],
  },
  {
    id: 'certainty_vs_savings',
    label: 'What matters more to you?',
    text: 'Historically, variable rate borrowers have saved money over fixed -- but not always, and not without stress along the way. What would you rather have?',
    options: [
      { text: 'A guarantee -- I want to know exactly what I pay', f: 2, v: 0, tag: 'You value certainty over potential savings -- peace of mind has real financial value too' },
      { text: 'Lean certainty, but savings are tempting', f: 1, v: 0, tag: 'You lean toward stability, with some appetite for savings if the math works out' },
      { text: 'Lean savings -- some risk is fine for a better rate', f: 0, v: 1, tag: 'You lean toward savings while keeping an eye on rate movement' },
      { text: 'The savings potential -- even if it comes with uncertainty', f: 0, v: 2, tag: 'Potential interest savings matter more to you than locking in a number upfront' },
    ],
  },
  {
    id: 'break_early',
    label: 'Breaking early -- the penalty question',
    text: 'Fixed mortgage penalties can run $15,000-$30,000+ on a $700K mortgage if you break early. Variable penalties are typically just 3 months interest (~$3,000-$5,000). How certain are you about staying the full term?',
    options: [
      { text: 'Not certain -- job change, family growth, or plans could shift things', f: 0, v: 2, tag: 'Life changes happen -- variable penalties are dramatically lower if you need to break early' },
      { text: 'Possibly -- hard to predict that far out', f: 0, v: 1, tag: 'Flexibility has real dollar value if your plans might change before the term ends' },
      { text: 'Unlikely -- I plan to see the full term through', f: 1, v: 0, tag: "You're likely to stay the course, which removes one of variable's key advantages" },
      { text: "Definitely staying -- our plans are set", f: 2, v: 0, tag: 'Holding the full term removes the penalty advantage of variable entirely' },
    ],
  },
];
