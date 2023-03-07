import React from "react";

const Message = (props) => {
  return (
    <div className="message-wrapper">
      <div className="message">{props.text}</div>
    </div>
  );
};

export default Message;
