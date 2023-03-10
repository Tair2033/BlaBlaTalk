import React from "react";
import "./message.css";

const Message = (props) => {
  const side = () => {
    if (props.sender == "Companion") {
      return {
        justifyContent: "start",
      };
    }

    return {
      justifyContent: "end",
    };
  };

  const messageStyle = () => {
    if (props.sender == "Companion") {
      return {
        backgroundColor: "#0e1014",
        borderBottomLeftRadius: 0,
      };
    }

    return {
      backgroundColor: "#b886f5",
      borderBottomRightRadius: 0,
    };
  };

  if (props.type === "image") {
    return (
      <div className="message-wrapper" style={side()}>
        <div className="message image-message" style={messageStyle()}>
          <img src={props.image} alt="" className="message-img" />
          {props.text ? (
            <div className="message-img__text">{props.text}</div>
          ) : null}
          <div className="time image-time">{props.time}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="message-wrapper" style={side()}>
      <div
        className="message"
        style={messageStyle()}
        onContextMenu={(e) => {
          e.preventDefault();
          // menu.style.left = e.pageX + "px";
          // menu.style.top = e.pageY + "px";
        }}>
        {props.text}
        <div className="time default-time">{props.time}</div>
      </div>
    </div>
  );
};

export default Message;
