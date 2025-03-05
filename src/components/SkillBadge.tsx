
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  color?: string;
  className?: string;
  isNew?: boolean;
}

export function SkillBadge({ 
  name, 
  color = "#8b949e", 
  className,
  isNew = false 
}: SkillBadgeProps) {
  // Generate contrasting text color
  const isDark = (color: string): boolean => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 150;
  };
  
  const textColor = isDark(color) ? 'text-white' : 'text-gray-900';
  
  return (
    <span 
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium relative",
        textColor,
        className
      )}
      style={{ backgroundColor: color }}
    >
      {name}
      {isNew && (
        <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-primary animate-pulse" />
      )}
    </span>
  );
}
