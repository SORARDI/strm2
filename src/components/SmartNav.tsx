import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Music2, Film, Dumbbell, Mic2, TrendingUp, Clock, Heart, 
  Star, Radio, Tv, Users, Coffee, Theater, BookOpen
} from 'lucide-react';

interface NavSection {
  id: string;
  title: string;
  icon: JSX.Element;
  items: NavItem[];
}

interface NavItem {
  id: string;
  title: string;
  path: string;
  description?: string;
}

const NAV_SECTIONS: NavSection[] = [
  {
    id: 'music',
    title: 'ሙዚቃ',
    icon: <Music2 className="w-5 h-5" />,
    items: [
      { 
        id: 'traditional',
        title: 'የባህል ሙዚቃ',
        path: '/music/traditional',
        description: 'Traditional Ethiopian Music'
      },
      { 
        id: 'modern',
        title: 'ዘመናዊ',
        path: '/music/modern',
        description: 'Contemporary Ethiopian Music'
      },
      { 
        id: 'religious',
        title: 'መዝሙር',
        path: '/music/religious',
        description: 'Ethiopian Religious Music'
      },
      { 
        id: 'instrumental',
        title: 'የባህል መሳሪያዎች',
        path: '/music/instrumental',
        description: 'Traditional Instruments'
      }
    ]
  },
  {
    id: 'entertainment',
    title: 'መዝናኛ',
    icon: <Film className="w-5 h-5" />,
    items: [
      { 
        id: 'drama',
        title: 'ድራማ',
        path: '/entertainment/drama',
        description: 'Ethiopian TV Series'
      },
      { 
        id: 'movies',
        title: 'ፊልም',
        path: '/entertainment/movies',
        description: 'Ethiopian Movies'
      },
      { 
        id: 'shows',
        title: 'ተከታታይ ፕሮግራሞች',
        path: '/entertainment/shows',
        description: 'TV Shows'
      }
    ]
  },
  {
    id: 'culture',
    title: 'ባህል',
    icon: <Coffee className="w-5 h-5" />,
    items: [
      { 
        id: 'traditions',
        title: 'ወግ',
        path: '/culture/traditions',
        description: 'Ethiopian Traditions'
      },
      { 
        id: 'festivals',
        title: 'በዓላት',
        path: '/culture/festivals',
        description: 'Cultural Festivals'
      },
      { 
        id: 'food',
        title: 'ምግብ',
        path: '/culture/food',
        description: 'Ethiopian Cuisine'
      }
    ]
  },
  {
    id: 'sports',
    title: 'ስፖርት',
    icon: <Dumbbell className="w-5 h-5" />,
    items: [
      { 
        id: 'football',
        title: 'እግር ኳስ',
        path: '/sports/football',
        description: 'Ethiopian Football'
      },
      { 
        id: 'athletics',
        title: 'አትሌቲክስ',
        path: '/sports/athletics',
        description: 'Athletics'
      }
    ]
  },
  {
    id: 'comedy',
    title: 'ቀልድ',
    icon: <Mic2 className="w-5 h-5" />,
    items: [
      { 
        id: 'standup',
        title: 'ቁም ቀልድ',
        path: '/comedy/standup',
        description: 'Stand-up Comedy'
      },
      { 
        id: 'sketches',
        title: 'ፈገግታ',
        path: '/comedy/sketches',
        description: 'Comedy Sketches'
      }
    ]
  }
];

export function SmartNav() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 64);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`
      sticky top-16 bg-white z-40 transition-all duration-300
      ${isScrolled ? 'shadow-md' : ''}
    `}>
      <div className="container mx-auto">
        {/* Main Categories */}
        <div className="flex items-center space-x-1 p-2 overflow-x-auto scrollbar-hide">
          <Link
            to="/"
            className="flex items-center space-x-1 px-4 py-2 rounded-full hover:bg-gray-100"
          >
            <Star className="w-5 h-5" />
            <span>ተወዳጅ</span>
          </Link>
          
          {NAV_SECTIONS.map((section) => (
            <button
              key={section.id}
              className={`
                flex items-center space-x-1 px-4 py-2 rounded-full transition-colors
                ${activeSection === section.id ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'}
              `}
              onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
            >
              {section.icon}
              <span>{section.title}</span>
            </button>
          ))}

          <div className="flex items-center space-x-1 border-l pl-2 ml-2">
            <Link
              to="/library"
              className="flex items-center space-x-1 px-4 py-2 rounded-full hover:bg-gray-100"
            >
              <Clock className="w-5 h-5" />
              <span>በኋላ የሚታይ</span>
            </Link>
            <Link
              to="/favorites"
              className="flex items-center space-x-1 px-4 py-2 rounded-full hover:bg-gray-100"
            >
              <Heart className="w-5 h-5" />
              <span>የወደድኩት</span>
            </Link>
          </div>
        </div>

        {/* Subcategories Dropdown */}
        {activeSection && (
          <div className="border-t bg-white shadow-lg rounded-b-lg">
            <div className="py-4 px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {NAV_SECTIONS.find(s => s.id === activeSection)?.items.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className="group p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setActiveSection(null)}
                >
                  <div className="font-medium mb-1">{item.title}</div>
                  {item.description && (
                    <div className="text-sm text-gray-500 group-hover:text-gray-700">
                      {item.description}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}