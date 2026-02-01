/**
 * Compresses all PNG/JPEG images in src/assets.
 * Resizes to max 1200px width and applies format-specific compression.
 * Run: node scripts/compress-images.js
 */

const path = require('path');
const fs = require('fs');

const ASSETS_DIR = path.join(__dirname, '..', 'src', 'assets');
const MAX_WIDTH = 1200;
const JPG_QUALITY = 82;
const PNG_COMPRESSION = 9;

async function compressImages() {
  let sharp;
  try {
    sharp = require('sharp');
  } catch {
    console.error('Run: npm install --save-dev sharp');
    process.exit(1);
  }

  const extensions = /\.(png|jpg|jpeg|PNG|JPG|JPEG)$/;
  const files = [];

  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) walk(full);
      else if (extensions.test(e.name)) files.push(full);
    }
  }

  walk(ASSETS_DIR);
  console.log(`Found ${files.length} images to process.\n`);

  for (const filePath of files) {
    const rel = path.relative(process.cwd(), filePath);
    const ext = path.extname(filePath).toLowerCase();
    const tempPath = filePath + '.tmp';

    try {
      const meta = await sharp(filePath).metadata();
      const needsResize = meta.width > MAX_WIDTH;

      let pipeline = sharp(filePath);
      if (needsResize) {
        pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
      }

      if (ext === '.jpg' || ext === '.jpeg') {
        await pipeline.jpeg({ quality: JPG_QUALITY }).toFile(tempPath);
      } else if (ext === '.png') {
        await pipeline.png({ compressionLevel: PNG_COMPRESSION }).toFile(tempPath);
      } else {
        continue;
      }

      const before = fs.statSync(filePath).size;
      const after = fs.statSync(tempPath).size;
      if (after < before) {
        fs.renameSync(tempPath, filePath);
        const pct = ((1 - after / before) * 100).toFixed(1);
        console.log(`${rel}: ${(before / 1024).toFixed(1)} KB → ${(after / 1024).toFixed(1)} KB (${pct}% smaller)`);
      } else {
        fs.unlinkSync(tempPath);
        console.log(`${rel}: kept original (${(before / 1024).toFixed(1)} KB)`);
      }
    } catch (err) {
      if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
      console.error(`${rel}: ${err.message}`);
    }
  }

  console.log('\nDone.');
}

compressImages();
