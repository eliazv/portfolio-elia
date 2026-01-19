const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

(async () => {
  const dir = path.join(__dirname, "..", "public", "images", "icons");
  if (!fs.existsSync(dir)) {
    console.error("Directory not found:", dir);
    process.exit(1);
  }
  const files = fs.readdirSync(dir).filter((f) => /\.(png|jpe?g)$/i.test(f));
  if (files.length === 0) {
    console.log("No PNG/JPG files found in", dir);
    return;
  }
  for (const file of files) {
    const input = path.join(dir, file);
    const outName = path.basename(file).replace(/\.(png|jpe?g)$/i, ".webp");
    const out = path.join(dir, outName);
    await sharp(input).webp({ quality: 80 }).toFile(out);
    const { size } = fs.statSync(out);
    console.log(`${outName}\t${size}`);
  }
})();

process.on("unhandledRejection", (err) => {
  console.error(err);
  process.exit(1);
});
