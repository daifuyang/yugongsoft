/**
 * 小型标签徽章：用于区块标题上方的标签文案（如“OUR SERVICES”）
 * - 保持既有样式：蓝色文字、紧凑字重与字距
 */
interface LabelBadgeProps {
  text: string;
  className?: string;
  uppercase?: boolean;
}

export default function LabelBadge({ text, className = "", uppercase = false }: LabelBadgeProps) {
  return (
    <span
      className={`text-[#1677FF] font-semibold tracking-wider text-sm ${uppercase ? "uppercase" : ""} ${className}`}
    >
      {text}
    </span>
  );
}

