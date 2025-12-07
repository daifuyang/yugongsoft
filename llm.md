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

#### 3. 核心组件规范 (Components Specs)

**A. 通用组件与交互**
*   **FadeIn 组件 (`components/FadeIn.tsx`)**:
    *   **必须使用**: 所有页面元素的进入动画（Entrance Animation）必须统一使用此组件，禁止手动编写 CSS `animate-in` 类，以保证全站动画体验的一致性与高性能（基于 Framer Motion）。
    *   **参数规范**:
        *   `direction`: 默认为 `up`。侧边栏/图表可使用 `left`/`right`。
        *   `delay`: 用于列表项或 Grid 卡片的交错加载 (Staggered)，步长通常为 `0.1` 或 `0.2`。
        *   `duration`: 默认 `0.5`，强调质感的 Hero 区域可适当延长至 `0.8`。
        *   `fullWidth`: 默认为 `false`。用于 Hero 标题等需要占满宽度的场景。
    *   **场景**: Hero 标题、特性卡片列表、Dashboard 图表模块、FAQ 列表等。

**B. 全局布局**
*   **Navbar**: 固定吸顶 (`sticky`)，高度 `h-20`，背景高斯模糊。包含“解决方案” Hover 下拉菜单（双列 Grid 卡片样式）。
*   **Footer**: 深海军蓝背景 (`#001529`)，高对比度白字。包含 Logo、Sitemap、备案号、带有白底的二维码区域。
*   **Floating Widget**: 悬浮右下角。圆角矩形设计，包含“在线咨询”（品牌蓝）、“电话”（白底）、“回到顶部”。Hover 时显示二维码气泡。

**C. 首页模块 (Home Sections)**
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

**D. 解决方案页 (Solution Pages)**
*   **Hero Section**:
    *   左侧：标题与核心价值，统一使用 `FadeIn` 组件实现进场动画。
    *   右侧：**平面化 Dashboard 演示**。
        *   **禁止**: 3D 透视 (`perspective`, `rotate-x/y`)、悬浮浮层 (`floating widgets`)、复杂交互动效。
        *   **要求**: 干净、扁平的卡片式设计，使用柔和阴影 (`shadow-2xl`)，圆角 `rounded-2xl`。
        *   **内容**: 模拟真实系统界面，数据/日志/图表需**填满容器**，禁止出现明显留白。
*   **Core Features (核心特性)**:
    *   **布局**: 左右交替布局 (Zig-Zag)，间距统一为 `gap-16 lg:gap-24`。
    *   **左侧文案**:
        *   Icon容器: `w-14 h-14 rounded-2xl`，带浅色背景与边框。
        *   列表: 使用 `CheckCircle2` 图标，间距 `space-y-4`。
    *   **右侧插图 (UI Mockups)**:
        *   **必须**: 展示**高保真、扁平化**的 UI 界面，模拟真实业务场景（如订单详情、PDA 界面、库存列表）。
        *   **App样机**: 移动端/PDA界面必须使用**白色极简边框** (`rounded-[3rem] border-[8px] border-slate-900` 类似 iPhone 风格)，禁止使用深色模式外壳或老旧样式。
        *   **禁止**: **弹动浮层 (Bouncing Floating Widgets)**。禁止使用 `animate-bounce` 等干扰阅读的动效。所有元素应整齐排列在卡片内部或静止展示。
        *   **禁止**: 使用单一的大图标占位，或抽象的概念图。
        *   **禁止**: 3D 旋转、漂浮元素。
        *   **样式**: 统一使用 `bg-white rounded-2xl shadow-xl border border-slate-100`。内部数据需丰富真实。

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
*   `components/FadeIn.tsx` (通用动画组件)
*   `components/Logo.tsx` (SVG 组件：双三角形叠加，深蓝+青色)
*   `components/home/Hero.tsx`
*   `components/home/LogoWall.tsx`
*   `components/home/IndustrySolutions.tsx`
*   ... (其他模块)

#### 6. 最近更新与要求 (Latest Updates & Requirements)
*   **Hero 动画优化**: 使用 `framer-motion` 替代 CSS 动画，具体参数：`animate={{ y: [0, -15, 0] }}`。
*   **视觉优化**: 界面需要更“大气”，避免元素过小或显得局促。Hero Dashboard 及核心特性插图需增加视觉比重（如内边距、字体大小、容器尺寸）。
*   **代码维护**: 及时将会话中的新要求整理至此文档。

#### 7. 界面设计规范
* 使用大厂设计规范，让界面显得在专业一些，不考虑功能性，优先考虑ui美观。中文友好
