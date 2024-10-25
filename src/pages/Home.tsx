import { VideoCard } from '../components/VideoCard';

const FEATURED_VIDEOS = [
  {
    id: 1,
    title: "The Art of Cinematography",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "15:30",
    views: "1.2M",
    creator: "Cinema Masters"
  },
  {
    id: 2,
    title: "Understanding Color Theory",
    thumbnail: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "12:45",
    views: "856K",
    creator: "Design Academy"
  },
  {
    id: 3,
    title: "Digital Photography Basics",
    thumbnail: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "20:15",
    views: "2.1M",
    creator: "Photo Pro"
  }
];

export function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_VIDEOS.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              thumbnail={video.thumbnail}
              duration={video.duration}
              views={video.views}
              creator={video.creator}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Trending Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_VIDEOS.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              thumbnail={video.thumbnail}
              duration={video.duration}
              views={video.views}
              creator={video.creator}
            />
          ))}
        </div>
      </section>
    </div>
  );
}