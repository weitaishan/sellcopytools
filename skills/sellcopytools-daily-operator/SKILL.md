---
name: sellcopytools-daily-operator
description: Use this skill when operating SellCopyTools day by day: record what was done before, record today's Google Search Console, Google Analytics, Bing Webmaster, deployment, indexing, keyword, and optimization data, decide today's tasks, and write tomorrow's plan.
---

# SellCopyTools Daily Operator

Use this skill whenever the user asks what to do today, reports daily data, asks whether progress is normal, or asks to record SellCopyTools operations.

## Core Rule

Every operating day must produce three things:

```text
1. Yesterday / previous progress summary
2. Today's data and actions
3. Tomorrow's plan
```

Always update project documentation when meaningful data or actions happen.

## Files To Maintain

Primary daily log:

```text
DAILY_OPERATING_LOG_CN.md
```

Supporting records:

```text
OPERATION_LOG_CN.md
WEEKLY_OPERATING_PLAN_CN.md
MONETIZATION_PLAN_CN.md
KEYWORD_RESEARCH_CN.md
COMPETITOR_KEYWORD_AUDIT_CN.md
```

## Daily Workflow

### 1. Read Current State

Check:

```text
git status --short
tail of DAILY_OPERATING_LOG_CN.md
tail of OPERATION_LOG_CN.md
```

If the daily log does not exist, create it.

### 2. Ask For Or Interpret Screenshots

The user may send screenshots from:

```text
Google Search Console -> 效果
Google Search Console -> 网页
Google Search Console -> 站点地图
Google Analytics -> 页面和屏幕
Google Analytics -> 事件
Bing Webmaster Tools -> Search Performance
Bing Webmaster Tools -> Sitemaps
Cloudflare / GitHub deployment
```

Extract and record exact visible numbers:

```text
总点击次数
总曝光次数 / impressions
平均点击率
平均排名
查询词
排名页面
已编入索引
未编入索引
sitemap 状态
已发现网页
Analytics 活跃用户
国家/地区
热门页面
事件 generate_copy
事件 copy_generated_output
Bing clicks / impressions
```

If a number is not visible, write `未提供` instead of guessing.

### 3. Decide Today's Action

Use this priority order:

```text
1. If Search Console has new query terms, optimize the matching page.
2. If pages are indexed slowly, strengthen 1-2 core pages instead of adding many pages.
3. If Analytics shows users using a page, improve that page.
4. If Bing or Google setup is incomplete, finish setup first.
5. If no data changed, record the status and avoid unnecessary edits.
```

Never recommend:

```text
刷访问
重复大量提交 sitemap
一次性请求所有 URL 编入索引
太早申请 AdSense
大量注册 Affiliate 平台
低质量批量页面
```

### 4. Record Daily Entry

Append to `DAILY_OPERATING_LOG_CN.md` with this structure:

```markdown
## Day N - YYYY-MM-DD

### 昨天/之前进度

### 今日数据

### 今日判断

### 今日执行

### 明日计划

### 不做事项
```

Also append important operational milestones to `OPERATION_LOG_CN.md`.

### 5. If Code Or Docs Changed

Run checks appropriate to the change:

```text
For content/link changes: internal link check
For JavaScript changes: node --check assets/app.js
For sitemap changes: count <loc>
```

Then:

```text
git add ...
git commit -m "..."
git push origin main
```

If push fails because network/proxy needs permission, rerun with escalation.

## Current Business Direction

The project is:

```text
Domain: sellcopytools.com
Model: free ecommerce sales copy tools
Initial monetization: SEO traffic -> AdSense
Later monetization: affiliate links and stronger tool features
```

Core search theme:

```text
sales copy generator
ecommerce sales copy
product description generator
Shopify copy tools
Amazon listing copy tools
Etsy title and description tools
```

## Decision Milestones

Early stage:

```text
Day 1-7: setup, sitemap, first impressions, core page quality
Day 7-14: indexing growth and query discovery
Day 14-30: keyword-led content optimization
Day 30-60: improve pages with impressions but no clicks
Day 60-90: consider AdSense if content, indexing, and traffic are healthy
```

## Tone For User

Be practical and calm:

```text
Tell the user what changed.
Tell the user what it means.
Tell the user exactly what to do today.
Tell the user what not to do.
Record the data.
Keep the money path realistic.
```
