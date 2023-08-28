import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { changeLoaderStatus, changeTheme } from '../../redux/slices/messengerSlice';
import './navbar.css';
import { useEffect } from 'react';

const TheNavbar = () => {
  const user = useSelector((state) => state.user);
  const messenger = useSelector((state) => state.messenger);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(changeLoaderStatus())
      clearTimeout(timeout);
    }, 1500);
  })

  const activeStyle = {
    color: '#f3fc8b',
    borderTop: '4px solid #f3fc8b',
    borderBottomLeftRadius: '1px',
    borderBottomRightRadius: '1px'
  };

  const menu = [
    { name: 'Home', link: '' },
    {
      name: 'Chats',
      icon: 'fi fi-rs-comment-alt',
      link: `messenger/${user.id}`
    }
  ];

  return (
    <div className='navbar-wrapper'>
      <div className='navbar'>
        <div className='container'>
          <div
            className='navbar-content'
            style={
              !user.isAuth
                ? {
                    paddingTop: '25px'
                  }
                : null
            }
          >
            <div className='navbar-leftside'>
              <div className='navbar-logo__wrapper'>
                <NavLink
                  to={'/'}
                  className='navbar-logo'
                >
                  BlaBla<span>Talk</span>
                </NavLink>
              </div>
              {user.isAuth ? (
                <ul className='navbar-menu'>
                  {menu.map((item, id) => {
                    return (
                      <NavLink
                        key={id}
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                        to={'/' + item.link}
                        className='navbar-item'
                      >
                        <div className='navbar-item__icon'>
                          <i className={item.icon}></i>
                        </div>
                        <div className='navbar-item__text'>{item.name}</div>
                      </NavLink>
                    );
                  })}
                </ul>
              ) : null}
            </div>

            <div className='navbar-rightside'>
              <div className='navbar-buttons'>
                <div
                  className='navbar-theme btn'
                  onClick={() => dispatch(changeTheme())}
                >
                  {messenger.theme ? (
                    <div
                      className='navbar-theme__btn'
                      style={{
                        right: '-5px'
                      }}
                    >
                      <i className='fi fi-ss-moon'></i>
                    </div>
                  ) : (
                    <div
                      className='navbar-theme__btn'
                      style={{
                        left: 0,
                        backgroundColor: 'yellow',
                        color: 'darkorange'
                      }}
                    >
                      <i className='fi fi-rr-sun sun'></i>
                    </div>
                  )}
                </div>
                {user.isAuth ? (
                  <div className='hidable'>
                    <div className='navbar-call btn'>
                      <i className='fi fi-sr-phone-pause'></i>
                    </div>
                    <div className='navbar-notif btn'>
                      <div className='navbar-notif__btn'>
                        <i className='fi fi-rr-bell'></i>
                      </div>
                      <div className='navbar-notif__point'></div>
                    </div>
                  </div>
                ) : null}
              </div>
              {user.isAuth ? (
                <div className='navbar-user'>
                  <div className='navbar-user__info'>
                    <div className='greetings'>
                      Good Morning, <span>{user.name}</span>
                    </div>
                    <div className='phone'>{user.phone}</div>
                  </div>
                  <div className='navbar-user__icon'>
                    <img
                      src='https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png'
                      alt=''
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheNavbar;
