# hi-spark.net 发布包 · 2026-10-14e

给技术的一页说明。**纯静态更新，无数据库改动，服务器不需要装 Node。**

> 本包**取代** 2026-10-14c / 2026-10-14d。BUG 修复 + SEO/GEO 加固 + 分享/CTA 覆盖补齐，
> 全都在里面。数据一条未改（品牌/APP/云平台/认证条数完全一致）。

## 一、发哪个文件

| 文件 | 用途 | 大小 |
|---|---|---|
| **hi-spark-net-2026-10-14e-static.tar.gz** | **推荐**，解压覆盖网站根目录（2,124 个文件） | 3.95 MB |
| hi-spark-net-2026-10-14e-static.zip | 同上 | 13.98 MB |
| hi-spark-net-2026-10-14e-changed-files.zip | 增量（90 新增 + 1,623 更新） | 11.97 MB |
| hi-spark-net-2026-10-14e-full-source.zip | 完整源码 + 构建工具 | 14.60 MB |

## 二、内容一览

### 2.1 四个显示层 BUG（已修）

| 现象 | 原因 |
|---|---|
| 汉堡菜单显示 `nav.community`；四个知识中心详情页标题显示 `ref.sources` / `ref.related` / `ref.causes` / `ref.specs` 等 24 种乱码 | 这些 key 既不在静态字典也不在运行时注入里，已补齐 24 key × EN/ES/FR |
| 18 个 `/market/*.html` 导航整块错位成一个超长链接 | 拼接时漏结尾引号 |
| 44 个 `/certification/*.html` 的相关认证卡片全部 404（302 处） | 相对链接被多加了 `../` |
| `community.html` / `methodology.html` / `perf-demo.html` 多一个 `</main>` | 手写页面遗留 |

### 2.2 SEO / GEO 加固（已完成）

- **44 页**结构化数据里的 `url`/`@id` 原为 `https://hi-spark.net/en/xxx/`（不存在的地址）→ 改回真实 canonical
- **1,677 处面包屑**原指向 `/app/`、`/brand/` 等返回 **403** 的目录 → 改指已发布的 hub 页
- **西语/法语此前永远无法被收录**：`?lang=es` 页面的 canonical 指向英文版，等于自我否定 → 改为自指
- **1,651 页**补 `og:locale` + `og:locale:alternate`；补 `og:image:alt` / `twitter:image:alt`
- market 页标题最长 75 字符 → 改为 60 字符自适应
- ItemList 由占位结构改为真实数据生成的列表（15 个 hub 页）
- 新增 **/dataset.html** 数据集落地页（`Dataset` + `FAQPage` 结构化数据），`llms.txt` 增 `## Open data` 段，全站导航加入口

### 2.3 分享 / CTA 覆盖（本版补齐）

修复前：分享栏和 CTA 只存在于 1,648 个实体页 + 首页，**30 个 hub 与法务页完全没有**。
原因是注入逻辑只填「已有占位符」的页面，而这些页面源码里没有占位。

现已补齐：

| 分组 | 页面 | 加了什么 |
|---|---|---|
| 内容型 15 页 | apps、brand、cloud、knowledge、categories、products、compare、community、amazon-best-sellers、amazon-brands、brand-insights、ai-signals、dataset、manual、category | 分享栏（8 渠道）+ CTA |
| 法务/说明 9 页 | privacy、terms、cookies、legal、editorial-policy、corrections-policy、affiliate-disclosure、ai-disclosure、methodology | 仅 CTA |
| 内部 6 页 | 404、styleguide、logo-gallery、perf-demo、sitemap、search | 按设计不加 |

同时给这 24 页补上 `assets/share-cta.js`，之前没有这个脚本，导致「复制链接 / 复制引用」按钮和订阅表单提交**点了没反应**。

**最终覆盖**：分享栏 1,682 页｜CTA 1,691 页｜均为预渲染静态 HTML，无 JS 也能看到链接与文案。

### 2.4 知识库

知识库本体（协议 61 / 标准 47 / 指南 42 / 概念 33 / 知识型 App 26 = **209 条**）**本版未新增**，
沿用 2026-10-08 的数据。本版新增的是**能力**与**页面**：

- 四个参考中心共 **163 条**记录（认证 44 / 兼容 47 / 型号 32 / 故障 40）全部加上
  「可见问答 + FAQPage 结构化数据」——型号与故障中心此前**完全没有问答**
- 新增 **18 个市场准入页**（`/market/*.html`）+ 数据集页

## 三、部署

```bash
tar -xzf hi-spark-net-2026-10-14e-static.tar.gz -C /var/www/hi-spark.net/
# 或增量
unzip -o hi-spark-net-2026-10-14e-changed-files.zip -d /var/www/hi-spark.net/

find /var/www/hi-spark.net -type d -exec chmod 755 {} \;
find /var/www/hi-spark.net -type f -exec chmod 644 {} \;
```

## 四、部署后自检

```bash
curl -s https://hi-spark.net/index.html | grep -c 'nav.community'                 # 期望 0
curl -s https://hi-spark.net/certification/fcc.html | grep -c 'href="\.\./fcc.html'  # 期望 0
curl -s https://hi-spark.net/apps.html | grep -c 'share-bar-inner'                # 期望 1
curl -s https://hi-spark.net/knowledge.html | grep -c 'cta-band'                  # 期望 1
curl -sI https://hi-spark.net/dataset.html | head -1                              # 期望 200
curl -s https://hi-spark.net/index.html | grep -o 'v=20261014[a-z]' | head -1      # 期望 v=20261014q
curl -sI https://hi-spark.net/62e9a61f510b91220b81b276459c170d.txt | head -1       # 期望 200（IndexNow 前提）
```

## 五、部署后给运营的一件事

**IndexNow 推送**（密钥文件上线后才可用）：

```bash
unzip -q hi-spark-net-2026-10-14e-full-source.zip -d /tmp/iot && cd /tmp/iot
node tools/ping_indexnow.mjs
```

其余账号类操作（Google Search Console、Bing、Zenodo DOI、GitHub 转公开）见 `SEO-GEO-CHECKLIST.md`。

## 六、nginx 仍待处理的 5 项（一直未生效）

1. JS/CSS/SVG 开 gzip（首页少下约 400 KB）
2. 启用自定义 404（`404.html` 已在根目录）
3. 加缓存头（`assets/` 长缓存，HTML 短缓存）
4. `www` 301 跳主域
5. 加 `Strict-Transport-Security` / `X-Content-Type-Options` / `Referrer-Policy`

另外 `/app/`、`/brand/`、`/cloud/` 目前返回 **403**，建议关掉 `autoindex` 并让它们返回 404 或加 index。

## 七、回滚

```bash
tar -czf /tmp/backup-before-10-14e.tar.gz -C /var/www hi-spark.net
```
