import { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { Modal } from "./Modal";

export const ImageStyles = ({ editor }) => {
  const [modal, setModal] = useState(false);
  const [imgUrl, setImageUrl] = useState("");

  const setLink = (img) => {
    if (img) {
      editor.chain().focus().setImage({ src: img }).run();
    }
    setModal((prev) => !prev);
  };

  return (
    <>
      <button
        className="is-inactive"
        onClick={() => setModal((prev) => !prev)}
        aria-label="Upload Image Button"
      >
        <span className={"center-icons"}>
          <BiImageAdd />
        </span>
      </button>
      {modal && (
        <Modal
          onChangeSetter={setImageUrl}
          onChangeValue={imgUrl}
          onClickLinksSetter={setLink}
          LinkText={imgUrl}
          onClickModalOperation={setModal}
        />
      )}
    </>
  );
};
