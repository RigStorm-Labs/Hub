// scripts/copy-404.js
const fs = require("fs");
const path = require("path");

const distDir = path.resolve(__dirname, "../dist");
const indexFile = path.join(distDir, "index.html");
const notFoundFile = path.join(distDir, "404.html");

if (!fs.existsSync(indexFile)) {
  console.error("Error: dist/index.html not found. Run the build first.");
  process.exit(1);
}

try {
  fs.copyFileSync(indexFile, notFoundFile);
  console.log("Copied index.html -> 404.html");
} catch (err) {
  console.error("Failed to copy index.html to 404.html:", err);
  process.exit(1);
}
