import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <nav className='header'>
      {/* Logo on the left */}
      <Link to='/login'>
        <img
          className='header__logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt=''
        />
      </Link>

      {/* Search box */}
      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>

      {/* 3 links  */}
      <div className='header__nav'>
        {/* Link 1 */}
        <Link to='/login' className='header__link'>
          <div className='header__option'>
            <span>Hello Khadar</span>
            <span>Sign in</span>
          </div>
        </Link>

        {/* Link 2 */}
        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span>Returns</span>
            <span>& Orders</span>
          </div>
        </Link>

        {/* Link 3 */}
        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span>Your</span>
            <span>Prime</span>
          </div>
        </Link>
      </div>

      {/* Basket icon with a number */}
    </nav>
  );
}

export default Header;
