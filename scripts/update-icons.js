// scripts/update-icons.js
import { writeFileSync } from 'fs';

const CURRENT_VERSIONS_URL =
  'https://raw.githubusercontent.com/google/material-design-icons/refs/heads/master/update/current_versions.json';

async function main() {
  console.log('Fetching current_versions.json...');
  const res = await fetch(CURRENT_VERSIONS_URL);
  if (!res.ok)
    throw new Error(`Failed to fetch current_versions.json: ${res.status}`);
  const data = await res.json();

  const categoryMap = {};

  // Process each key: "category::icon_name"
  for (const key of Object.keys(data)) {
    const [category, name] = key.split('::');
    if (!categoryMap[category]) categoryMap[category] = [];
    categoryMap[category].push({
      name,
    });
  }

  // Transform into array of { category, icons }
  const results = Object.entries(categoryMap).map(([category, icons]) => ({
    category,
    icons,
  }));

  // Save JSON
  writeFileSync('data/icons.json', JSON.stringify(results, null, 2));
  console.log(`Saved ${results.length} categories to data/icons.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
