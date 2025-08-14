# Google Material Icons JSON

Automatically updated JSON dataset of **Google Material Icons**, organized by category and filtered to include only icons available in the official Material Icons CDN.

## 📦 What This Is
This repository contains a single JSON file that is:
- **Grouped by category** (as per Google's `src` folder structure)
- **Filtered** so only icons that exist in the Material Icons CDN are included
- **Updated automatically** every week via GitHub Actions

Example JSON structure:
```json
[
  {
    "category": "navigation",
    "icons": [
      "home",
      "arrow_back" 
    ]
  },
  {
    "category": "social",
    "icons": [
     "person" 
    ]
  }
]
```

## 📂 Files
- **`data/icons.json`** – the latest icon data
- **`scripts/update-icons.js`** – script that fetches icons from Google’s GitHub repo and generates the JSON file
- **`.github/workflows/update.yml`** – GitHub Action that runs weekly to keep data fresh

## 🔄 Update Schedule
- **Every Sunday at midnight UTC** (and can be triggered manually)

## 🔗 Sources
- [Google Material Design Icons – `src`](https://github.com/google/material-design-icons/tree/master/src)
- [Google Material Design Icons – `symbols/web`](https://github.com/google/material-design-icons/tree/master/symbols/web)

## 📜 License
This repository only contains metadata (JSON) and does **not** include any icon graphics.
Refer to the [Google Material Icons license](https://github.com/google/material-design-icons/blob/master/LICENSE) for icon usage terms.
