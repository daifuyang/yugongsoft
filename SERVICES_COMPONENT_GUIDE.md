# Services 页面组件使用规范

本文档旨在规范 Services（服务）模块下页面的组件使用，确保风格统一、开发高效且易于维护。

## 1. 页面基础结构

所有 Service 页面应遵循统一的层级结构：

*   **页面容器**: 使用 `<main>` 标签包裹。
*   **区块容器**: 页面由多个独立的区块组成，背景色通常交替使用。
    *   **白色背景**: `bg-white` (用于主要内容、Hero区)
    *   **浅灰背景**: `bg-[#F5F7FA]` (用于区分层级，如流程、案例)
*   **通用间距**: 标准区块上下内边距建议为 `py-24` (96px)，Hero 区域可适当加大。

## 2. 核心组件速查表

| 页面模块 | 推荐组件 | 文件路径 | 说明 |
| :--- | :--- | :--- | :--- |
| **底部转化**<br>(CTA) | **`<CtaSection />`** | `@/components/ui/CtaSection` | **[强制]** 页面底部统一转化入口。包含标题、描述、主次按钮。 |
| **优势/痛点**<br>(Features) | **`<FeatureGrid />`** | `@/components/ui/FeatureGrid` | **[推荐]** 通用列表组件。支持图标、标题、描述，可配置列数 (3/4列)。 |
| **服务流程**<br>(Process) | **`<ProcessGrid />`** | `@/components/ui/ProcessGrid` | **[推荐]** 步骤展示专用。自动处理序号 (01/02...) 和连接线样式。 |
| **移动端展示**<br>(Mockup) | **`<PhoneMockup />`** | `@/components/ui/PhoneMockup` | **[场景]** 用于 App 开发页或展示移动端界面的 Hero 区域。 |
| **进场动画**<br>(Animation) | **`<FadeIn />`** | `@/components/FadeIn` | **[推荐]** 包裹主要内容块，提供统一的 "向上浮现" 效果。 |

## 3. 组件详细使用指南

### 3.1 底部行动号召 (CtaSection)

所有服务页面底部**必须**包含此组件，用于引导用户转化。

```tsx
import CtaSection from '@/components/ui/CtaSection';

// 在页面底部使用
<CtaSection
  title="准备好打造您的超级应用了吗？"
  description="立即与我们的产品专家沟通，获取免费的需求评估与报价方案。"
  primaryAction={{ label: "免费预约咨询", href: "/contact" }}
  // secondaryAction={{ label: "查看案例", href: "/cases" }} // 可选
/>
```

### 3.2 核心优势列表 (FeatureGrid)

用于展示服务的核心卖点、解决的痛点或功能特性。

```tsx
import FeatureGrid from '@/components/ui/FeatureGrid';
import { Zap, Shield, Layout } from 'lucide-react';

<section className="py-24 bg-[#F5F7FA]">
  <div className="container mx-auto px-6">
    {/* 标题部分建议手写或封装 SectionHeader */}
    <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-slate-900">核心优势</h2>
    </div>

    <FeatureGrid
      cols={3} // 可选: 2, 3, 4
      variant="badge" // 可选: "default" | "card" | "badge"
      items={[
        {
          icon: <Zap size={24} />,
          title: "高性能交付",
          desc: "深度优化代码架构，确保应用秒级响应。"
        },
        // ... 更多项目
      ]}
    />
  </div>
</section>
```

### 3.3 服务流程 (ProcessGrid)

用于展示 "第一步 -> 第二步 -> 第三步" 的线性流程。

```tsx
import ProcessGrid from '@/components/ui/ProcessGrid';

<section className="py-24 bg-white">
  <div className="container mx-auto px-6">
    <ProcessGrid
      items={[
        { step: "01", title: "需求分析", desc: "深度沟通业务逻辑..." },
        { step: "02", title: "UI/UX设计", desc: "大厂设计师操刀..." },
        { step: "03", title: "开发实施", desc: "标准化代码交付..." },
        { step: "04", title: "测试上线", desc: "全方位质量保障..." },
      ]}
    />
  </div>
</section>
```

### 3.4 移动端样机 (PhoneMockup)

用于在 Hero 区域或功能介绍中展示 App 界面。

```tsx
import PhoneMockup from '@/components/ui/PhoneMockup';

<PhoneMockup className="shadow-2xl shadow-slate-300">
  {/* 内部放入实际的 UI 内容或图片 */}
  <div className="bg-white h-full overflow-hidden">
     <img src="/app-screenshot.png" alt="App UI" />
  </div>
</PhoneMockup>
```

## 4. 设计风格规范

*   **主色调**: `#1677FF` (Ant Design Blue)
*   **字体颜色**:
    *   标题: `text-slate-900`
    *   正文: `text-slate-500` 或 `text-slate-600`
*   **圆角**:
    *   按钮: `rounded-full` (大按钮) 或 `rounded-lg` (卡片内按钮)
    *   卡片: `rounded-xl` 或 `rounded-2xl`
*   **阴影**: 使用 Tailwind 默认阴影或自定义彩色阴影 (e.g., `shadow-blue-500/20`)。

---
*文档更新日期: 2025-12-07*
