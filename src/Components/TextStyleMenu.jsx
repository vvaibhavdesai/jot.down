import { BiBold, BiStrikethrough, BiItalic, BiUnderline } from "react-icons/bi";

export const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }
  return (
    <>
      <button
        className={`${editor?.isActive("bold") ? "is-active" : "is-inactive"} `}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <span className={`center-icons` }>
          <BiBold />
        </span>
      </button>
      <button
        className={`${editor?.isActive("italic") ? "is-active" : "is-inactive"}`}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <span
          className={`center-icons` }
        >
      <BiItalic />
        </span>
      </button>
      <button
        className={`${editor?.isActive("strike") ? "is-active" : "is-inactive"}`}
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <span
          className={`center-icons`}
        >
          <BiStrikethrough />
        </span>
      </button>
      <button
        className={`${editor?.isActive("underline") ? "is-active" : "is-inactive"} `}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <span
          className={`center-icons`}
        >
          <BiUnderline />
        </span>
      </button>
    </>
  );
};
