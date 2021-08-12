import { TiTick } from "react-icons/ti";
import { MdCancel } from "react-icons/md";

export const Modal = ({
  onChangeSetter,
  onChangeValue,
  onClickLinksSetter,
  LinkText,
  onClickModalOperation,
}) => {
  return (
    <div className="modal glassmorphic-modal">
      <div className="modal-input">
        <input
          className="modal-inputbox"
          value={onChangeValue}
          onChange={(e) => onChangeSetter(e.target.value)}
          placeholder="Enter the link"
        ></input>
      </div>
      <div className="modal-btns-group">
        <button
          className={"modal-btns"}
          aria-label="confirm url button"
          onClick={() => onClickLinksSetter(LinkText)}
        >
          <span className="modal-btns-tick">
            <TiTick />
          </span>
        </button>
        <button
          className={"modal-btns"}
          aria-label="cancel url button"
          onClick={() => onClickModalOperation((prev) => !prev)}
        >
          <span className="modal-btns-cancel">
            <MdCancel />
          </span>
        </button>
      </div>
    </div>
  );
};
