/* THE APP'S CONTROL PANEL. Edit here on GitHub and save. Phones update when the app is reopened.
   Keep the quotes and commas as they are. If the app breaks after a change, restore the old version from this file's History. */
window.DANGAL_CONFIG = {
  /* 1. Your Supabase connection. These two values are safe to be public. */
  supabaseUrl: "https://bozruatcodugmexovdbj.supabase.co",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvenJ1YXRjb2R1Z21leG92ZGJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM2ODgwMjAsImV4cCI6MjEwOTI2NDAyMH0.AwuDAP9_PujjqHdeaz3UJZA5EjiymqEv_EGeqNY1OAs",
  vapidPublicKey: "BMrDOFwkIhMT1XuSHWhrRjJ2zuRwTJ_NuXL1qwN7EyaXKiI0viJ7RP5RWi2Q49Ddc9Pdz8ES48QZMvXZwGhT6bw",

  /* 2. Scores before this date are practice and get wiped from the fight. Use YYYY-MM-DD. */
  seasonStart: "2026-11-09",

  /* 3. Rules. Changing a target also changes past weeks' scores, so change these between seasons if you can. */
  rules: {
  "harshdeep": {
    "gymDays": 4,
    "stepTarget": 6000,
    "stepLabel": "6,000 to 7,000"
  },
  "nikki": {
    "gymDays": 5,
    "stepTarget": 10000,
    "stepLabel": "10,000",
    "split": [
      "Chest, triceps, shoulders",
      "Hamstrings, glutes",
      "Back, biceps",
      "Full legs",
      "Core",
      null,
      null
    ]
  },
  "rejectionsPerWeek": 3,
  "bossRaidSteps": 120000
},

  /* 4. Daily questions. Add as many as you like. */
  questions: [
  "Gym mein sabse irritating banda kaun hota hai?",
  "Agar ek hi cheat meal zindagi bhar khana ho, kya hoga?",
  "Tumhara gym wala gaana kaunsa hai?",
  "Bachpan ka sabse bakwaas nickname?",
  "Aaj ka mood ek film title mein batao.",
  "Sabse weird cheez jo tumhe calm karti hai?",
  "Kaunsa exercise tumhara dushman hai?",
  "Ek din ke liye kisi ki body mil jaaye, kiski?",
  "Last time kis baat pe bohot hasi aayi thi?",
  "Sabse bada jhooth jo gym ke baare mein bola?",
  "Aisa kaunsa khana hai jo sab pasand karte hain, tumhe nahi?",
  "Kaunsi cheez mein tum secretly bohot ache ho?",
  "Ek skill jo tum 30 din mein seekhna chahoge?",
  "Tumhari life ka theme song kya hoga?",
  "Sabse embarrassing moment jo ab funny lagta hai?",
  "Late night ka sabse dangerous craving?",
  "Agar kal chhutti ho, kya karoge?",
  "Kaunsa reel tumne 10 baar dekha hai?",
  "Tumhari sabse irritating aadat?",
  "Bina phone ek din, sabse zyada kya miss hoga?",
  "Tumhara comfort show kaunsa hai?",
  "Is hafte ki ek choti si jeet batao.",
  "Sabse overrated fitness advice?",
  "Agar tumhara ek reality show ho, naam kya hoga?",
  "Aaj kisne tumhara din better banaya?",
  "Mummy ke haath ki best cheez?",
  "Sabse bekaar gift jo kabhi mila?",
  "Tumhare bare mein log kya galat sochte hain?",
  "Next trip kahan honi chahiye?",
  "Ek cheez jo tum dobara try karna chahte ho?"
],

  /* 5. Quick messages */
  nudges: [
  "Steps kahan hain?",
  "Gym gaye kya?",
  "Snap nahi aaya abhi tak",
  "Uth ja, chal",
  "Khana khaya?",
  "Sona bhi hai, phone rakho"
],
  hypes: [
  "Kya baat hai!",
  "Machine ho tum",
  "Respect",
  "Aaj toh aag laga di",
  "Thoda dheere, mujhe bhi jeetna hai",
  "Proud of you, thoda sa"
],

  /* 6. Ambush challenges: what to do, then minutes allowed */
  challenges: [
    ["20 squats", 15],
    ["15 push-ups", 15],
    ["60 second plank", 15],
    ["30 jumping jacks", 15],
    ["500 extra steps", 20],
    ["20 lunges", 15]
  ],

  /* 7. Penalty Wheel. Keep exactly 6. */
  forfeits: [
  "Winner picks your next story",
  "Winner writes your next caption",
  "Post a reel winner chooses",
  "Send your worst gym selfie",
  "Buy the winner a meal",
  "50 squats, on snap"
]
};
