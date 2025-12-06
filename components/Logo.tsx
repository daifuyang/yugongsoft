export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* 后山 - 蚂蚁蓝 */}
      <path d="M4 28L14 8L24 28H4Z" fill="#1677FF" />
      {/* 前山 - 浅青蓝 (Cyan-400)，形成通透的重叠感 */}
      <path d="M12 28L20 12L28 28H12Z" fill="#22D3EE" className="opacity-80 mix-blend-multiply" />
    </svg>
  );
}