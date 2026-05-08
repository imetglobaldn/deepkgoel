"""
Generate `Advent-Global-Site-Documentation.docx` in the project root from
the markdown spec the user provided in chat.

This is a one-shot script — it reads no external file. All content is
embedded below so the docx is reproducible.
"""

from __future__ import annotations

import re
from pathlib import Path

from docx import Document
from docx.shared import Pt, RGBColor, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml.ns import qn
from docx.oxml import OxmlElement


# ---------------------------------------------------------------------------
# Markdown source (verbatim from the user, with smart quotes preserved)
# ---------------------------------------------------------------------------
MD = r"""# Advent Global — WordPress Site Documentation

**Site root:** `e:\advent new public\public_html`
**Document date:** 2026-05-07
**Restored from:** WPvivid Backup (full-site restore)
**WordPress core version:** 6.9.4
**PHP minimum (per Axtra theme):** 7.0+

---

## 1. Theme

### 1.1 Active Theme — Axtra (Construction & Architecture)

| Field | Value |
|---|---|
| Name | Axtra |
| Version | 1.3 |
| Author | Crowdyflow |
| Source | ThemeForest (commercial / Envato licensed) |
| Path | `wp-content/themes/axtra/` |
| Companion plugin | **Axtra Plugin** v1.0 (required — registers Axtra's custom post types: services, projects, team, careers; located at `wp-content/plugins/axtra-plugin/`) |
| Demo importer | `wp-content/themes/axtra/demo-import/` (used by Merlin WP wizard) |

**Notes**
- A separate `axtra-child` (child theme) **does not exist** in `wp-content/themes/`. All custom code/CSS lives directly in the parent Axtra theme. If you intend to apply customizations safely, create a child theme — currently any theme update will overwrite changes.
- Custom templates present: `single-career.php`, `single-project.php`, `single-service.php`, `single-team.php`, `tpl-coming_soon.php`, `tpl-default-elementor.php`.
- Custom CSS / JS: see `wp-content/themes/axtra/assets/`.

### 1.2 Inactive Themes (default fallbacks)

These remain installed only as WordPress fallbacks — safe to leave or delete:
- `twentytwentytwo`
- `twentytwentythree`
- `twentytwentyfour`
- `twentytwentyfive`

---

## 2. Plugins (Installed)

All plugins live under `wp-content/plugins/`. Versions captured from each plugin's main PHP header at the time of restore.

### 2.1 Page Builder & Theme Add-ons

| # | Plugin | Version | Purpose |
|---|---|---|---|
| 1 | **Elementor** | 4.0.5 | Core drag-and-drop page builder. Powers most of the site's pages. |
| 2 | **Elementor Pro** | 3.32.1 | Premium add-on — Theme Builder (header/footer), Pop Ups, Forms, advanced widgets. **Requires license key.** |
| 3 | **Axtra Plugin** | 1.0 | Theme companion — registers CPTs (services/projects/team/careers) and Axtra-specific Elementor widgets. **Required for the theme to function.** |
| 4 | **Essential Addons for Elementor (Lite)** | 6.6.3 | 100+ free Elementor widgets (data table, filterable gallery, event calendar, etc.). |
| 5 | **Essential Addons for Elementor — Pro** | 5.8.17 | Premium EA widgets (Instagram feed, protected content, smart post list). **Requires license key.** |
| 6 | **Ultimate Addons for Elementor (UAE / Header Footer Elementor)** | 2.8.7 | Build header/footer/blocks with Elementor and place via shortcode. |
| 7 | **Templately** | 3.6.2 | Cloud library of Elementor & Gutenberg templates. |
| 8 | **Inavii Social Feed for Elementor** | 3.0.1 | Instagram feed widget for Elementor / Gutenberg / shortcode. |

### 2.2 SEO

| # | Plugin | Version | Purpose |
|---|---|---|---|
| 9 | **All in One SEO (AIOSEO)** | 4.9.6.2 | Primary SEO plugin — XML sitemaps, meta tags, schema, social meta. |
| 10 | **AIOSEO — Image SEO** | 1.1.17 | Adds image SEO (alt/title automation) to AIOSEO. |
| 11 | **Broken Link Checker by AIOSEO** | 1.2.10 | Monitors internal/external links for 404s. |

### 2.3 Forms & Lead Capture

| # | Plugin | Version | Purpose |
|---|---|---|---|
| 12 | **Contact Form 7** | 6.1.5 | Classic, lightweight contact form plugin. |
| 13 | **WPForms** | 1.9.1.4 | Drag-and-drop form builder (alternative to CF7). |
| 14 | **Forminator** | 1.53.1 | Advanced form / quiz / poll / payment form builder by WPMU DEV. |
| 15 | **OptinMonster** | 2.16.22 | Lead capture pop-ups, exit-intent, floating bars. **Requires account/API connection.** |
| 16 | **Mailchimp for WordPress (MC4WP)** | 4.12.2 | Sends form submissions to Mailchimp lists. **Requires Mailchimp API key.** |

> **Important:** Three different form plugins are active simultaneously (CF7, WPForms, Forminator). Recommend consolidating to one to reduce bloat and conflicts. Audit which plugin actually powers each visible form before disabling any.

### 2.4 Analytics & Tag Management

| # | Plugin | Version | Purpose |
|---|---|---|---|
| 17 | **Site Kit by Google** | 1.177.0 | Connects WordPress dashboard to GA4, Search Console, AdSense, PageSpeed Insights. |
| 18 | **GA Google Analytics** | 20260421 | Inserts GA tracking code site-wide. |
| 19 | **GTM4WP — Google Tag Manager for WordPress** | 1.22.3 | Injects GTM container code with dataLayer events. |

> **Audit note:** Site Kit, GA Google Analytics, and GTM4WP can each load Google tracking. Verify only one is firing GA tags to avoid double-counting pageviews.

### 2.5 Performance & Optimization

| # | Plugin | Version | Purpose |
|---|---|---|---|
| 20 | **LiteSpeed Cache** | 7.8.1 | Page caching, image optimization (WebP), CSS/JS minify. WebP cache lives in `wp-content/uploads-webpc/` and `wp-content/litespeed/`. |

### 2.6 Security

| # | Plugin | Version | Purpose |
|---|---|---|---|
| 21 | **Wordfence Security** | 8.2.0 | Firewall, malware scanner, login protection. Logs at `wp-content/wflogs/`. |
| 22 | **CookieYes — GDPR Cookie Consent** | 3.4.2 | Cookie banner / GDPR compliance. |

### 2.7 Email

| # | Plugin | Version | Purpose |
|---|---|---|---|
| 23 | **WP Mail SMTP** | 4.8.0 | Routes `wp_mail()` through SMTP / SendLayer / Brevo / Gmail. **Requires SMTP credentials.** |

### 2.8 Content / Editor / Misc

| # | Plugin | Version | Purpose |
|---|---|---|---|
| 24 | **Classic Editor** | 1.6.7 | Restores pre-Gutenberg TinyMCE editor and old Edit Post screen. |
| 25 | **WP Headers and Footers** | 3.1.4 | Inject custom code (verification meta, scripts) into `<head>` / footer. |
| 26 | **Trinity Audio** | 5.26.0 | Auto-generates AI audio narration of posts (Amazon Polly). |
| 27 | **Collect.chat — Chatbot** | 2.5.0 | Embeds chatbot for visitor lead capture. **Requires Collect.chat account.** |
| 28 | **WP Bulk Delete** | 1.3.9 | Admin tool — bulk delete posts/comments/users/meta/terms by filter. |

### 2.9 Backup

| # | Plugin | Version | Purpose |
|---|---|---|---|
| 29 | **WP SuperBackup (indeed-wp-superbackup)** | 2.4 | Backup & restore with cloud sync support. |

> **About WPvivid:** The site was *restored* using WPvivid, but the **WPvivid Backup plugin is not currently installed**. If WPvivid is to remain the backup tool of record, install/activate it again. Otherwise, WP SuperBackup is the only active backup plugin at present.
>
> A legacy archive `wp-content/uploads/indeed-wp-superbackup/superbackup_*.zip` (dated `1729764493` ≈ 2024-10-24) is still present, plus `.wpress` archives in `wp-content/ai1wm-backups/` from All-in-One WP Migration (the AIOWPM plugin itself is **not currently installed**, only the leftover archives remain).

### 2.10 Must-Use Plugins (`wp-content/mu-plugins/`)

Auto-loaded by WordPress; cannot be disabled from the admin.

| File | Purpose |
|---|---|
| `block-google-verification.php` | Custom — blocks/handles Google verification meta. |
| `elementor-safe-mode.php` | Elementor's safe-mode loader for troubleshooting. |
| `hostinger-auto-updates.php` | Hostinger-managed auto-update controller (host-injected). |

> **Hosting:** Presence of `hostinger-auto-updates.php` confirms the site is hosted on **Hostinger**. Hostinger may auto-update WP core/plugins independently — be aware when version-pinning.

---

## 3. Plugin License Keys

Per the original handover sheet (item #7) marked **NA**. No premium license keys were transferred in the handover document.

**Plugins that require / benefit from a license but currently have no key recorded:**

| Plugin | License needed for |
|---|---|
| Elementor Pro | Pro widgets, Theme Builder, automatic updates |
| Essential Addons for Elementor — Pro | Pro widgets, automatic updates |
| Axtra Theme | Envato/ThemeForest purchase code (for support & updates) |
| OptinMonster | Account connection (API key, not a license key) |
| Forminator (Pro features) | Optional — only if Pro features are used |
| Trinity Audio | Free, but account login required for premium voices |

**Action item:** Recover purchase codes / license keys from the original purchaser's accounts (ThemeForest/CodeCanyon for Axtra & EA Pro; my.elementor.com for Elementor Pro; my.optinmonster.com for OptinMonster). Plugins will function without keys but will not auto-update and Pro features may be locked.

---

## 4. Third-Party Integrations & API Keys

Per the original handover sheet (item #8) marked **NA**. Below is a list of integrations that the installed plugins **expect to be configured**. Verify each in `wp-admin` after restore:

| Integration | Configured in | What to verify |
|---|---|---|
| Google Analytics 4 | Site Kit / GA Google Analytics / GTM4WP | Measurement ID present and only firing once |
| Google Search Console | Site Kit | Property verified for `adventglobal.com` |
| Google Tag Manager | GTM4WP | GTM container ID (`GTM-XXXXXXX`) |
| Mailchimp | MC4WP > Settings | API key + linked audience/list |
| OptinMonster | OptinMonster > Settings | Account API key |
| Collect.chat | Collect.chat plugin settings | Bot ID / embed code |
| SMTP (transactional email) | WP Mail SMTP | Mailer (SendLayer/Brevo/Gmail/etc.), SMTP host, username, password / app password, from-address |
| Wordfence | Wordfence > Dashboard | License (free or Premium key) and email alert recipient |
| reCAPTCHA / hCaptcha | CF7 / WPForms / Forminator integrations | Site & secret key per form plugin |
| Inavii Instagram / Social Feed | Inavii plugin settings | Connected social account token |

**Sensitive locations to inspect for residual keys:**
- `wp-config.php` — DB creds, salts, any custom `define()`s.
- `wp-options` table (DB) — stored API keys for most of the above plugins.
- `wp-content/uploads/` — avoid putting any credential file here.

> Do **not** commit `wp-config.php` to any public repository.

---

## 5. Backups & Restore History

### 5.1 Current backup artefacts on disk

| Location | Contents | Notes |
|---|---|---|
| `wp-content/ai1wm-backups/` | 3 × `.wpress` archives (Dec 2024 + Mar 2025) | All-in-One WP Migration format. Plugin not currently installed — archives are orphans. |
| `wp-content/uploads/indeed-wp-superbackup/` | `superbackup_*.zip` (Oct 2024) + log | Legacy WP SuperBackup output. |
| `wp-content/uploads/indeed-backups/` | (auxiliary backup dir) | WP SuperBackup working folder. |
| `wp-content/upgrade-temp-backup/` | WP-core auto-rollback temp dir | Created by WP during plugin/theme/core updates; safe to leave. |

### 5.2 Restore method used

The current site state was produced by a **WPvivid full-site restore** (files + database). After restore, the WPvivid plugin itself was removed/not reactivated.

### 5.3 Recommended ongoing backup plan

1. Reinstall **WPvivid Backup** (or a single chosen tool — UpdraftPlus / WPvivid / WP SuperBackup) and configure off-site storage (Google Drive / S3 / Dropbox).
2. Schedule: daily DB backup, weekly full-site backup, retention 14–30 days.
3. Test-restore quarterly into a staging subdomain.
4. Delete the orphan `.wpress` and `.zip` legacy archives once a verified new backup chain is in place — they currently consume disk and create restore confusion.

---

## 6. Customizations & Custom Code

### 6.1 In the active theme (`wp-content/themes/axtra/`)
- Edits live directly in the parent theme — there is **no child theme**.
- Custom Elementor templates are stored in WP database (Templately/Elementor library) — backed up with the DB.
- Custom CSS may also be present in **Appearance → Customize → Additional CSS** (DB-stored) and/or in **Elementor → Custom CSS** per page (Pro feature).

### 6.2 Site-wide injected code
- **WP Headers and Footers** plugin → settings page contains any analytics/verification scripts injected globally.
- **GTM4WP** → loads GTM container.
- **mu-plugin** `block-google-verification.php` — review this file; it is a custom mu-plugin, not from a vendor.

### 6.3 Recommendation
Before next theme/plugin update cycle:
1. Create `axtra-child` child theme and migrate any direct edits there.
2. Document Customizer "Additional CSS" content in this file.
3. Export Elementor Site Settings (Hamburger → Site Settings → Export).

---

## 7. File / Folder Map (top-level)

```
public_html/
├── wp-admin/                       WP core admin
├── wp-includes/                    WP core libraries
├── wp-content/
│   ├── ai1wm-backups/              Orphan AIOWPM .wpress archives
│   ├── litespeed/                  LiteSpeed Cache data
│   ├── mu-plugins/                 3 must-use plugins (see §2.10)
│   ├── plugins/                    29 plugins (see §2)
│   ├── themes/                     Axtra + 4 default themes
│   ├── upgrade/                    WP update staging (transient)
│   ├── upgrade-temp-backup/        WP rollback safety copy
│   ├── uploads/                    Media library + plugin working dirs
│   ├── uploads-webpc/              LiteSpeed WebP conversions
│   └── wflogs/                     Wordfence logs
├── wp-config.php                   ⚠ Contains DB credentials & salts
├── llms.txt                        AI crawler directives
├── default.php                     Custom — review purpose
└── (standard WP root files)
```

---

## 8. Outstanding / Action Items

1. **Reinstall WPvivid** (or commit to WP SuperBackup) and configure scheduled off-site backups.
2. **Recover license keys** for Elementor Pro, EA Pro, Axtra theme, OptinMonster.
3. **Create a child theme** for Axtra before any future theme update.
4. **Consolidate form plugins** — pick one of CF7 / WPForms / Forminator.
5. **Audit Google tracking** — verify GA fires only once (Site Kit vs. GA Google Analytics vs. GTM).
6. **Verify SMTP** is reconfigured in WP Mail SMTP (credentials likely lost on restore).
7. **Re-verify** Wordfence, OptinMonster, Mailchimp, Collect.chat connections in admin.
8. **Delete orphan archives** in `ai1wm-backups/` and `uploads/indeed-wp-superbackup/` after a fresh backup is validated.
9. **Re-activate / verify** AIOSEO connection (sitemap submitted to Search Console).
10. **Test** all forms end-to-end (submission → email delivery via SMTP → Mailchimp sync if applicable).

---

*Generated 2026-05-07 from a static scan of the restored site files. Versions reflect plugin headers at time of scan; admin-side configuration (API keys, license activation status, form mappings) was not inspected and must be verified inside `wp-admin`.*
"""


# ---------------------------------------------------------------------------
# Inline-formatting renderer:  **bold**, *italic*, `code`
# ---------------------------------------------------------------------------
INLINE = re.compile(
    r"(\*\*[^*]+\*\*)"                # **bold**
    r"|(\*[^*\n]+\*)"                 # *italic*
    r"|(`[^`\n]+`)"                   # `code`
)


def _add_runs(paragraph, text: str, *, base_bold=False, base_italic=False) -> None:
    """Add runs to `paragraph`, parsing **bold**, *italic*, and `code`."""
    pos = 0
    for m in INLINE.finditer(text):
        if m.start() > pos:
            run = paragraph.add_run(text[pos:m.start()])
            run.bold = base_bold
            run.italic = base_italic
        token = m.group(0)
        if token.startswith("**") and token.endswith("**"):
            run = paragraph.add_run(token[2:-2])
            run.bold = True
            run.italic = base_italic
        elif token.startswith("`") and token.endswith("`"):
            run = paragraph.add_run(token[1:-1])
            run.font.name = "Consolas"
            run.font.size = Pt(10)
            run.font.color.rgb = RGBColor(0xC7, 0x25, 0x4E)
        elif token.startswith("*") and token.endswith("*"):
            run = paragraph.add_run(token[1:-1])
            run.italic = True
            run.bold = base_bold
        pos = m.end()
    if pos < len(text):
        run = paragraph.add_run(text[pos:])
        run.bold = base_bold
        run.italic = base_italic


# ---------------------------------------------------------------------------
# Cell shading helper (no built-in API for this in python-docx)
# ---------------------------------------------------------------------------
def _shade_cell(cell, hex_fill: str) -> None:
    tc_pr = cell._tc.get_or_add_tcPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:val"), "clear")
    shd.set(qn("w:color"), "auto")
    shd.set(qn("w:fill"), hex_fill)
    tc_pr.append(shd)


# ---------------------------------------------------------------------------
# Markdown parser — small, line-based, supports just what this doc uses:
#   # / ## / ###       headings
#   table rows         | a | b |
#   - / * bullet       lists
#   1. ordered         lists
#   > blockquote       paragraph
#   ```fenced code```  block
#   ---                horizontal rule (becomes a blank divider line)
#   blank line         paragraph break
# ---------------------------------------------------------------------------
def render(md: str, doc: Document) -> None:
    lines = md.splitlines()
    i = 0
    n = len(lines)

    while i < n:
        line = lines[i]
        stripped = line.strip()

        # Fenced code block
        if stripped.startswith("```"):
            i += 1
            buf: list[str] = []
            while i < n and not lines[i].strip().startswith("```"):
                buf.append(lines[i])
                i += 1
            i += 1  # consume closing fence
            p = doc.add_paragraph()
            p.paragraph_format.left_indent = Cm(0.4)
            p.paragraph_format.space_before = Pt(4)
            p.paragraph_format.space_after = Pt(8)
            run = p.add_run("\n".join(buf))
            run.font.name = "Consolas"
            run.font.size = Pt(9)
            # Light grey shading on the paragraph
            p_pr = p._p.get_or_add_pPr()
            shd = OxmlElement("w:shd")
            shd.set(qn("w:val"), "clear")
            shd.set(qn("w:color"), "auto")
            shd.set(qn("w:fill"), "F4F4F4")
            p_pr.append(shd)
            continue

        # Horizontal rule — small spacer paragraph
        if stripped == "---":
            spacer = doc.add_paragraph()
            spacer.paragraph_format.space_before = Pt(2)
            spacer.paragraph_format.space_after = Pt(2)
            i += 1
            continue

        # Heading
        if stripped.startswith("#"):
            level = 0
            while level < len(stripped) and stripped[level] == "#":
                level += 1
            heading_text = stripped[level:].strip()
            if level == 1:
                p = doc.add_heading(level=0)
            else:
                p = doc.add_heading(level=min(level - 1, 9))
            _add_runs(p, heading_text)
            i += 1
            continue

        # Table — collect contiguous lines that start with "|"
        if stripped.startswith("|"):
            rows: list[list[str]] = []
            while i < n and lines[i].strip().startswith("|"):
                row_text = lines[i].strip()
                if re.match(r"^\|\s*[-:]+\s*(\|\s*[-:]+\s*)*\|?$", row_text):
                    i += 1
                    continue  # skip separator
                cells = [c.strip() for c in row_text.strip("|").split("|")]
                rows.append(cells)
                i += 1
            if rows:
                col_count = max(len(r) for r in rows)
                table = doc.add_table(rows=len(rows), cols=col_count)
                table.style = "Light Grid Accent 1"
                table.autofit = True
                for r_idx, row in enumerate(rows):
                    for c_idx in range(col_count):
                        cell_text = row[c_idx] if c_idx < len(row) else ""
                        cell = table.cell(r_idx, c_idx)
                        cell.text = ""  # clear default empty paragraph text
                        para = cell.paragraphs[0]
                        _add_runs(para, cell_text, base_bold=(r_idx == 0))
                        if r_idx == 0:
                            _shade_cell(cell, "1F2937")
                            for run in para.runs:
                                run.font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)
                # spacing after table
                doc.add_paragraph()
            continue

        # Blockquote — group consecutive `>` lines
        if stripped.startswith(">"):
            quote_lines: list[str] = []
            while i < n and lines[i].strip().startswith(">"):
                quote_lines.append(lines[i].strip().lstrip(">").strip())
                i += 1
            quote_text = " ".join(l for l in quote_lines if l)
            p = doc.add_paragraph()
            p.paragraph_format.left_indent = Cm(0.6)
            p.paragraph_format.space_before = Pt(6)
            p.paragraph_format.space_after = Pt(6)
            _add_runs(p, quote_text, base_italic=True)
            for run in p.runs:
                run.font.color.rgb = RGBColor(0x4B, 0x55, 0x63)
            # left border on the paragraph
            p_pr = p._p.get_or_add_pPr()
            pbdr = OxmlElement("w:pBdr")
            left = OxmlElement("w:left")
            left.set(qn("w:val"), "single")
            left.set(qn("w:sz"), "18")
            left.set(qn("w:space"), "8")
            left.set(qn("w:color"), "F5A524")
            pbdr.append(left)
            p_pr.append(pbdr)
            continue

        # Unordered list
        if re.match(r"^[-*]\s+", stripped):
            while i < n and re.match(r"^[-*]\s+", lines[i].strip()):
                item = re.sub(r"^[-*]\s+", "", lines[i].strip())
                p = doc.add_paragraph(style="List Bullet")
                _add_runs(p, item)
                i += 1
            continue

        # Ordered list
        if re.match(r"^\d+\.\s+", stripped):
            while i < n and re.match(r"^\d+\.\s+", lines[i].strip()):
                item = re.sub(r"^\d+\.\s+", "", lines[i].strip())
                p = doc.add_paragraph(style="List Number")
                _add_runs(p, item)
                i += 1
            continue

        # Blank line — paragraph break
        if stripped == "":
            i += 1
            continue

        # Plain paragraph: gather contiguous non-empty, non-special lines
        para_lines: list[str] = [stripped]
        i += 1
        while i < n:
            nxt = lines[i].strip()
            if (not nxt
                    or nxt.startswith("#")
                    or nxt.startswith("|")
                    or nxt.startswith(">")
                    or nxt.startswith("```")
                    or nxt == "---"
                    or re.match(r"^[-*]\s+", nxt)
                    or re.match(r"^\d+\.\s+", nxt)):
                break
            para_lines.append(nxt)
            i += 1
        para_text = " ".join(para_lines)
        p = doc.add_paragraph()
        _add_runs(p, para_text)


def main() -> None:
    doc = Document()

    # Base style — readable on screen
    normal = doc.styles["Normal"]
    normal.font.name = "Calibri"
    normal.font.size = Pt(11)

    render(MD, doc)

    out = Path(__file__).resolve().parent.parent / "Advent-Global-Site-Documentation.docx"
    doc.save(out)
    print(f"wrote {out}")


if __name__ == "__main__":
    main()
