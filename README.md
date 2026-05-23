# Adhoc Inspector Dashboard — South West Cluster

Live dashboard reading directly from your Google Sheet. No server needed.

## Setup

1. Make your Google Sheet public: **Share → Anyone with the link → Viewer**
2. Upload these 3 files to GitHub
3. Enable GitHub Pages: **Settings → Pages → Source: main branch**
4. Open `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## Files

| File | Purpose |
|------|---------|
| `index.html` | Main dashboard — city tabs, inspector cards, trend charts |
| `config.js` | Sheet ID and settings — only file you ever need to edit |
| `README.md` | This file |

## How it works

Every time someone opens the dashboard, it fetches the latest data
directly from the `dump` tab of your Google Sheet via CSV export.
No manual refresh. No file upload. Always live.

## Filters applied

- Cities: NC Pune Integrated, NC Mumbai, NC Chennai, NC Kochi Integrated
- Adhoc types: BA Miss + Inspector Miss in Cgt Universe only
- Re-Raised and Inspector Miss outside CGT excluded

## Claude AI Diagnosis

Click any inspector card → click "Claude Diagnosis".
Claude reads the full 5-month profile and gives:
- Root Cause (knowledge / process / behaviour gap)
- Top Concern (specific numbers and part names)
- Manager Action (what city lead should do this week)
- Inspector Fix (what the inspector should change)

## Updating data

The sheet updates automatically — just refresh the browser.
