import fs from 'fs';
import path from 'path';

const brainDir = 'C:\\Users\\NGO TRAN VAN DIEM\\.gemini\\antigravity-ide\\brain\\54666518-3d24-4d32-b9d4-63456faab958';
const destDir = 'D:\\HUDI\\Spa\\public\\images';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const mappings = [
  { prefix: 'hero_spa', target: 'hero.jpg' },
  { prefix: 'about_spa', target: 'about.jpg' },
  { prefix: 'service_body', target: 'service-body.jpg' },
  { prefix: 'service_neck', target: 'service-neck.jpg' },
  { prefix: 'service_hair', target: 'service-hair.jpg' },
  { prefix: 'service_foot', target: 'service-foot.jpg' },
  { prefix: 'parallax_spa', target: 'parallax.jpg' },
];

const files = fs.readdirSync(brainDir);

for (const m of mappings) {
  const matches = files.filter(f => f.startsWith(m.prefix) && f.endsWith('.jpg'));
  if (matches.length > 0) {
    // sort by name / timestamp descending
    matches.sort();
    const latest = matches[matches.length - 1];
    const src = path.join(brainDir, latest);
    const dst = path.join(destDir, m.target);
    fs.copyFileSync(src, dst);
    console.log(`Copied ${latest} -> ${m.target}`);
  } else {
    console.warn(`No match found for ${m.prefix}`);
  }
}
