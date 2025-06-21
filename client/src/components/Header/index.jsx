import { useState } from 'react';

import Logo from './logo';
import SearchBar from './SearchBar';
import DesktopMenu from './DesktopMenu';
import MobileMenuIcon from './MobileMenuIcon';
import MobileMenu from './MobileMenu';
import MegaMenu from './MegaMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='fixed z-30 w-full border-b border-slate-200 bg-white'>
      <div className='relative mx-auto max-w-7xl bg-white px-3 sm:px-6 lg:px-8'>
        <div className='relative flex h-14 w-full items-center justify-between sm:h-16'>
          <div className='flex w-full items-center justify-between gap-10'>
            <Logo />
            <SearchBar />
            <DesktopMenu />
            <MobileMenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>

      <div className='fixed w-full border-b sm:hidden'>
        {isOpen && <MobileMenu />}
      </div>

      <MegaMenu />
    </header>
  );
};

export default Header;
