// ─────────────────────────────────────────────────────────
// CONFIG — only file you need to edit
// ─────────────────────────────────────────────────────────

const CONFIG = {
  // Your Google Sheet ID (from the URL)
  SHEET_ID: "1PD-RBvn1UT0WJy_cpknGyLr7AC1HQcnvUwhQroHUENM",

  // Tab name in your sheet that has the raw data
  DUMP_TAB: "dump",

  // Cities to show (must match workshop_name exactly in your sheet)
  CITIES: [
    "NC Pune Integrated",
    "NC Mumbai",
    "NC Chennai",
    "NC Kochi Integrated"
  ],

  // Adhoc types to include (everything else is excluded)
  INCLUDE_TYPES: [
    "BA Miss",
    "Inspector Miss in Cgt Universe"
  ],

  // Month labels — update when new months come in
  MONTHS: ["Jan 2026", "Feb 2026", "Mar 2026", "Apr 2026", "May 2026"],

  // City display colors
  COLORS: {
    "NC Pune Integrated":    "#58a6ff",
    "NC Mumbai":             "#3fb950",
    "NC Chennai":            "#f0883e",
    "NC Kochi Integrated":   "#bc8cff"
  }
};
