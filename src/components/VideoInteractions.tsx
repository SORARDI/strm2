import { useState } from 'react';
import { 
  ThumbsUp, 
  ThumbsDown, 
  Share2, 
  Bell, 
  Music, 
  Download,
  MessageCircle,
  Flag 
} from 'lucide-react';
import { useAuthStore } from '../store/auth';

interface VideoInteractionsProps {
  videoId: string;
  initialLikes?: number;
  initialDislikes?: number;
  isSubscribed?: boolean;
  hasCRBT?: boolean;
}

export function VideoInteractions({ 
  videoId, 
  initialLikes = 0,
  initialDislikes = 0,
  isSubscribed = false,
  hasCRBT = false
}: VideoInteractionsProps) {
  const { isAuthenticated } = useAuthStore();
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);
  const [subscribed, setSubscribed] = useState(isSubscribed);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [crbtActive, setCrbtActive] = useState(false);

  const handleLike = () => {
    if (!isAuthenticated) {
      // Show auth modal
      return;
    }
    setLikes(prev => prev + 1);
  };

  const handleDislike = () => {
    if (!isAuthenticated) {
      // Show auth modal
      return;
    }
    setDislikes(prev => prev + 1);
  };

  const handleSubscribe = () => {
    if (!isAuthenticated) {
      // Show auth modal
      return;
    }
    setSubscribed(prev => !prev);
  };

  const handleCRBT = () => {
    if (!isAuthenticated) {
      // Show auth modal
      return;
    }
    setCrbtActive(prev => !prev);
  };

  return (
    <div className="flex flex-wrap items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
      <div className="flex items-center gap-2">
        <button
          onClick={handleLike}
          className={`flex items-center gap-1 px-4 py-2 rounded-full transition-colors
            ${likes > initialLikes ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'}`}
        >
          <ThumbsUp className="w-5 h-5" />
          <span>{likes.toLocaleString()}</span>
        </button>
        <button
          onClick={handleDislike}
          className={`flex items-center gap-1 px-4 py-2 rounded-full transition-colors
            ${dislikes > initialDislikes ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'}`}
        >
          <ThumbsDown className="w-5 h-5" />
          <span>{dislikes.toLocaleString()}</span>
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handleSubscribe}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors
            ${subscribed ? 'bg-gray-200 text-gray-800' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
        >
          <Bell className="w-5 h-5" />
          {subscribed ? 'Subscribed' : 'Subscribe'}
        </button>

        {hasCRBT && (
          <button
            onClick={handleCRBT}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors
              ${crbtActive ? 'bg-green-50 text-green-600' : 'hover:bg-gray-100'}`}
          >
            <Music className="w-5 h-5" />
            {crbtActive ? 'CRBT Active' : 'Set as CRBT'}
          </button>
        )}
      </div>

      <div className="flex items-center gap-2 ml-auto">
        <button
          onClick={() => setShowShareMenu(!showShareMenu)}
          className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100"
        >
          <Share2 className="w-5 h-5" />
          Share
        </button>

        <button className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100">
          <Download className="w-5 h-5" />
          Download
        </button>

        <button className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100">
          <MessageCircle className="w-5 h-5" />
          Comment
        </button>

        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Flag className="w-5 h-5" />
        </button>
      </div>

      {showShareMenu && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg p-4">
          {/* Share options */}
          <div className="grid grid-cols-2 gap-2">
            <button className="px-4 py-2 hover:bg-gray-100 rounded">
              Copy Link
            </button>
            <button className="px-4 py-2 hover:bg-gray-100 rounded">
              Facebook
            </button>
            <button className="px-4 py-2 hover:bg-gray-100 rounded">
              Twitter
            </button>
            <button className="px-4 py-2 hover:bg-gray-100 rounded">
              WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  );
}