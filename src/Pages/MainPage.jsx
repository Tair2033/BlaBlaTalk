import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../redux/slices/userSlice';
import './styles/main.css';
import Loader from '../UI/Loader';

const MainPage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const messenger = useSelector((state) => state.messenger);

  return (
    <div className='main-wrapper'>
      <div className='main'>
      {messenger.isLoading ? (
          <div className="loader__wrapper">
            <Loader/>
          </div>
        ) : (
          <div className="container">
        <div className='main__box'>
          <div className='main__left'>
            <img src="https://img.freepik.com/premium-photo/man-writing-on-his-notepad-with-pencil_23-2148288561.jpg" alt="" />
          </div>
          <div className='main__right'>
            <div className="main__right-text">
            Introducing our cool messaging app. <br/>We guarantee safety and convenience. <br/>
            <span>Login or register to continue</span>
            </div>

            {!user.isAuth ? (
              <div className='main-buttons'>
                <div className='main-login'>
                  <button
                    type='button'
                    className='login btn'
                  >
                    Sign up
                  </button>
                </div>

                <div className='main-register'>
                  <button
                    type='button'
                    className='register btn'
                    onClick={() => dispatch(login())}
                  >
                    Sign in
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
