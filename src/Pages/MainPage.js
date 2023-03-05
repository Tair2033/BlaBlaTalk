import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../redux/slices/messengerSlice";

const MainPage = () => {
  const name = useSelector((state) => state.messenger.user.name);
  const dispatch = useDispatch();

  return (
    <div className="main">
      <div className="block">{name}</div>
      <button onClick={() => dispatch(changeName("Tair"))}>change name</button>
    </div>
  );
};

export default MainPage;
