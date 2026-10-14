// Renders cv/Jayson-Emeterio-CV.html to cv/Jayson-Emeterio-CV.pdf with a
// locally installed Chrome or Edge (headless). Nothing is uploaded anywhere.
// The PDF is written to /cv, which is git-ignored and not served by Next.js.
// Override the browser path with the CHROME_PATH environment variable.
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);

const browser = candidates.find((path) => existsSync(path));
if (!browser) {
  console.error("No Chrome/Edge found. Set CHROME_PATH and retry.");
  process.exit(1);
}

const source = resolve("cv/Jayson-Emeterio-CV.html");
const output = resolve("cv/Jayson-Emeterio-CV.pdf");
const profileDir = mkdtempSync(join(tmpdir(), "cv-pdf-"));

try {
  execFileSync(
    browser,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-first-run",
      "--no-default-browser-check",
      "--disable-extensions",
      `--user-data-dir=${profileDir}`,
      "--no-pdf-header-footer",
      `--print-to-pdf=${output}`,
      pathToFileURL(source).href,
    ],
    { stdio: "inherit" },
  );
} finally {
  rmSync(profileDir, { recursive: true, force: true });
}

console.log(`Wrote ${output}`);
