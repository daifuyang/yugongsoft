import { ShieldCheck } from "lucide-react";

/**
 * 勾选要点列表：用于“优势/要点/交付保障”等描述性列表
 * - 默认图标为 `ShieldCheck`，可通过 `icon` 替换为任意图标
 * - 保持文本样式与品牌风格一致，不在组件内引入新的颜色方案
 */

/** 入参说明 */
interface CheckListProps {
  items: string[];
  iconClassName?: string;
  itemClassName?: string;
  icon?: React.ReactNode;
}

export default function CheckList({
  items,
  iconClassName = "text-[#1677FF]",
  itemClassName = "text-slate-700 font-medium",
  icon,
}: CheckListProps) {
  return (
    <ul className="space-y-4">
      {items.map((text, i) => (
        <li key={i} className={`flex items-center gap-3 ${itemClassName}`}>
          {icon ? icon : <ShieldCheck size={20} className={iconClassName} />}
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}
