import React from "react";
import { useSelector } from "react-redux";
import "./chat.css";

const TheChat = () => {
  const companions = useSelector((state) => state.companions.users);

  return (
    <div className="chat-wrapper">
      <div className="chat">
        <div className="chat-search">
          <input type="search" className="search-input" placeholder="Search" />
          <div className="icon">
            <i className="fi fi-rs-search"></i>
          </div>
        </div>

        <div className="accordion-wrapper">
          <div className="accordion">
            {companions.map((block, indexBlock) => {
              return (
                <div className="accordion-item">
                  <h1 className="accordion-header">
                    <button className="accordion-button" type="button">
                      <div className="accordion-button__title">
                        {block.type}
                      </div>
                      <div className="accordion-button__icon">
                        <i className="fi fi-rr-angle-small-down"></i>
                      </div>
                    </button>
                  </h1>

                  <div className="accordion-collapse">
                    <div className="accordion-body">
                      <div className="chat-list">
                        {block.companions.map((user, indexUser) => {
                          return (
                            <div className="chat-item">
                              <div className="chat-icon">
                                <img
                                  src={user.icon}
                                  alt=""
                                  className="chat-icon__img"
                                />
                                {user.unread > 0 ? (
                                  <div className="chat-icon__count">
                                    {user.unread}
                                  </div>
                                ) : null}
                              </div>
                              <div className="chat-info">
                                <div className="chat-top">
                                  <div className="chat-top__name">
                                    {user.name} {user.surename}
                                  </div>
                                  {user.isOnline ? (
                                    <div className="chat-top__status"></div>
                                  ) : null}
                                  <div className="chat-top__time"></div>
                                </div>

                                <div className="chat-bottom">
                                  <div className="chat-bottom__message">
                                    {user.messages[0].text}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheChat;
