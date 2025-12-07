import CtaSection from '@/components/ui/CtaSection';

export default function CTA() {
  return (
    <CtaSection
      title="准备好升级您的数字化引擎了吗？"
      description="每天有超过 100 家企业选择与我们同行。现在的选择，决定了未来的速度。"
      primaryAction={{
        label: "免费获取报价",
        href: "/contact"
      }}
      secondaryAction={{
        label: "400-888-6666",
        href: "tel:4008886666"
      }}
    />
  );
}
