# 赚钱上线操作指南

这个项目是一个英文免费工具站 MVP，方向是用免费工具拿 SEO 流量，再通过广告、联盟推广和后续付费功能变现。

## 你现在拥有的东西

- 首页可用的英文营销文案生成器
- 4 个 SEO 页面：
  - Product Description Generator
  - Ad Headline Generator
  - Email Copy Generator
  - SEO Meta Description Generator
- 广告位占位框
- 隐私政策、条款、站点地图、robots 文件
- 无后端、无数据库、无 AI API 成本

## 第一步：域名

你已经买了 `sellcopytools.com`，这个名字可以直接用。

## 第二步：部署网站

最简单路线：

1. 注册 Netlify 或 Cloudflare Pages。
2. 新建站点。
3. 上传整个项目文件夹，或者连接 GitHub 仓库。
4. 绑定你的域名。
5. 开启 HTTPS。

这是静态站，不需要服务器，也不需要数据库。

## 第三步：检查联系信息

上线前必须替换：

- `https://sellcopytools.com` 已经写入 canonical、robots 和 sitemap。
- `legal/privacy.html` 里的联系邮箱现在是 `contact@sellcopytools.com`。
- 你需要在域名平台开启邮箱转发，把 `contact@sellcopytools.com` 转发到你自己的常用邮箱。

可以用编辑器全局搜索替换。

## 第四步：提交给 Google

1. 打开 Google Search Console。
2. 添加你的域名。
3. 验证域名所有权。
4. 提交：`https://你的域名/sitemap.xml`
5. 等待收录。

## 第五步：先别急着申请广告

Google AdSense 通常不喜欢太薄的网站。建议先做这些：

- 至少扩展到 20-30 个页面。
- 每个页面有真实有用的内容，不要只是复制模板。
- 首页和工具都能正常使用。
- 隐私政策、条款、联系方式齐全。
- 网站上线 2-4 周，有一些自然访问后再申请。

## 第六步：扩展页面方向

继续做这些关键词页面：

- Shopify product description generator
- Amazon product description generator
- Etsy product description generator
- Facebook ad headline generator
- Google ad description generator
- Instagram caption generator for products
- Product bullet point generator
- Product title generator
- Landing page headline generator
- Brand slogan generator
- Product launch email generator
- Abandoned cart email generator

每个页面都链接回首页生成器。

## 第七步：接广告赚钱

当网站有内容和流量后：

1. 申请 Google AdSense。
2. 通过后拿到广告代码。
3. 替换页面里的 `.ad-slot` 占位区域。
4. 观察哪些页面访问最多。
5. 优先围绕高访问页面继续扩展内容。

## 第八步：增加第二收入来源

广告收入通常前期慢，所以建议同时加联盟推广：

- Shopify affiliate
- email marketing tools
- ecommerce SEO tools
- product photo tools
- landing page builders

可以在工具页底部放“recommended ecommerce tools”，但要保持真实、有用，不要堆垃圾链接。

## 第九步：后续升级成微 SaaS

等有流量后，可以加付费功能：

- 批量生成 CSV
- 保存 brand voice
- 多语言生成
- 接入真正的 AI API
- 每月免费次数，超过后订阅

推荐路线是：先免费拿流量，再把高频用户转成付费用户。

## 重要现实预期

这不是上线当天就赚钱的模式。正常节奏是：

- 第 1 周：上线 MVP，提交 Google。
- 第 2-4 周：扩展到 20-30 个页面。
- 第 2-3 个月：观察收录和关键词。
- 第 3 个月后：如果有稳定访问，申请广告和联盟。

关键不是一次做完，而是持续扩展低竞争、有商业意图的工具页面。
