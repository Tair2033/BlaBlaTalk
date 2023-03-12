import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../redux/slices/messengerSlice";
import "./modal.css";

const ModalApp = (props) => {
  const messenger = useSelector((state) => state.messenger);
  const dispatch = useDispatch();

  return (
    <div
      className="modal-wrapper"
      onClick={(e) => {
        if (
          e.target.className !== "modal" &&
          e.target.className !== "modal-image" &&
          e.target.className !== "close-btn" &&
          e.target.className !== "image"
        ) {
          dispatch(
            toggleModal({
              img: "",
            })
          );
        }
      }}>
      <div
        className="close-btn"
        onClick={() => {
          dispatch(
            toggleModal({
              img: "",
            })
          );
        }}>
        &#10006;
      </div>
      <div className="modal">
        <div className="modal-image">
          <img src={messenger.modalData.img || null} alt="" className="image" />
        </div>
      </div>
    </div>
  );
};

export default ModalApp;
