import FadeIn from "@/components/FadeIn";
import TileCard from "./TileCard";

/**
 * 图标标签栅格：展示若干 `TileCard`，保留每项淡入动画
 */
interface TileItem {
  icon?: React.ReactNode;
  title: string;
}

interface TileGridProps {
  items: TileItem[];
  cols?: 2 | 3 | 4;
  className?: string;
  startDelay?: number;
  delayStep?: number;
}

export default function TileGrid({
  items,
  cols = 4,
  className = "",
  startDelay = 0,
  delayStep = 0.1,
}: TileGridProps) {
  const gridClass =
    cols === 2
      ? "grid grid-cols-2 gap-6"
      : cols === 3
      ? "grid grid-cols-2 md:grid-cols-3 gap-6"
      : "grid grid-cols-2 md:grid-cols-4 gap-6";

  return (
    <div className={`${gridClass} ${className}`}>
      {items.map((item, i) => (
        <FadeIn key={i} delay={startDelay + i * delayStep} direction="up">
          <TileCard icon={item.icon} title={item.title} />
        </FadeIn>
      ))}
    </div>
  );
}

