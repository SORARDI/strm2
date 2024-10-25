import { Menu, Search, User, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuthStore } from '../store/auth';
import { useSidebarStore } from '../store/sidebar';
import { AuthModal } from './AuthModal';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from '../hooks/useTranslation';

export function Navbar() {
  const { user, logout } = useAuthStore();
  const { toggle } = useSidebarStore();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <nav className="bg-black text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Menu className="h-6 w-6 cursor-pointer" onClick={toggle} />
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.svg" alt="E-Streaming" className="h-8" />
              <span className="text-2xl font-bold">E-Stream</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-blue-400 transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/services" className="hover:text-blue-400 transition-colors">
              {t('nav.services')}
            </Link>
          </div>
          
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder={t('nav.search')}
                className="w-full bg-gray-800 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            
            {user ? (
              <>
                <span className="text-sm">{user.name}</span>
                <User className="h-6 w-6 cursor-pointer" />
                <LogOut 
                  className="h-6 w-6 cursor-pointer hover:text-red-500" 
                  onClick={logout}
                />
              </>
            ) : (
              <button 
                className="bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700"
                onClick={() => setIsAuthModalOpen(true)}
              >
                {t('nav.signIn')}
              </button>
            )}
          </div>
        </div>
      </nav>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
}