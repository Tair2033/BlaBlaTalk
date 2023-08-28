import React from "react";
import "./sidebar.css";
import { useSelector, useDispatch } from "react-redux";
import { changeSidebarItem } from "../../redux/slices/messengerSlice";

const TheSidebar = () => {
  const messenger = useSelector((state) => state.messenger);
  const dispatch = useDispatch();

  const activeStyle = {
    backgroundColor: "#f3fc8b",
  };

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="sidebar-list">
            {messenger.sidebarItems.map((item, id) => {
              return (
                <div
                  className="sidebar-list__item"
                  key={id}
                  onClick={() => dispatch(changeSidebarItem(id))}
                  style={item.status ? activeStyle : null}>
                  <div className="item-icon">
                    <i
                      className={
                        !item.status ? item.icon : item.iconActive
                      }></i>
                  </div>
                  <div className="item-title">{item.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheSidebar;
