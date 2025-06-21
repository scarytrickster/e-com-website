import {
  ShoppingBagIcon,
  TagIcon,
  UserIcon,
  Cog8ToothIcon,
} from '@heroicons/react/16/solid';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import MenuItem from './MenuItem';
import { useLogoutMutation } from '@slices/userApislice';
import { logout } from '@slices/authSlice';

const DesktopMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const [adminIsOpen, setAdminIsOpen] = useState(false);
  const adminMenuRef = useRef(null);

  const [logoutApiCall] = useLogoutMutation();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
      if (adminMenuRef.current && !adminMenuRef.current.contains(e.target)) {
        setAdminIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleLogOut = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className='hidden items-center sm:ml-6 sm:flex sm:space-x-8'>
      <MenuItem url='/categories' label='Categories' icon={TagIcon} />
      <div className='flex items-center gap-2'>
        <MenuItem url='/cart' label='Cart' icon={ShoppingBagIcon} />
        {cartItems.length > 0 && (
          <span className='min-w-5 rounded-full bg-indigo-700 text-center text-sm font-semibold text-white'>
            {cartItems.length}
          </span>
        )}
      </div>
      {userInfo ? (
        <div className='relative z-50' ref={menuRef}>
          <button
            className='focus:outline-offset-3 rounded-full bg-gray-200 p-2 focus:outline-2'
            onClick={() => setIsOpen(!isOpen)}>
            <UserIcon className='h-5 w-5' />
          </button>

          {isOpen && (
            <nav className='absolute right-0 top-10 z-50 min-w-48 rounded-lg bg-white shadow-md'>
              <div className='border-b p-4 pb-3'>
                <p className='text-sm leading-normal'>
                  <span className='font-semibold text-gray-900'>
                    {userInfo.name}
                  </span>
                  <br />
                  <span className='text-gray-900'>{userInfo.email}</span>
                </p>
              </div>
              <Link
                to='/profile'
                className='block px-4 py-2 text-sm text-gray-700 transition-all hover:bg-gray-300 focus:bg-gray-300'>
                Profile
              </Link>
              <button
                onClick={handleLogOut}
                className='block w-full px-4 py-2 text-left text-sm text-gray-700 transition-all hover:bg-gray-200 focus:bg-gray-300'>
                Logout
              </button>
            </nav>
          )}
        </div>
      ) : (
        <MenuItem url='/login' label='Login' icon={UserIcon} />
      )}

      {userInfo && userInfo.isAdmin && (
        <div className='relative z-50' ref={adminMenuRef}>
          <button
            className='focus:outline-offset-3 rounded-full bg-gray-200 p-2 focus:outline-2'
            onClick={() => setAdminIsOpen(!adminIsOpen)}>
            <Cog8ToothIcon className='h-5 w-5' />
          </button>

          {adminIsOpen && (
            <nav className='absolute right-0 top-10 min-w-48 rounded-lg bg-white shadow-md'>
              <Link
                to='/admin/orderlist'
                className='block px-4 py-2 text-sm text-gray-700 transition-all hover:bg-gray-200 focus:bg-gray-300'>
                All Orders
              </Link>
              <Link
                to='/admin/userlist'
                className='block px-4 py-2 text-sm text-gray-700 transition-all hover:bg-gray-200 focus:bg-gray-300'>
                All Users
              </Link>
              <Link
                to='/admin/productlist'
                className='block px-4 py-2 text-sm text-gray-700 transition-all hover:bg-gray-200 focus:bg-gray-300'>
                All Products
              </Link>
            </nav>
          )}
        </div>
      )}
    </nav>
  );
};

export default DesktopMenu;
