# SellCopyTools 上线操作记录

本文记录 `sellcopytools.com` 从域名购买到 Cloudflare 部署成功的实际操作路径，方便后续复盘或复制到下一个站点。

## 1. 项目目标

做一个英文免费工具站：

- 域名：`sellcopytools.com`
- 类型：免费 ecommerce copy generator 工具站
- 初期变现方向：SEO 流量 + 广告位 + 后续联盟推广
- 技术形态：静态页面 / Cloudflare Worker 部署

## 2. 本地项目准备

项目目录：

```text
/Users/taishan/Desktop/mine/AI/money-project
```

主要文件：

```text
index.html
assets/app.js
assets/styles.css
tools/product-description-generator.html
tools/ad-headline-generator.html
tools/email-copy-generator.html
tools/seo-meta-description-generator.html
legal/privacy.html
legal/terms.html
robots.txt
sitemap.xml
```

已经把站点公开 URL 改成：

```text
https://sellcopytools.com
```

隐私政策里的联系邮箱暂定为：

```text
contact@sellcopytools.com
```

## 3. GitHub 连接思路

后续推荐使用 GitHub 作为代码仓库：

```text
本地修改代码 -> git push -> Cloudflare 自动部署
```

本地已经初始化独立 Git 仓库，并做了初始提交：

```text
git init
git add .
git commit -m "Initial SellCopy Tools site"
```

注意：本机 `/Users/taishan` 上层已有 Git 仓库，所以 `money-project` 需要作为独立仓库维护。

## 4. Cloudflare 接管域名

在 Cloudflare 添加站点：

```text
sellcopytools.com
```

选择套餐：

```text
Free $0
```

Cloudflare 给出两个 nameserver：

```text
elly.ns.cloudflare.com
aaden.ns.cloudflare.com
```

## 5. 腾讯云修改 DNS 服务器

域名是在腾讯云 / DNSPod 管理的。

一开始误进入的是：

```text
腾讯云 DNSPod -> 云解析 DNS -> 解析设置
```

这个页面只能管理 A/CNAME/MX/TXT 等解析记录，不能修改 nameserver。

正确入口是：

```text
腾讯云 -> 域名注册 / 我的域名 -> sellcopytools.com -> 管理 -> 修改 DNS 服务器
```

把原来的 DNSPod nameserver：

```text
octahedron.dnspod...
genevieve.dnspod.net
```

替换成 Cloudflare nameserver：

```text
elly.ns.cloudflare.com
aaden.ns.cloudflare.com
```

保存后，回 Cloudflare 检查，最终状态显示：

```text
Your domain is now protected by Cloudflare
```

表示 Cloudflare 已经接管域名。

## 6. 部署到 Cloudflare Worker

实际部署后生成的临时地址为：

```text
https://money-project.weitaishan-albert.workers.dev/
```

这个地址可以打开，说明 Worker 项目本身部署成功。

这里要注意：

- `workers.dev` 能打开，表示项目部署成功。
- `sellcopytools.com` 能打开，还需要绑定域名和 DNS。

## 7. 绑定 Worker Routes

进入 Cloudflare 的 `sellcopytools.com` 域名设置。

左侧进入：

```text
Workers Routes
```

添加两条 route：

```text
sellcopytools.com/*
www.sellcopytools.com/*
```

两条 route 都指向 Worker：

```text
money-project
```

添加后 Workers Routes 页面显示：

```text
www.sellcopytools.com/* -> money-project
sellcopytools.com/* -> money-project
```

这一步表示：访问正式域名时，请求会被交给 `money-project` Worker。

## 8. 添加 DNS 记录

一开始 DNS Records 页面为空，所以即使 Worker Routes 成功，正式域名仍然不能访问。

原因：

```text
Worker Route 只负责匹配请求路径；
DNS 记录负责让域名请求进入 Cloudflare。
```

因此在 Cloudflare：

```text
DNS -> Records
```

添加两条记录。

第一条，根域名：

```text
Type: AAAA
Name: @
IPv6 address: 100::
Proxy status: Proxied / 橙色云
TTL: Auto
```

第二条，www：

```text
Type: CNAME
Name: www
Target: sellcopytools.com
Proxy status: Proxied / 橙色云
TTL: Auto
```

保存后等待几分钟。

## 9. 最终访问成功

最终可以访问：

```text
https://sellcopytools.com
https://www.sellcopytools.com
```

建议同时检查：

```text
https://sellcopytools.com/sitemap.xml
https://sellcopytools.com/robots.txt
```

## 10. 关键经验

这次踩过的点：

1. Cloudflare 域名接管成功，不等于网站部署成功。
2. `workers.dev` 能打开，只说明 Worker 项目成功。
3. Worker 自定义域名添加失败时，可以改用 Workers Routes。
4. Workers Routes 成功后，如果 DNS 记录为空，正式域名仍然打不开。
5. 对 Worker Route 来说，可以用 `AAAA @ -> 100::` 作为占位 DNS，让请求进入 Cloudflare。
6. `www` 可以用 `CNAME www -> sellcopytools.com`。
7. 两条 DNS 记录都要保持橙色云 Proxied。

## 11. 后续要做

上线后下一步：

1. 添加 Google Search Console。
2. 用 DNS TXT 验证域名。
3. 提交 sitemap：

```text
https://sellcopytools.com/sitemap.xml
```

4. 添加统计工具，例如 Google Analytics 或 Plausible。
5. 扩展到 20-30 个英文工具页或指南页。
6. 有内容和流量后申请 Google AdSense。
7. 后续加入 affiliate 推荐和付费功能。

## 12. 快速复用流程

下次做新站可以按这个顺序：

```text
买域名
-> Cloudflare 添加站点，选 Free
-> 域名注册商修改 nameserver 到 Cloudflare
-> 部署 Worker 或 Pages
-> 确认 workers.dev 或 pages.dev 能访问
-> 添加 Workers Routes 或 Custom Domain
-> DNS 添加 @ 和 www 记录
-> 正式域名访问测试
-> 提交 Google Search Console
```
