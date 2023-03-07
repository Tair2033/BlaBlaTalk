import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlice";
import "./styles/main.css";

const MainPage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="main-wrapper">
      <div className="main">
        {!user.isAuth ? (
          <div className="main-buttons">
            <div className="main-login">
              <button
                type="button"
                className="login btn"
                onClick={() => dispatch(login())}>
                Sign up
              </button>
            </div>

            <div className="main-register">
              <button type="button" className="register btn">
                Sign in
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MainPage;
