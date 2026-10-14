# hi-spark.net 收录与权重操作手册（2026-10-14）

这份是**点哪个按钮**级别的清单。战略层面的获链思路见同目录 `SEO-GEO-PLAYBOOK.md`。

> 前提：技术已经把 `2026-10-14d` 发布包部署上线。所有步骤都假设域名 `hi-spark.net` 已可访问。

---

## 0. 部署后立刻做（10 分钟，零成本）

### 0.1 IndexNow 推送 —— 一次推 1,681 个 URL

Bing / Yandex / Naver / Seznam 共用这个接口，通常几小时到一天内收录。

前置条件（**必须**先确认可访问，否则接口会退回 `403 SiteVerificationNotCompleted`）：

```bash
curl -sI https://hi-spark.net/62e9a61f510b91220b81b276459c170d.txt | head -1
# 必须返回 200
```

然后在一台有 Node 的机器上：

```bash
unzip -q hi-spark-net-2026-10-14d-full-source.zip -d /tmp/iot && cd /tmp/iot
node tools/ping_indexnow.mjs
```

返回 `HTTP 200 - accepted` 成功。

以后**每次发布内容后重跑一次**即可，URL 会自动从 sitemap 重新读取。

### 0.2 确认 robots.txt 与 sitemap 是新的

```bash
curl -s https://hi-spark.net/robots.txt | grep -c 'User-agent'
# 新版有 36 段爬虫规则；如果只有 3-4 段，说明部署的还是旧版
curl -s https://hi-spark.net/sitemap.xml | grep -c '<loc>'
# 期望 32
curl -s https://hi-spark.net/sitemap-entities.xml | grep -c '<loc>'
# 期望 1650
```

---

## 1. Google Search Console（最重要，30 分钟）

**为什么必须做**：Google 不走 IndexNow，GSC 是唯一能把站点交给 Google 的正规入口，也是唯一能看到
「哪些词有曝光但没点击」的地方。没有 GSC，后面所有 SEO 工作都是盲飞。

### 步骤

1. 打开 https://search.google.com/search-console ，用你的 Google 账号登录
2. 左上角资源选择器 → **添加资源**
3. 选 **网域**（不是「网址前缀」）→ 填 `hi-spark.net` → 继续
4. 它会给你一条 **TXT 记录**，形如 `google-site-verification=xxxxxxxx`
5. 到域名 DNS 服务商（Cloudflare / 阿里云 / GoDaddy 等）添加这条 TXT 记录，主机名填 `@`
6. 回到 GSC 点 **验证**（DNS 生效通常几分钟，慢的话等几小时再点）
7. 验证通过后，左侧 **站点地图** → 提交两条：
   - `sitemap.xml`
   - `sitemap-entities.xml`
8. 左侧 **网址检查** → 输入 `https://hi-spark.net/` → 点 **请求编入索引**

### 之后每周看三处

| 位置 | 看什么 |
|---|---|
| **效果** | 曝光量、点击量、平均排名；按「查询」排序找**有曝光但点击低**的词，那是标题/描述要改的地方 |
| **页面 → 未编入索引** | 如果出现大量「已发现但未编入索引」，说明内容质量或内链有问题 |
| **核心网页指标** | 移动端体验；红了就去查图片和 JS 体积 |

---

## 2. Bing Webmaster Tools（10 分钟）

Bing 的份额虽小，但它同时给 **ChatGPT / Copilot 的联网检索**供数，对 AI 时代的可见度有额外价值。

1. 打开 https://www.bing.com/webmasters
2. 登录后选 **Import from Google Search Console** —— 如果第 1 步已做完，这里一键导入，不用重新验证
3. 若不用导入：**Add site** → 填 `https://hi-spark.net` → 选验证方式（同样可以 DNS TXT）
4. 导入后确认 **Sitemaps** 里两条 sitemap 都在
5. 顺手打开 **IndexNow** 开关（Bing 后台也有一处 IndexNow 设置）

---

## 3. Zenodo 数据集 DOI（20 分钟，外链质量最高）

**为什么值得做**：一个 DOI 是可被学术论文、数据集目录、图书馆系统长期引用的**永久地址**。
这类引用是权重最高、最不会掉的外链，也是 AI 训练/检索语料里最愿意收录的形态。

材料已备好，在 `outputs/zenodo-upload/`：

| 文件 | 用途 |
|---|---|
| `iot-atlas-open-dataset.json` | 要上传的数据本体 |
| `iot-atlas-llms-full.txt` | 全量纯文本语料 |
| `ZENODO-FIELDS.txt` | 标题、作者、描述、关键词、许可证，**直接复制粘贴** |
| `ZENODO-UPLOAD-GUIDE.md` | 逐步操作说明 |

步骤概要：
1. https://zenodo.org → 用 ORCID 或邮箱注册/登录
2. **New upload** → 上传上面两个文件
3. 按 `ZENODO-FIELDS.txt` 填元数据，许可证选 **CC BY 4.0**
4. **Publish** → 拿到形如 `10.5281/zenodo.xxxxxxx` 的 DOI
5. 把 DOI 填回 `tools/zenodo-doi.json` → 重新构建 → 重新发布

填完之后，首页的 `Dataset` 结构化数据会自动带上 `identifier` 和 `sameAs` 指向 DOI。

---

## 4. GitHub 仓库转为公开（10 分钟）

源码本来就是公开站点的镜像，转公开后相当于多一个高权重域名的入口 + 一个可被引用的数据集副本。

1. 打开你的 `hi-spark-iot-atlas` 仓库
2. **Settings** → 拉到最底 **Danger Zone** → **Change repository visibility** → **Change to public**
   - （你之前问过「可见性在哪里」：就在 Settings 页面最底部，不是顶部）
3. 转公开后在 **About** 区域填：
   - Description: `Independent IoT reference data: 290 brands, 998 apps, 29 cloud platforms, 44 certifications. Published in EN/ES/FR.`
   - Website: `https://hi-spark.net`
4. 给仓库加 Topics（能被人搜到）：`iot` `smart-home` `matter` `zigbee` `dataset` `open-data` `amazon` `iot-platform`

---

## 5. 可选：Yandex / Naver（看目标市场）

- 目标市场含俄语区 → https://webmaster.yandex.com 添加站点
- 目标市场含韩国 → https://searchadvisor.naver.com 添加站点
- 两者都支持 DNS TXT 验证，流程与 GSC 类似

做不做的判断标准很简单：**你的客户在不在那个市场**。不做也没损失。

---

## 6. 外链建设（长期，见 PLAYBOOK）

`SEO-GEO-PLAYBOOK.md` 里已有三主线 + 可直接复制的英文文案 + 90 天节奏。补充两点：

- 现在有了 `/dataset.html` 这个**引用入口**，对外发信时链接指向它比指向首页更容易被接受
- 引用格式已写死在页面和 `llms.txt` 里，对方复制即可，降低对方的操作成本

---

## 7. 红线（做过会反噬，别碰）

- 不买链接、不用链接农场、不做互刷
- 不批量生成 AI 垃圾页去堆关键词（这套站点有 1,697 个有价值的页面，加垃圾页反而稀释质量）
- 不改动已发布的 URL 结构（现在 1,697 个 URL 都是稳定静态文件，改结构等于清零重来）
- 不在页面上堆与内容无关的关键词（会被判作弊）

---

## 8. 一周后回来看什么

| 指标 | 在哪看 | 健康值 |
|---|---|---|
| 已收录页面数 | GSC → 页面 → 已编入索引 | 2 周内 > 300 并持续增长 |
| sitemap 读取状态 | GSC → 站点地图 | Success |
| 曝光量趋势 | GSC → 效果（近 28 天） | 逐周上升 |
| 有排名的查询数 | GSC → 效果 → 查询 | 持续变多 |
| Bing 收录数 | Bing Webmaster → Site Explorer | 与 GSC 同量级 |
