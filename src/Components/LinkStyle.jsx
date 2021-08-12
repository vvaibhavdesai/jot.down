import { useState } from "react";
import { BiLink, BiUnlink } from "react-icons/bi";
import { Modal } from "./Modal";

export const StyleLinks = ({ editor }) => {
  const [modal, setModal] = useState(false);
  const [linkText, setLinkText] = useState("");
  const setLink = (url) => {
    if (url) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    }
    setModal((prev) => !prev);
  };

  return (
    <>
      <button
        className={`${editor?.isActive("link") ? "is-active" : "is-inactive"}`}
        aria-label=" Add link button"
        onClick={() => setModal((prev) => !prev)}
      >
        <span className={`center-icons`}>
          <BiLink />
        </span>
      </button>
      {editor?.isActive("link") && (
        <button
          aria-label="Remove Link button"
          onClick={() => editor.chain().focus().unsetLink().run()}
          
          className={`${
            editor.isActive("link") ? "is-active" : "is-inactive"
          }`}
        >
          <span
          className="center-icons"
          >
            <BiUnlink />
          </span>
        </button>
      )}

      {modal && (
        <Modal
          onChangeSetter={setLinkText}
          onChangeValue={linkText}
          onClickLinksSetter={setLink}
          LinkText={linkText}
          onClickModalOperation={setModal}
        />
      )}
    </>
  );
};
