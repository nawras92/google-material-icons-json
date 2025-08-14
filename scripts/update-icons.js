import { writeFileSync } from 'fs';

const METADATA_URL = 'https://fonts.google.com/metadata/icons';

// List of icons to exclude
const SKIP_ICONS = [
  'play_circle_filled',
  'play_circle_outline',
  'discount',
  'signal_wifi_statusbar_connected_no_internet_4',
  'fire_hydrant_alt',
  'miscellaneous_services'
];

async function main() {
  console.log('Fetching Google Fonts icon metadata...');

  const res = await fetch(METADATA_URL);
  if (!res.ok) throw new Error(`Failed to fetch metadata: ${res.status}`);

  let text = await res.text();

  // Remove the first line `)]}'`
  if (text.startsWith(")]}'")) {
    text = text.substring(4);
  }

  const data = JSON.parse(text);

  if (!data.icons || !Array.isArray(data.icons)) {
    throw new Error('Invalid icon metadata format');
  }

  // Create category map: { category: [ { name, tags } ] }
  const categoryMap = {};

  for (const icon of data.icons) {
    // Skip if unsupported families exist
    if (icon.unsupported_families && icon.unsupported_families.length > 0) {
      continue;
    }

    // Skip if in hard-coded exclude list
    if (SKIP_ICONS.includes(icon.name)) {
      continue;
    }

    const categories = icon.categories || ['uncategorized'];
    for (const category of categories) {
      if (!categoryMap[category]) {
        categoryMap[category] = [];
      }
      categoryMap[category].push({
        name: icon.name,
        tags: icon.tags || [],
      });
    }
  }

  // Transform into array format
  const results = Object.entries(categoryMap).map(([category, icons]) => ({
    category,
    icons,
  }));

  // Save to file
  writeFileSync('data/icons.json', JSON.stringify(results, null, 2));
  console.log(`✅ Saved ${results.length} categories to data/icons.json`);

  // Optional: save category list separately
  const categoryList = Object.keys(categoryMap).sort();
  writeFileSync('data/categories.json', JSON.stringify(categoryList, null, 2));
  console.log(
    `✅ Saved ${categoryList.length} categories to data/categories.json`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

