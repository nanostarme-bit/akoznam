const { execSync } = require("child_process");
const fs = require("fs");

// Run the Vite build (prerenders static HTML for all routes)
// The TanStack Start prerender can throw a harmless cleanup error on some Node versions,
// so we verify the output files exist before deciding success.
try {
  execSync("npx vite build", { stdio: "inherit" });
} catch {
  // ignored — we validate output below
}

const indexOk = fs.existsSync("dist/client/index.html");
const podcastOk = fs.existsSync("dist/client/podcast/index.html");

if (indexOk && podcastOk) {
  console.log("\n✅ Static build output verified in dist/client/");
  process.exit(0);
}

console.error("\n❌ Build failed — expected output files not found in dist/client/");
process.exit(1);
