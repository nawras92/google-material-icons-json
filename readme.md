# Google Material Icons JSON

Automatically updated JSON dataset of **Google Material Icons**, organized by category and filtered to include only icons available in the official Material Icons CDN.

## 📦 What This Is

This repository contains JSON metadata for Google Material Icons:

* **`data/icons.json`** – contains all icons, grouped by category, with each icon including its `name` and `tags`.
* **`data/categories.json`** – a simple array of all categories.
* **Updated automatically** via GitHub Actions using the `update-icons.js` script.

Example `icons.json` structure:

```json
[
  {
    "category": "av",
    "icons": [
      {
        "name": "10k",
        "tags": [
          "10000",
          "10K",
          "achievement",
          "analytics",
          "badge",
          "box",
          "character",
          "count"
        ]
      },
      {
        "name": "album",
        "tags": ["music", "media", "record"]
      }
    ]
  }
]
```

Example `categories.json`:

```json
[
  "action",
  "alert",
  "av",
  "communication",
  "editor",
  "file",
  "hardware",
  "image",
  "maps",
  "navigation",
  "notification",
  "places",
  "social",
  "toggle",
  "uncategorized"
]
```

## 💾 Files

```
.
├── data
│   ├── categories.json   # Array of all categories
│   └── icons.json        # Icon metadata grouped by category
├── LICENSE
├── package.json
├── readme.md
└── scripts
    └── update-icons.js   # Script to fetch Google Fonts icon metadata
```

## 🔄 Update Schedule

* Automatically updated **weekly via GitHub Actions**
* Can also be triggered manually using `node scripts/update-icons.js`

## 🔗 Sources

* [Google Material Design Icons – Metadata](https://fonts.google.com/metadata/icons)
* [Google Material Design Icons – `symbols/web`](https://github.com/google/material-design-icons/tree/master/symbols/web)

## 📜 License

This repository contains only metadata (JSON) and **does not include icon graphics**.
Refer to the [Google Material Icons license](https://github.com/google/material-design-icons/blob/master/LICENSE) for icon usage terms.

