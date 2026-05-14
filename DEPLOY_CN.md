# sellcopytools.com 部署步骤

推荐用 Cloudflare Pages，因为静态站免费、HTTPS 免费、后续 DNS 也方便。

## 方案 A：Cloudflare Pages

1. 注册或登录 Cloudflare。
2. 添加站点 `sellcopytools.com`。
3. Cloudflare 会给你两个 nameserver。
4. 去你购买域名的平台，把 nameserver 改成 Cloudflare 提供的两个地址。
5. 等 DNS 生效，通常几分钟到数小时。
6. 打开 Cloudflare Pages，新建项目。
7. 上传当前项目文件夹，或者连接 GitHub 仓库。
8. 构建设置保持空：
   - Build command: 留空
   - Output directory: `/`
9. 部署成功后，在 Pages 项目里添加自定义域名：
   - `sellcopytools.com`
   - `www.sellcopytools.com`
10. 确认 HTTPS 状态为 Active。

## 方案 B：Netlify

1. 登录 Netlify。
2. Add new site。
3. 直接拖拽上传整个项目文件夹。
4. 部署成功后进入 Domain settings。
5. 添加 `sellcopytools.com`。
6. 按 Netlify 提示修改 DNS。
7. 开启 HTTPS。

## 上线后马上做

1. 打开 `https://sellcopytools.com`，确认首页能访问。
2. 打开 `https://sellcopytools.com/sitemap.xml`，确认 sitemap 能访问。
3. 打开 Google Search Console。
4. 添加域名资产 `sellcopytools.com`。
5. 按提示做 DNS 验证。
6. 提交 sitemap：`https://sellcopytools.com/sitemap.xml`。

## 邮箱转发

隐私政策里现在写的是 `contact@sellcopytools.com`。

你需要在域名平台或 Cloudflare Email Routing 里设置：

`contact@sellcopytools.com` -> 你的常用邮箱

这样用户、Google、广告平台看到的是正规站点邮箱。
