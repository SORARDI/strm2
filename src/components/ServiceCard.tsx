import { Play, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  subCategories?: string[];
  className?: string;
  onClick?: () => void;
}

export function ServiceCard({ 
  title, 
  description, 
  icon, 
  image, 
  subCategories,
  className, 
  onClick 
}: ServiceCardProps) {
  return (
    <div 
      className={cn(
        "group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300",
        className
      )}
      onClick={onClick}
    >
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
          <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          {icon}
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        {subCategories && (
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-gray-500">Categories:</h4>
            {subCategories.map((category, index) => (
              <div 
                key={index}
                className="flex items-center justify-between text-sm text-gray-700 hover:text-blue-600 transition-colors"
              >
                <span>{category}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}