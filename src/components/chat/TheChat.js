import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  toggleAccordion,
  toggleSearch,
} from "../../redux/slices/companionsSlice";
import { shortMessage } from "../../utils/utils";
import "./chat.css";

const TheChat = () => {
  const companions = useSelector((state) => state.companions);
  const accordion = useSelector((state) => state.companions.accordion);
  const dispatch = useDispatch();

  const activeList = {
    maxHeight: "200px",
  };

  const activeStyle = (indexBlock) => {
    if (indexBlock == accordion.length - 1) {
      return {
        height: "55vh",
      };
    }

    if (accordion[indexBlock]) {
      return activeList;
    }
    return null;
  };

  return (
    <div className="chat-wrapper">
      <div className="chat">
        <div className="chat-search">
          <input
            type="search"
            className="search-input"
            placeholder="Search"
            onFocus={(e) => {
              if (!e.target.value) {
                dispatch(toggleSearch());
              }
            }}
            onBlur={(e) => {
              if (!e.target.value) {
                dispatch(toggleSearch());
              }
            }}
          />
          <div className="icon">
            {companions.isSearchActive ? (
              <i className="fi fi-rs-search"></i>
            ) : null}
          </div>
        </div>

        <div className="accordion-wrapper">
          <div className="accordion">
            {companions.users.map((block, indexBlock) => {
              return (
                <div
                  className="accordion-item"
                  key={indexBlock}
                  onClick={(e) => {
                    if (e.target.className === "accordion-button") {
                      console.log(e.target.className);
                      dispatch(toggleAccordion(indexBlock));
                    }
                  }}>
                  <h1 className="accordion-header">
                    <button className="accordion-button" type="button">
                      <div className="accordion-button__title">
                        {block.type}
                      </div>
                      <div
                        className="accordion-button__icon"
                        onClick={() => {
                          dispatch(toggleAccordion(indexBlock));
                        }}>
                        <i className="fi fi-rr-angle-small-down"></i>
                      </div>
                    </button>
                  </h1>

                  <div className="accordion-collapse">
                    <div className="accordion-body">
                      <div
                        className="chat-list"
                        style={activeStyle(indexBlock)}>
                        {accordion[indexBlock]
                          ? block.companions.map((user, indexUser) => {
                              return (
                                <div
                                  className="chat-item"
                                  key={indexUser}
                                  onClick={() => dispatch(selectUser(user))}>
                                  <div className="chat-icon">
                                    {user.icon ? (
                                      <img
                                        src={user.icon}
                                        alt=""
                                        className="chat-icon__img"
                                      />
                                    ) : (
                                      <div className="text-img">
                                        {user.name[0].toUpperCase()}
                                        {user.surename[0].toUpperCase()}
                                      </div>
                                    )}
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
                                      <div className="chat-top__time">
                                        {user.messages[0].time}
                                      </div>
                                    </div>

                                    <div className="chat-bottom">
                                      <div className="chat-bottom__message">
                                        {shortMessage(user.messages[0].text)}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })
                          : null}
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
