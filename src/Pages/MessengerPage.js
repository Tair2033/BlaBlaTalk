import React from "react";
import "./styles/messenger.css";
import { useDispatch, useSelector } from "react-redux";
import TheChat from "../components/chat/TheChat";
import TheInformBox from "../components/inform-box/TheInformBox";
import TheMessegesBox from "../components/message-box/TheMessagesBox";
import TheSidebar from "../components/sidebar/TheSidebar";

const MessengerPage = () => {
  const messenger = useSelector((state) => state.messenger);
  const companions = useSelector((state) => state.companions);
  const user = useSelector((state) => state.user);

  return (
    <>
      <div className="messenger-wrapper">
        {user.isAuth ? (
          <div className="messenger">
            <TheSidebar />
            <div className="messenger-container">
              <div className="messenger-main">
                <div className="messenger-content">
                  <TheChat />
                  <TheMessegesBox
                    companion={companions.activeCompanion || null}
                  />
                  <TheInformBox />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="messenger">
            <h1 className="messenger-error">
              Please, <span>sign in</span> or resister!
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default MessengerPage;
