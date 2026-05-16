# SellCopyTools 竞品与关键词观察

更新时间：2026-05-16

## 观察结论

当前方向可以继续，但产品体验需要从“通用文案生成器”升级成“平台专用输出包”。

优秀竞品常见做法：

```text
按平台输出：Shopify / Amazon / Etsy / eBay / Walmart / TikTok Shop
一次生成多种字段：title、description、bullets、meta description、tags、alt text
强调 SEO 和转化
强调无需注册、免费试用、快速生成
强调批量处理或图片识别
```

我们当前已经有：

```text
34 个 URL
多个平台长尾页面
Google Analytics
Google Search Console
Bing Webmaster Tools
基础信任页面
```

还需要强化：

```text
首页生成器的实际可用性
平台专用输出
关键词与页面之间的匹配度
后续用户行为统计
```

## 真实搜索结果里看到的竞品

### ProductCopyAI

页面特点：

```text
强调 Shopify、Amazon、Etsy、eBay、Walmart、TikTok Shop、WooCommerce
一次生成 title、description、bullet points、meta title、meta description、keywords、image alt texts
强调图片上传识别、批量生成、30 秒生成
```

对我们的启发：

```text
不能只输出一段 description。
要把输出拆成平台需要的多个字段。
```

### AdNabu

页面特点：

```text
强调 100% free、no signup
强调 marketplace-ready
覆盖 Shopify、Google Shopping、Amazon、Meta、Etsy、Walmart、TikTok、eBay、Pinterest、Microsoft
```

对我们的启发：

```text
免费、无需注册、平台适配要在页面上说清楚。
```

### Yodel

页面特点：

```text
定位 Shopify store owners
强调 Shopify App、商家评价、节省时间
```

对我们的启发：

```text
Shopify 相关页面可以更具体地服务店主，而不是泛泛写 ecommerce。
```

### Etsy 工具类竞品

页面特点：

```text
强调 Etsy title、description、13 tags
强调 handmade、vintage、digital downloads
有些工具强调上传产品图片生成完整 listing
```

对我们的启发：

```text
Etsy 页面必须包含 13 tags 这个卖家熟悉的需求点。
```

## 第一轮产品优化

已执行：

```text
首页生成器从通用输出改成平台专用输出。
```

不同平台现在会输出：

```text
Shopify：product description、feature bullets、SEO title、meta description、collection blurb、CTA
Amazon：product title、bullet points、description、backend search terms、A+ content headline
Etsy：title、description、13 tag ideas、occasion angles、shop update
Facebook Ads：headlines、primary text、benefit bullets、CTA、retargeting angle
Email：subject lines、preview text、email blurb、feature callouts、CTA
```

同时新增：

```text
generate_copy 事件
copy_generated_output 事件
```

作用：

```text
后续在 Google Analytics 中可以判断用户是否真的使用生成器。
这比只看 pageview 更接近产品价值。
```

## 下一步优化优先级

P0：

```text
继续观察 Search Console 查询词。
如果某个页面有 impressions，就优先优化那个页面。
```

P1：

```text
给重点工具页增加更强的示例区。
例如 Etsy Title Generator 增加 13 tags 示例。
Amazon Product Title Generator 增加标题结构示例。
Shopify Meta Description Generator 增加 snippet 示例。
```

P2：

```text
以后可以做图片输入、批量 CSV、更多平台。
这些是产品升级方向，不是第 2 天必须做。
```

## 当前不做的事

```text
不做需要服务器和账号系统的复杂功能。
不做真正 AI API 调用，避免过早增加成本。
不申请 AdSense。
不急着注册 Affiliate。
```

当前重点仍然是：

```text
收录
展示次数
关键词验证
用户是否真的使用生成器
```
