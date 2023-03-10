import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../redux/slices/companionsSlice";
import { changeRows } from "../../redux/slices/messengerSlice";
import Message from "../../UI/message/Message";
import "./messages.css";

const TheMessegesBox = (props) => {
  const userNotSelectedStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const messenger = useSelector((state) => state.messenger);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  return (
    <div className="messages-wrapper">
      {!props.companion ? (
        <div className="messages" style={userNotSelectedStyle}>
          <h1 className="messages-text">Please, choose a chat!</h1>
        </div>
      ) : (
        <div className="messages">
          <div className="messages-top">
            {props.companion ? (
              <div className="messages-inside">
                <div className="messages-left">
                  <div className="messages-left__icon">
                    {props.companion.icon === null ? (
                      <div className="icon-text">
                        {props.companion.name[0].toUpperCase()}
                        {props.companion.surename[0].toUpperCase()}
                      </div>
                    ) : (
                      <img src={props.companion.icon} alt="" />
                    )}
                  </div>
                  <div className="messages-left__name">
                    Conversation with{""}
                    <span>
                      {props.companion.name} {props.companion.surename}
                    </span>
                  </div>
                </div>

                <div className="messages-right">
                  <div className="message-right__btn">
                    <i className="fi fi-rr-star"></i>
                  </div>
                  <div className="message-right__btn">
                    <i className="fi fi-rr-settings-sliders"></i>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className="messages-box">
            <div className="messages-content">
              {/* <div className="context-menu"></div> */}
              {props.companion.messages.map((item, id) => {
                return (
                  <Message
                    key={id}
                    type={item.type}
                    image={item.image || null}
                    sender={item.sender}
                    time={item.time || null}
                    text={item.text || null}
                  />
                );
              })}
            </div>
          </div>
          <div className="messages-input">
            <div
              className="messages-input__block"
              style={{
                height: "40px",
              }}
              onInput={(e) => {
                dispatch(changeRows());
              }}
              ref={inputRef}
              contentEditable></div>
            <div
              className="messages-input__btn"
              onClick={() => {
                dispatch(
                  addMessage({
                    messageType: "defaultText",
                    text: inputRef.current.textContent,
                  })
                );
              }}
              style={{
                right: "60px",
              }}>
              <i className="fi fi-rr-paper-plane"></i>
            </div>
            <div
              className="messages-input__btn"
              style={{
                right: "95px",
              }}>
              <i className="fi fi-rr-clip"></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TheMessegesBox;
