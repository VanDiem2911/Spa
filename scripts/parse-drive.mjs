import fs from 'fs';

function parseHtml(filename) {
  const content = fs.readFileSync(`scripts/${filename}`, 'utf-8');
  console.log(`\n--- Parsing ${filename} ---`);
  
  // Extract all file IDs and filenames
  // Google Drive folder HTML contains initial data with patterns:
  // [..., "FILE_NAME.ext", "mime/type", ..., "FILE_ID", ...]
  
  const regex = /\[\"([a-zA-Z0-9_-]{28,38})\",\[\"(.*?)\"/g;
  let match;
  const items = [];
  while ((match = regex.exec(content)) !== null) {
    items.push({ id: match[1], name: match[2] });
  }

  // Also check another common pattern in Drive's json bootstrap:
  // ["file_id","filename",...]
  const matches2 = [...content.matchAll(/\"([a-zA-Z0-9_-]{25,45})\".*?\"([^\"]+\.(?:png|jpg|jpeg|webp|svg|pdf|mp4|mov))\"/gi)];
  for (const m of matches2) {
    items.push({ id: m[1], name: m[2] });
  }

  // Also search for filenames directly
  const imageFiles = [...content.matchAll(/([a-zA-Z0-9_\-\s\(\)\.]+\.(?:png|jpg|jpeg|webp|svg))/gi)].map(m => m[1]);
  console.log(`Found image filename mentions:`, [...new Set(imageFiles)]);

  // Let's find IDs near those filenames
  const found = [];
  for (const imgName of new Set(imageFiles)) {
    const idx = content.indexOf(imgName);
    if (idx !== -1) {
      const snippet = content.substring(Math.max(0, idx - 300), Math.min(content.length, idx + 300));
      // Look for 33-char drive IDs: [a-zA-Z0-9_-]{28,35}
      const ids = [...snippet.matchAll(/([a-zA-Z0-9_-]{33})/g)].map(m => m[1]);
      found.push({ name: imgName, ids });
    }
  }

  console.log('Detected files with candidate IDs:', found);
}

parseHtml('logo_folder.html');
parseHtml('media_folder.html');
