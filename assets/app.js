const form = document.querySelector("#copyForm");
const output = document.querySelector("#output");
const copyButton = document.querySelector("#copyButton");
const presetButtons = document.querySelectorAll("[data-preset]");

const presets = {
  shopify: {
    productName: "CloudSoft Bamboo Pajama Set",
    features: "Breathable bamboo viscose, relaxed fit, gift-ready packaging, soft waistband, machine washable",
    audience: "busy shoppers looking for comfortable sleepwear",
    tone: "Friendly",
    platform: "Shopify",
    benefit: "a softer bedtime routine"
  },
  amazon: {
    productName: "TrailPro Insulated Water Bottle",
    features: "Keeps drinks cold for 24 hours, leakproof lid, stainless steel body, cup holder friendly, powder-coated grip",
    audience: "hikers, commuters, and gym customers",
    tone: "Bold",
    platform: "Amazon",
    benefit: "cold drinks that last through the day"
  },
  etsy: {
    productName: "Personalized Linen Recipe Binder",
    features: "Custom name cover, refillable recipe pages, linen texture, divider tabs, bridal shower gift",
    audience: "home cooks and gift shoppers",
    tone: "Premium",
    platform: "Etsy",
    benefit: "a keepsake for family recipes"
  }
};

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

function titleCase(text) {
  return text
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function featureList(features, fallback) {
  return features.length ? features : fallback;
}

function makeBullets(items, suffix = "") {
  return items.map((item) => `• ${sentenceCase(item)}${suffix}`).join("<br>");
}

function makeTags(values, features) {
  const base = [
    values.productName,
    `${values.productName} gift`,
    `${values.audience} gift`,
    `${values.platform} product`,
    values.benefit,
    ...features
  ];

  return [...new Set(base)]
    .map((tag) => tag.toLowerCase().replace(/[^a-z0-9 ]/g, "").trim())
    .filter(Boolean)
    .slice(0, 13)
    .map((tag) => `• ${tag}`)
    .join("<br>");
}

function trackEvent(name, params = {}) {
  console.info("[SellCopy Tools event]", name, params);
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

function generateCopy(values) {
  const features = splitFeatures(values.features);
  const toneWords = toneMap[values.tone] || toneMap.Premium;
  const featureText = features.length ? features.join(", ") : "thoughtful everyday features";
  const keyFeatures = featureList(features.slice(0, 5), ["Useful product details", "Clear everyday benefit", "Shopper-friendly design"]);
  const bullets = makeBullets(keyFeatures, ` for ${values.audience}`);

  const description = `${values.productName} helps ${values.audience} create ${values.benefit}. With ${featureText}, it delivers a ${toneWords[0]} experience that feels ${toneWords[1]} from the first use. Ideal for ${values.platform} shoppers, this product is ${toneWords[2]}.`;

  const headline = `${values.productName}: ${sentenceCase(values.benefit)} starts here`;
  const adHook = `Upgrade the way ${values.audience} work, create, and recharge. ${values.productName} brings together ${features.slice(0, 3).join(", ")} in one ${values.tone.toLowerCase()} product.`;
  const email = `Meet ${values.productName}, the simple way to bring ${values.benefit} into your day. It combines ${featureText} so ${values.audience} can get more done with less friction.`;
  const seoTitle = `${values.productName} for ${sentenceCase(values.audience)} | ${values.platform} Copy`;
  const meta = `Shop ${values.productName} and enjoy ${values.benefit}. Discover ${features.slice(0, 3).join(", ")} in a ${values.tone.toLowerCase()} design.`;

  const common = [
    ["Product Description", description],
    ["Feature Bullets", bullets || "• Add more features to generate stronger bullets"],
    ["Ad Headline", headline],
    ["Ad Hook", adHook],
    ["Email Blurb", email],
    ["SEO Title", seoTitle],
    ["Meta Description", meta]
  ];

  if (values.platform === "Amazon") {
    return [
      ["Amazon Product Title", `${values.productName} for ${sentenceCase(values.audience)} - ${titleCase(keyFeatures.slice(0, 2).join(", "))}`],
      ["Amazon Bullet Points", makeBullets(keyFeatures, ` so shoppers can get ${values.benefit}`)],
      ["Amazon Product Description", `${description} Use the detail section to explain fit, materials, compatibility, care, and what is included so shoppers can compare quickly.`],
      ["Backend Search Term Ideas", [...new Set([values.productName, values.audience, values.benefit, ...keyFeatures])].slice(0, 8).join("; ")],
      ["A+ Content Headline", `Designed for ${values.audience} who want ${values.benefit}`]
    ];
  }

  if (values.platform === "Shopify") {
    return [
      ["Shopify Product Description", description],
      ["Shopify Feature Bullets", bullets],
      ["Shopify SEO Title", `${values.productName} | ${sentenceCase(values.benefit)} for ${values.audience}`],
      ["Shopify Meta Description", meta],
      ["Collection Page Blurb", `Discover ${values.productName} and related picks for ${values.audience} who want ${values.benefit}.`],
      ["Product Page CTA", `Add ${values.productName} to your setup today`]
    ];
  }

  if (values.platform === "Etsy") {
    return [
      ["Etsy Title", `${titleCase(values.productName)} for ${titleCase(values.audience)} - ${titleCase(keyFeatures.slice(0, 2).join(", "))}`],
      ["Etsy Description", `${description} Mention personalization options, materials, dimensions, processing time, and gift occasions when they apply.`],
      ["13 Etsy Tag Ideas", makeTags(values, keyFeatures)],
      ["Occasion Angles", makeBullets([`gift for ${values.audience}`, `everyday use`, `thoughtful personalized present`, `small business favorite`])],
      ["Short Shop Update", `New in the shop: ${values.productName}, made for ${values.audience} who want ${values.benefit}.`]
    ];
  }

  if (values.platform === "Facebook Ads") {
    return [
      ["Facebook Ad Headlines", [`${values.productName} for ${sentenceCase(values.audience)}`, `Create ${values.benefit}`, `Meet your new ${values.tone.toLowerCase()} upgrade`].map((item) => `• ${item}`).join("<br>")],
      ["Primary Text", adHook],
      ["Benefit Bullets", bullets],
      ["CTA Ideas", "• Shop now<br>• See how it works<br>• Explore the product"],
      ["Retargeting Angle", `Still thinking it over? ${values.productName} brings ${featureText} together to help you create ${values.benefit}.`]
    ];
  }

  if (values.platform === "Email") {
    return [
      ["Subject Lines", [`Meet ${values.productName}`, `${sentenceCase(values.benefit)} starts here`, `A ${values.tone.toLowerCase()} upgrade for ${values.audience}`].map((item) => `• ${item}`).join("<br>")],
      ["Preview Text", `${values.productName} combines ${featureText} for ${values.audience}.`],
      ["Email Blurb", email],
      ["Feature Callouts", bullets],
      ["CTA Line", `Explore ${values.productName} today.`]
    ];
  }

  return common;
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

function setField(selector, value) {
  const field = document.querySelector(selector);
  if (field) field.value = value;
}

presetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const preset = presets[button.dataset.preset];
    if (!preset) return;

    setField("#productName", preset.productName);
    setField("#features", preset.features);
    setField("#audience", preset.audience);
    setField("#tone", preset.tone);
    setField("#platform", preset.platform);
    setField("#benefit", preset.benefit);

    render(generateCopy(getValues()));
    trackEvent("select_copy_preset", {
      preset: button.dataset.preset,
      platform: preset.platform
    });
  });
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const values = getValues();
  render(generateCopy(values));
  trackEvent("generate_copy", {
    platform: values.platform,
    tone: values.tone
  });
});

copyButton?.addEventListener("click", async () => {
  const text = output.innerText.trim();
  if (!text) return;
  await navigator.clipboard.writeText(text);
  trackEvent("copy_generated_output");
  copyButton.textContent = "Copied";
  setTimeout(() => {
    copyButton.textContent = "Copy";
  }, 1400);
});

if (form && output) {
  render(generateCopy(getValues()));
}
