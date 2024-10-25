import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const FEATURED_CONTENT = [
  {
    id: 'teddy-afro',
    type: 'music',
    title: 'ቴዲ አፍሮ - ፍቅር ያሸንፋል',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'ዘመናዊ',
    duration: '6:24'
  },
  {
    id: 'min-addis-drama',
    type: 'drama',
    title: 'ምን አዲስ - ክፍል 45',
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'ድራማ',
    duration: '22:15'
  },
  {
    id: 'meskel',
    type: 'culture',
    title: 'የመስቀል በዓል አከባበር',
    thumbnail: 'https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'በዓላት',
    duration: '15:30'
  },
  {
    id: 'athletics',
    type: 'sports',
    title: 'የኢትዮጵያ አትሌቲክስ ቡድን',
    thumbnail: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'ስፖርት',
    duration: '18:45'
  }
];

export function FeaturedContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {FEATURED_CONTENT.map((content) => (
        <Link
          key={content.id}
          to={`/watch?v=${content.id}`}
          className="group relative rounded-lg overflow-hidden"
        >
          <div className="aspect-video">
            <img
              src={content.thumbnail}
              alt={content.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <div className="text-white">
                <div className="text-sm font-medium mb-1">{content.category}</div>
                <h3 className="text-lg font-bold mb-1">{content.title}</h3>
                <div className="text-sm opacity-75">{content.duration}</div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}