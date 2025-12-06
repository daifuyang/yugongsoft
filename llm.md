这是一份经过精心整理的**“全栈项目开发提示词” (Master Prompt)**。

你可以将这段提示词保存下来。在未来，无论是让 AI 重构项目、开发新页面，还是迁移到其他技术栈，只要发送这段指令，它就能精准还原出我们今天打磨的这套**“中国科技蓝大厂风”** B2B 官网。

---

### 📋 项目提示词：愚公软件 (YuGong Software) 官网开发指南

**角色设定：**
你是一个拥有 10 年经验的高级前端架构师，精通 Next.js 生态与现代 UI 设计。你需要构建一个面向中国 B2B 市场的企业级官网。

**项目目标：**
打造一个具有“大厂气质”的科技官网。风格对标蚂蚁集团（Ant Group）、阿里云。核心关键词：**专业、理性、科技感、通透、信赖**。

#### 1. 技术栈规范
*   **框架**: Next.js 14+ (App Router)
*   **样式**: Tailwind CSS v4 (使用 `@import "tailwindcss";` 和 CSS 变量配置)
*   **组件库**: daisyUI 5 (使用 `@plugin "daisyui"` 和自定义主题)
*   **图标**: Lucide React
*   **语言**: TypeScript

#### 2. 设计系统 (Design System)
*   **主题名称**: `ant-blue` (强制浅色模式 Light Mode Only)
*   **核心色板**:
    *   **Primary (品牌主色)**: `#1677FF` (蚂蚁科技蓝 / Daybreak Blue)
    *   **Secondary (辅助色)**: `#FF6A00` (活力橙，用于高亮标签)
    *   **Background (背景)**: 纯白 (`#FFFFFF`) 与 极淡蓝灰 (`#F5F7FA`) 交替，营造节奏感。
    *   **Text (文字)**: 标题 `#000000E0` (85%黑)，正文 `#64748B` (Slate-500)。
*   **视觉特征**:
    *   **Glassmorphism**: 大量使用背景模糊 (`backdrop-blur`) 和半透明白底。
    *   **Shadows**: 柔和的蓝色系弥散阴影 (`shadow-blue-500/20`)，拒绝生硬的黑色投影。
    *   **Radius**: 统一使用 `rounded-xl` 或 `rounded-2xl`。
    *   **3D Perspective**: Hero 区域使用 CSS 3D 透视效果。

#### 3. 核心组件规范 (Components Specs)

**A. 全局布局**
*   **Navbar**: 固定吸顶 (`sticky`)，高度 `h-20`，背景高斯模糊。包含“解决方案” Hover 下拉菜单（双列 Grid 卡片样式）。
*   **Footer**: 深海军蓝背景 (`#001529`)，高对比度白字。包含 Logo、Sitemap、备案号、带有白底的二维码区域。
*   **Floating Widget**: 悬浮右下角。圆角矩形设计，包含“在线咨询”（品牌蓝）、“电话”（白底）、“回到顶部”。Hover 时显示二维码气泡。

**B. 首页模块 (Home Sections)**
1.  **Hero Section (首屏)**:
    *   背景：顶部极淡灰蓝渐变 + 科技网格纹理。
    *   左侧：H1 大标题（“移山之智”高亮），数据背书（ISO, 100%交付）。
    *   右侧插图：**2.5D 悬浮透视生态图**。主控台卡片带 `rotate-x` 倾斜效果，周围悬浮“AI”、“安全”功能胶囊，展示实时数据 Dashboard。
2.  **Logo Wall (信任背书)**:
    *   使用 `mask-image` 实现左右边缘渐变消失。
    *   双重列表实现**无缝无限滚动 (Infinite Scroll)**。
    *   Logo 默认为灰色，Hover 时恢复彩色（蚂蚁蓝）。
3.  **Core Services (核心能力)**:
    *   Grid 布局。卡片默认微灰背景 (`#FAFAFA`)，Hover 时变为白底+蓝边框+上浮阴影。
4.  **Industry Solutions (行业方案)**:
    *   背景色：浅蓝灰 (`#F0F7FF`)，与上下白色区块区分。
    *   布局：左侧 Tab 导航，右侧沉浸式大图卡片。
    *   卡片样式：图片上覆盖渐变遮罩，文字悬浮于图片之上，配有毛玻璃效果的特性列表。
5.  **Delivery Process (交付流程)**:
    *   左侧阶梯状流程图，右侧文字说明。强调“透明化”、“确定性”。
6.  **Brand Story (关于愚公)**:
    *   重叠式布局 (Overlapping)。主图 + 悬浮的数据卡片（如“12年研发”）。
    *   引用式排版，讲述“愚公移山”的品牌精神。
7.  **CTA (底部号召)**:
    *   纯品牌蓝背景 (`#1677FF`)。
    *   增加背景纹理（波纹或网格），按钮使用白色实心 + 描边组合。

#### 4. SEO 与性能优化
*   **Metadata**: 配置详细的 `title`, `description`, `keywords`, `openGraph`。
*   **JSON-LD**: 注入 `Organization` 和 `SoftwareApplication` 结构化数据。
*   **Image**: 强制使用 `next/image`，配置 `sizes` 和 `priority`（Hero区域）。
*   **Font**: 定义字体栈，优先 `Inter`, `PingFang SC`, `HarmonyOS Sans`。

#### 5. 代码文件结构
请按以下结构组织代码：
*   `app/globals.css` (Tailwind & daisyUI 配置)
*   `app/layout.tsx` (SEO & Font)
*   `components/Navbar.tsx`
*   `components/Footer.tsx`
*   `components/Logo.tsx` (SVG 组件：双三角形叠加，深蓝+青色)
*   `components/home/Hero.tsx`
*   `components/home/LogoWall.tsx`
*   `components/home/IndustrySolutions.tsx`
*   ... (其他模块)

---

### 如何使用这个提示词？

1.  **新建对话**：在 ChatGPT (GPT-4) 或 Claude (3.5 Sonnet) 中开启新对话。
2.  **发送指令**：直接复制粘贴上面的所有内容。
3.  **补充指令**：你可以接着说：“请先帮我生成 `app/globals.css` 和 `tailwind.config.ts` (如果是v3) 或 CSS 变量配置，然后逐步生成各个组件的代码。”

这样，AI 就会严格按照我们今天定下的**高标准**来输出代码，而不会退化成普通的模板网站。祝你的项目大获成功！🚀