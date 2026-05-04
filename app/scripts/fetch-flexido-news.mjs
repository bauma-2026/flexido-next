import fs from "fs";
import path from "path";
import { JSDOM } from "jsdom";

const BASE = "https://www.flexido.eu";

async function fetchHTML(url) {
  const res = await fetch(url);
  return await res.text();
}

function absoluteUrl(url) {
  if (!url) return null;
  if (url.startsWith("//")) return `https:${url}`;
  if (url.startsWith("/")) return `${BASE}${url}`;
  return url;
}

function slugFromHref(href) {
  return href.replace(BASE, "").replace(/^\//, "").replace(/\/$/, "");
}

async function downloadImage(url, filePath) {
  if (!url) return;

  const res = await fetch(url);
  const buffer = await res.arrayBuffer();

  fs.writeFileSync(filePath, Buffer.from(buffer));
}

async function run() {
  console.log("Fetching news...");

  const html = await fetchHTML(`${BASE}/novice`);
  fs.writeFileSync("debug-flexido-novice.html", html);

  const dom = new JSDOM(html);
  const doc = dom.window.document;

  const articles = [];
  const seen = new Set();

  const titleEls = doc.querySelectorAll('[itemprop="name"]');

  for (const titleEl of titleEls) {
    const title = titleEl.textContent?.trim();
    if (!title) continue;

    const link = titleEl.closest("a") || titleEl.parentElement?.closest("a");
    const href = link?.getAttribute("href");
    if (!href) continue;

    const slug = slugFromHref(href);
    if (!slug || seen.has(slug)) continue;

    const card =
      titleEl.closest(".item") ||
      titleEl.closest(".entry-image") ||
      titleEl.parentElement;

    const img =
      card?.querySelector("img.post-img") ||
      link.querySelector("img.post-img") ||
      doc.querySelector(`a[href="${href}"] img.post-img`);

    const rawImage = img?.getAttribute("src");
    const imageUrl = absoluteUrl(rawImage);

    let image = null;

    if (imageUrl) {
      const fileName = path.basename(new URL(imageUrl).pathname);
      const localPath = `public/images/news/${fileName}`;

      await downloadImage(imageUrl, localPath);
      image = `/images/news/${fileName}`;
    }

    seen.add(slug);

    articles.push({
      title,
      slug,
      image,
    });
  }

  fs.writeFileSync("src/data/news.json", JSON.stringify(articles, null, 2));

  console.log(`Done ✅ Found ${articles.length}`);
}

run();