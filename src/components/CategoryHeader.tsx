import { cn } from '../lib/utils';

interface CategoryHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export function CategoryHeader({ title, description, className }: CategoryHeaderProps) {
  return (
    <div className={cn("text-center mb-12", className)}>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
    </div>
  );
}