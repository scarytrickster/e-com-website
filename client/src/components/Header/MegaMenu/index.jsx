import { useState, useRef, useEffect } from 'react';

import MegaMenuItem from './MegaMenuItem';
import MenMenuDisplay from './MenMenuDisplay';
import AllCategoriesMenuDisplay from './AllCategoriesMenuDisplay';

const menuComponents = {
  'All Categories': AllCategoriesMenuDisplay,
  Men: MenMenuDisplay,
};

const MegaMenu = () => {
  const [currentMenu, setCurrentMenu] = useState(null);
  const menuRef = useRef(null);

  const CurrentMenuComponent = currentMenu ? menuComponents[currentMenu] : null;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setCurrentMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mosuedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className='hifdden relative z-20 mx-auto max-w-7xl gap-10 bg-white px-3 py-2.5 sm:px-6 lg:flex lg:px-8'>
        <MegaMenuItem
          label='All Categories'
          action={setCurrentMenu}
          currentMenu={currentMenu}
        />
        <MegaMenuItem
          label='Men'
          action={setCurrentMenu}
          currentMenu={currentMenu}
        />
        <MegaMenuItem
          label='Women'
          action={setCurrentMenu}
          currentMenu={currentMenu}
        />
        <MegaMenuItem
          label='Kids'
          action={setCurrentMenu}
          currentMenu={currentMenu}
        />
        <MegaMenuItem
          label='Watches'
          action={setCurrentMenu}
          currentMenu={currentMenu}
        />
        <MegaMenuItem
          label='collections'
          action={setCurrentMenu}
          currentMenu={currentMenu}
        />
        <MegaMenuItem
          label='Shoes'
          action={setCurrentMenu}
          currentMenu={currentMenu}
        />
        <MegaMenuItem
          label='Acessories'
          action={setCurrentMenu}
          currentMenu={currentMenu}
        />
        <MegaMenuItem
          label='Sale'
          action={setCurrentMenu}
          currentMenu={currentMenu}
        />
      </nav>

      <div ref={menuRef} className=''>
        {CurrentMenuComponent && <CurrentMenuComponent />}
      </div>
    </>
  );
};

export default MegaMenu;
