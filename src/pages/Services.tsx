import { Music2, Dumbbell, Film, Mic2, Play, Album, Users, Laugh, Drama } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ServiceCard } from '../components/ServiceCard';
import { CategoryHeader } from '../components/CategoryHeader';

const SERVICES = [
  {
    id: 'music',
    title: 'Music',
    description: 'Stream your favorite tracks, albums, and discover new artists. Access full albums, individual tracks, and artist profiles.',
    icon: <Music2 className="w-6 h-6 text-blue-600" />,
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    videoId: 'music-101',
    subCategories: ['Coming Soon', 'Album', 'Track', 'Artist']
  },
  {
    id: 'sports',
    title: 'Sports',
    description: 'Access premium workout sessions and stay connected with sports clubs. Follow live events and exclusive content.',
    icon: <Dumbbell className="w-6 h-6 text-green-600" />,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    videoId: 'sports-101',
    subCategories: ['Gym', 'Clubs']
  },
  {
    id: 'entertainment',
    title: 'Entertainment',
    description: 'Enjoy movies, TV shows, and drama series. Access the latest releases and timeless classics in HD quality.',
    icon: <Film className="w-6 h-6 text-purple-600" />,
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    videoId: 'entertainment-101',
    subCategories: ['Drama', 'Movie']
  },
  {
    id: 'comedy',
    title: 'Comedy',
    description: 'Watch stand-up specials, prank videos, and enjoy curated jokes. Experience the best in comedy entertainment.',
    icon: <Mic2 className="w-6 h-6 text-red-600" />,
    image: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    videoId: 'comedy-101',
    subCategories: ['Comedy Show', 'Prank Videos', 'Joke']
  }
];

export function Services() {
  const navigate = useNavigate();

  const handleServiceClick = (videoId: string) => {
    navigate(`/watch?v=${videoId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        <CategoryHeader
          title="Our Services"
          description="Discover a world of entertainment with E-Stream's comprehensive streaming services. From music to comedy, we've got something for everyone."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
              onClick={() => handleServiceClick(service.videoId)}
              subCategories={service.subCategories}
            />
          ))}
        </div>
      </div>
    </div>
  );
}