# 通用 UI 组件说明

面向品牌站点的复用型组件集合，遵循现有设计风格与配色，不引入新的视觉样式。组件全部可用于服务端渲染（SSR），无副作用，利于 SEO。

## 组件列表

- `components/ui/Section.tsx`：语义化区块容器，统一 `container mx-auto px-6`。
- `components/ui/SectionHeader.tsx`：区块标题与副标题，使用 `h2`，页面主标题仍应为页面内的 `h1`。
- `components/ui/FeatureCard.tsx`：图标 + 标题 + 文案卡片，保持统一外观与交互。
- `components/ui/FeatureGrid.tsx`：特性卡片栅格，支持 1/2/3/4 列的响应式。
- `components/ui/CheckList.tsx`：勾选要点列表，默认 `ShieldCheck` 图标，可自定义。
- `components/ui/CtaGroup.tsx`：主要/次要 CTA 按钮组，使用 `next/link`。
- `components/ui/LabelBadge.tsx`：区块标题上方的小型标签（支持 `uppercase`）。
 说明：链接卡片能力已合并到 `FeatureCard`/`FeatureGrid`，通过传入 `href` 与 `ctaText` 使用。
- `components/ui/FeatureGrid.tsx`：支持 `animated` 与 `variant` 参数，带淡入动画的特性栅格。
- `components/ui/TileCard.tsx`：用于数据源/协议等简短标签展示的卡片。
- `components/ui/TileGrid.tsx`：带淡入动画的标签栅格，支持 2/3/4 列。
- `components/ui/PhoneMockup.tsx`：移动端样机容器，提供统一的手机外壳与状态栏样式。
- `components/ui/BrandCtaSection.tsx`：品牌色背景的 CTA 区域，包含背景纹理与主次按钮。

## 使用示例

```tsx
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import FeatureGrid from '@/components/ui/FeatureGrid';
import { Monitor, Layout, Smartphone } from 'lucide-react';

export default function Example() {
  return (
    <Section className="py-24 bg-white">
      <SectionHeader
        title="全端响应式设计"
        subtitle="一次开发，多端适配。"
        centered
      />
      <FeatureGrid
        cols={3}
        items={[
          { icon: <Monitor size={48} />, title: '桌面端', desc: '沉浸式大屏体验' },
          { icon: <Layout size={48} />, title: '平板端', desc: '自适应布局调整' },
          { icon: <Smartphone size={48} />, title: '移动端', desc: '极简交互设计' },
        ]}
      />
    </Section>
  );
}
```

勾选要点列表示例：

```tsx
import CheckList from '@/components/ui/CheckList';
import { ShieldCheck } from 'lucide-react';

<CheckList
  items={['透明化项目管理', '严格的代码审查与自动化测试', '终身售后技术支持']}
  icon={<ShieldCheck size={20} className="text-[#52C41A]" />}
/>;
```

CTA 按钮组示例：

```tsx
import CtaGroup from '@/components/ui/CtaGroup';

<CtaGroup
  primary={{ label: '免费获取报价', href: '/services/website' }}
  secondary={{ label: '查看设计案例', href: '/cases' }}
/>;
```

核心服务栅格示例（链接卡片已合并至 FeatureGrid）：

```tsx
import FeatureGrid from '@/components/ui/FeatureGrid';
import { AppWindow, Settings, Globe } from 'lucide-react';

<FeatureGrid
  cols={3}
  animated
  variant="badge"
  items={[
    { href: '/services/app-dev', icon: <AppWindow size={28} />, title: '小程序/APP开发', desc: '覆盖主流平台', ctaText: '了解更多解决方案' },
    { href: '/services/custom-system', icon: <Settings size={28} />, title: '业务系统定制', desc: '贴合业务流程', ctaText: '了解更多解决方案' },
    { href: '/services/website', icon: <Globe size={28} />, title: '企业官网建设', desc: '品牌形象 + SEO', ctaText: '了解更多解决方案' },
  ]}
/>;
```

服务页特性栅格示例（保留逐项淡入动画）：

```tsx
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import FeatureGrid from '@/components/ui/FeatureGrid';
import { PieChart, Smartphone, TrendingUp } from 'lucide-react';

<Section className="py-24 bg-white">
  <SectionHeader title="可视化与智能分析" centered />
  <FeatureGrid
    cols={3}
    animated
    items={[
      { icon: <PieChart size={28} />, title: '可视化大屏', desc: '3D 地图、实时动态图表' },
      { icon: <Smartphone size={28} />, title: '移动驾驶舱', desc: '随时查看关键经营数据' },
      { icon: <TrendingUp size={28} />, title: '智能预警', desc: '异常数据自动通知' },
    ]}
  />
</Section>
```

数据源标签栅格示例：

```tsx
import TileGrid from '@/components/ui/TileGrid';
import { FileSpreadsheet, Database, Server, Cpu } from 'lucide-react';

<TileGrid
  cols={4}
  items={[
    { title: 'Excel / CSV', icon: <FileSpreadsheet size={32} /> },
    { title: 'MySQL / Oracle', icon: <Database size={32} /> },
    { title: 'ERP / CRM API', icon: <Server size={32} /> },
    { title: 'IoT / Hardware', icon: <Cpu size={32} /> },
  ]}
/>;
```

移动端样机容器示例：

```tsx
import PhoneMockup from '@/components/ui/PhoneMockup';

<PhoneMockup time="14:30">
  <div className="p-4">
    Mockup Content...
  </div>
</PhoneMockup>
```

品牌 CTA 区域示例：

```tsx
import BrandCtaSection from '@/components/ui/BrandCtaSection';

<BrandCtaSection
  title="准备好升级您的数字化引擎了吗？"
  description="每天有超过 100 家企业选择与我们同行。"
  primaryAction={{ label: "免费获取报价", href: "/contact" }}
  secondaryAction={{ label: "联系我们", href: "/about" }}
/>
```

## 设计与 SEO 规范

- 保持现有配色与风格，组件不自行定义新颜色或调整排版。
- 页面级主标题使用 `h1`，区块标题使用 `h2`，利于语义与 SEO。
- 组件无副作用，适用于 Next.js App Router 的服务端渲染。
