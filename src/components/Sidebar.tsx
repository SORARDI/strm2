import { Home, PlayCircle, Music, Dumbbell, Film, Mic2, History, Clock, ThumbsUp, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSidebarStore } from '../store/sidebar';
import { cn } from '../lib/utils';

export function Sidebar() {
  const { isOpen, close } = useSidebarStore();

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={close}
      />

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 shadow-xl",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4">
          <Link to="/" className="text-2xl font-bold" onClick={close}>
            StreamHub
          </Link>
        </div>

        <nav className="mt-4">
          <div className="px-4 mb-2 text-sm text-gray-500">Main</div>
          <Link
            to="/"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={close}
          >
            <Home className="w-5 h-5 mr-3" />
            Home
          </Link>
          <Link
            to="/services"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={close}
          >
            <PlayCircle className="w-5 h-5 mr-3" />
            Browse
          </Link>

          <div className="px-4 mt-6 mb-2 text-sm text-gray-500">Categories</div>
          <Link
            to="/services?category=music"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={close}
          >
            <Music className="w-5 h-5 mr-3" />
            Music
          </Link>
          <Link
            to="/services?category=sports"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={close}
          >
            <Dumbbell className="w-5 h-5 mr-3" />
            Sports
          </Link>
          <Link
            to="/services?category=entertainment"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={close}
          >
            <Film className="w-5 h-5 mr-3" />
            Entertainment
          </Link>
          <Link
            to="/services?category=comedy"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={close}
          >
            <Mic2 className="w-5 h-5 mr-3" />
            Comedy
          </Link>

          <div className="px-4 mt-6 mb-2 text-sm text-gray-500">Library</div>
          <button className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <History className="w-5 h-5 mr-3" />
            History
          </button>
          <button className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <Clock className="w-5 h-5 mr-3" />
            Watch Later
          </button>
          <button className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <ThumbsUp className="w-5 h-5 mr-3" />
            Liked Videos
          </button>

          <div className="px-4 mt-6 mb-2 text-sm text-gray-500">Settings</div>
          <button className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </button>
        </nav>
      </div>
    </>
  );
}