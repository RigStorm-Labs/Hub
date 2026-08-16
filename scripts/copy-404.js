// scripts/copy-404.js
import { existsSync, copyFileSync } from "fs";
import { resolve, dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const distDir = resolve(__dirname, "../dist");
const indexFile = join(distDir, "index.html");
const notFoundFile = join(distDir, "404.html");

if (!existsSync(indexFile)) {
  console.error("Error: dist/index.html not found. Run the build first.");
  process.exit(1);
}

try {
  copyFileSync(indexFile, notFoundFile);
  console.log("Copied index.html -> 404.html");
} catch (err) {
  console.error("Failed to copy index.html to 404.html:", err);
  process.exit(1);
}
