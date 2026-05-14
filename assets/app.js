const form = document.querySelector("#copyForm");
const output = document.querySelector("#output");
const copyButton = document.querySelector("#copyButton");

const toneMap = {
  Premium: ["refined", "polished", "designed for customers who expect more"],
  Friendly: ["easygoing", "helpful", "made to fit naturally into everyday routines"],
  Bold: ["direct", "high-converting", "built to stand out fast"],
  Minimal: ["clean", "simple", "focused on what matters"],
  Luxury: ["elevated", "detail-rich", "crafted for a more considered experience"]
};

function splitFeatures(raw) {
  return raw
    .split(/,|\n/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function sentenceCase(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function generateCopy(values) {
  const features = splitFeatures(values.features);
  const toneWords = toneMap[values.tone] || toneMap.Premium;
  const featureText = features.length ? features.join(", ") : "thoughtful everyday features";
  const bullets = features
    .slice(0, 5)
    .map((feature) => `• ${sentenceCase(feature)} for ${values.audience}`)
    .join("<br>");

  const description = `${values.productName} helps ${values.audience} create ${values.benefit}. With ${featureText}, it delivers a ${toneWords[0]} experience that feels ${toneWords[1]} from the first use. Ideal for ${values.platform} shoppers, this product is ${toneWords[2]}.`;

  const headline = `${values.productName}: ${sentenceCase(values.benefit)} starts here`;
  const adHook = `Upgrade the way ${values.audience} work, create, and recharge. ${values.productName} brings together ${features.slice(0, 3).join(", ")} in one ${values.tone.toLowerCase()} product.`;
  const email = `Meet ${values.productName}, the simple way to bring ${values.benefit} into your day. It combines ${featureText} so ${values.audience} can get more done with less friction.`;
  const seoTitle = `${values.productName} for ${sentenceCase(values.audience)} | ${values.platform} Copy`;
  const meta = `Shop ${values.productName} and enjoy ${values.benefit}. Discover ${features.slice(0, 3).join(", ")} in a ${values.tone.toLowerCase()} design.`;

  return [
    ["Product Description", description],
    ["Feature Bullets", bullets || "• Add more features to generate stronger bullets"],
    ["Ad Headline", headline],
    ["Ad Hook", adHook],
    ["Email Blurb", email],
    ["SEO Title", seoTitle],
    ["Meta Description", meta]
  ];
}

function render(results) {
  output.innerHTML = results
    .map(([title, body]) => `<section class="result-block"><span class="result-title">${title}</span><div>${body}</div></section>`)
    .join("");
}

function getValues() {
  return {
    productName: document.querySelector("#productName").value.trim(),
    features: document.querySelector("#features").value.trim(),
    audience: document.querySelector("#audience").value.trim() || "busy shoppers",
    tone: document.querySelector("#tone").value,
    platform: document.querySelector("#platform").value,
    benefit: document.querySelector("#benefit").value.trim() || "a better everyday experience"
  };
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  render(generateCopy(getValues()));
});

copyButton?.addEventListener("click", async () => {
  const text = output.innerText.trim();
  if (!text) return;
  await navigator.clipboard.writeText(text);
  copyButton.textContent = "Copied";
  setTimeout(() => {
    copyButton.textContent = "Copy";
  }, 1400);
});

if (form && output) {
  render(generateCopy(getValues()));
}
