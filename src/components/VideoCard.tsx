import { Play, Clock } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

interface VideoCardProps {
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  creator: string;
  className?: string;
}

export function VideoCard({ title, thumbnail, duration, views, creator, className }: VideoCardProps) {
  return (
    <Link to="/watch" className={cn("group cursor-pointer block", className)}>
      <div className="relative aspect-video rounded-lg overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
          <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-sm px-2 py-1 rounded-md flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          {duration}
        </div>
      </div>
      <div className="mt-2">
        <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{creator}</p>
        <p className="text-gray-500 text-sm">{views} views</p>
      </div>
    </Link>
  );
}