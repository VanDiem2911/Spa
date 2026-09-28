import fs from 'fs';
import path from 'path';

const logos = [
  { id: '1a_mcnjJfUIrfblyCK_oksAwixUUNkKml', filename: 'logo_01.jpg' },
  { id: '1qiZJH-rhW-0QkAzjTFvRF2-wXuwTPtHA', filename: 'logo_02.jpg' },
  { id: '17_IBohSbFM2coz2oGI9MMJP0A0IQLGQF', filename: 'logo_03.jpg' }
];

const media = [
  { id: '1iUJdXuYhsMJBF4SY4c_x13pJoV0sVSAg', filename: 'real_01.jpg' },
  { id: '1RkeNxUo5oVaE8CpeOathBswRtu9n7gW-', filename: 'real_02.jpg' },
  { id: '1hRIc2D-8_B29AQZxJZ_vP0qifeeTrzLW', filename: 'real_03.jpg' },
  { id: '1Iu1kKtk1BbEFq7dMzqLGFafftjoBTdJ0', filename: 'real_04.jpg' },
  { id: '1BoxYPorNqLU3ZzoMKIm6Nj1avhYgiQSG', filename: 'real_05.jpg' },
  { id: '1XyjwBmjPauptKcjIDcm0bgr0Ue--9gG5', filename: 'real_06.jpg' },
  { id: '1SmyAqcXhwDlUklOrk_LeqVkrHEanZ8yP', filename: 'real_07.jpg' },
  { id: '1PrhCdXNYouLLUArSvKn6MSri8ifeuJds', filename: 'real_08.jpg' },
  { id: '1PPnGh6SaJLD-4wEwkc4wtM48i3RY_NpD', filename: 'real_09.jpg' },
  { id: '1tX16VHwIMpm2E6TvzTA5KhGfXDv4INU_', filename: 'real_10.jpg' }
];

const outDir = 'D:\\HUDI\\Spa\\public\\images\\drive';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function downloadFile(id, filename) {
  const destPath = path.join(outDir, filename);
  // Try google direct usercontent download link
  const urls = [
    `https://drive.usercontent.google.com/download?id=${id}&export=download&authuser=0`,
    `https://drive.google.com/uc?export=download&id=${id}`,
    `https://lh3.googleusercontent.com/d/${id}`
  ];

  for (const url of urls) {
    try {
      console.log(`Downloading ${filename} from ${url}...`);
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      if (res.ok) {
        const buffer = await res.arrayBuffer();
        if (buffer.byteLength > 1000) {
          fs.writeFileSync(destPath, Buffer.from(buffer));
          console.log(`✓ Saved ${filename} (${buffer.byteLength} bytes)`);
          return true;
        }
      }
    } catch (e) {
      console.error(`Failed ${url}:`, e.message);
    }
  }
  console.error(`✗ Could not download ${filename}`);
  return false;
}

async function run() {
  for (const item of logos) {
    await downloadFile(item.id, item.filename);
  }
  for (const item of media) {
    await downloadFile(item.id, item.filename);
  }
  console.log('Finished downloading Drive assets!');
}

run();
