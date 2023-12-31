import {useEffect,useRef, useContext} from 'react'
import logo from '../../Assets/images/logo.png'
import {NavLink, Link} from 'react-router-dom'
import {BiMenu} from "react-icons/bi";
import { authContext } from '../../context/AuthContext';

const navLinks=[
  {
    path:'/home',
    display:'Home'
    
  },
  {
    path:'/doctors',
    display:'Find a Doctor'
  },
  {
    path:'/services',
    display:'Services'
  },
  {
    path:'/contact',
    display:'Contact'
  },

]

const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const {user, role, token}=useContext(authContext)

const handleStickyHeader = ()=> {
  window.addEventListener('scroll', ()=>{
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
      headerRef.current.classList.add('sticky_header')
    }else {
      headerRef.current.classList.remove('sticky_header')
    }
  })
}

useEffect(()=>{
  handleStickyHeader()

  return ()=> window.removeEventListener('scroll', handleStickyHeader)
});

  const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu')
  return (
  <header className="header flex items-center sticky top-0" ref={headerRef}>
    <div className="container">
<div className="flex items-center justify-between">
        { /*_____logo_______ */}
        <div>
          <img src={logo} alt="" style={{ width: '270px', height: '70px' }}/>

        </div>

        { /*______menu______  */}
        <div className='navigation' ref={menuRef} onClick = {toggleMenu}>
          <ul className='menu flex items-center gap-[2.7rem]'>
            {navLinks.map((Link, index) => (
              <li key={index}>
                <NavLink
                  to={Link.path}
                  className={navClass =>
                    navClass.isActive
                      ? "text-primaryColor text-[16px] leading-7 font-[600] "
                      : "text-textColor text-[16px] leading-7 font-[500]"
                    }
                  >
                    {Link.display}
                  </NavLink>
              </li>
            ))}

          </ul>
        </div>

        { /*______ Nav Right ______  */}
        <div className="flex items-center gap-4">
        {
          token && user ? 
          (<div>
            {/* <Link to={`$role=='doctor' ? '.doctors/profile/me': '/users/profile/me'}`}> */}
            <Link to={'/users/profile/me'}>
            <figure classname="w-[35px] h-[35px] rounded-full cursor-pointer">
              <img src={user?.photo} className="w-full rounded-full" alt="" />
            </figure>
            
            </Link>
          </div>) :
          (<Link to='/login'>
          <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center
          justify-center rounded-[50px]">
            Login
          </button>
        </Link>
        )}
          
          
          <span className="md:hidden" onClick = {toggleMenu}> 
            <BiMenu className='w-6 h-6 cursor-pointer' />
          </span>
        </div>

      </div>
    </div>

  </header>
  );
}

export default Header;