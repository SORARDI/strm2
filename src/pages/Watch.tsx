import { useSearchParams } from 'react-router-dom';
import { VideoCard } from '../components/VideoCard';
import { VideoInteractions } from '../components/VideoInteractions';

// ... (previous VIDEO_DATA and RELATED_VIDEOS remain the same)

export function Watch() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v') || 'music-101';
  const video = VIDEO_DATA[videoId as keyof typeof VIDEO_DATA] || VIDEO_DATA['music-101'];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Content */}
        <div className="lg:w-[70%]">
          {/* Video Player */}
          <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
            <video
              className="w-full h-full object-contain"
              controls
              poster={video.thumbnail}
            >
              <source src="" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Video Info & Interactions */}
          <div className="mt-4">
            <h1 className="text-xl font-bold">{video.title}</h1>
            <div className="flex items-center gap-4 mt-2">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt="Creator"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium">{video.creator}</p>
                <p className="text-sm text-gray-500">{video.subscribers} subscribers</p>
              </div>
            </div>

            <VideoInteractions
              videoId={videoId}
              initialLikes={95000}
              initialDislikes={1000}
              isSubscribed={false}
              hasCRBT={videoId.startsWith('music')}
            />
          </div>

          {/* Description */}
          <div className="mt-4 bg-gray-100 rounded-xl p-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <span>{video.views} views</span>
              <span>•</span>
              <span>2 months ago</span>
            </div>
            <p className="text-sm text-gray-800 whitespace-pre-line">
              {video.description}
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-[30%]">
          <div className="flex items-center gap-2 mb-4">
            <button className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">All</button>
            <button className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">Related</button>
            <button className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">From {video.creator}</button>
          </div>
          <div className="flex flex-col gap-4">
            {RELATED_VIDEOS.map((video) => (
              <VideoCard
                key={video.id}
                title={video.title}
                thumbnail={video.thumbnail}
                duration={video.duration}
                views={video.views}
                creator={video.creator}
                className="!block"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}