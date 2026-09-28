import fs from 'fs';

async function checkFolder(name, url) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    const html = await res.text();
    fs.writeFileSync(`scripts/${name}.html`, html);
    console.log(`${name} html saved, length:`, html.length);
  } catch (err) {
    console.error(`Error fetching ${name}:`, err);
  }
}

await checkFolder('logo_folder', 'https://drive.google.com/drive/folders/1_byEQOhoabxRiK3wvr84VcoPZ57AIiHA?usp=sharing');
await checkFolder('media_folder', 'https://drive.google.com/drive/folders/1zLStnRQhJIAoSlSjrtGeIL1kPl-XOWbt?usp=sharing');
