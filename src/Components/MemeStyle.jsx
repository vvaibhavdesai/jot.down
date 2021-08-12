import axios from "axios";
import { useState } from "react";
import { AiOutlineFileGif } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
export const MemeStyles = ({ editor }) => {
  const tenor_key = `8F4J92YQQYC5`;

  const [memelist, setMemeList] = useState([]);
  const [memeModal, setMemeModal] = useState(false);
  const [helper, setHelper] = useState("");
  console.log(memeModal)

  const getMemesFromServer = async (query) => {
    try {
      const {
        data: { results },
      } = await axios.get(
        `https://g.tenor.com/v1/search?q=${query}&key=${tenor_key}&limit=30`
      );
      setMemeList(results);
      setMemeModal(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getKeyword = async () => {
    setMemeList([]);
    try {
      let match = "";
      let editorContent = editor?.getHTML();

      // this will help remove the {{xyz_meme}} content
      
      editorContent = editorContent.replace(
        /\{\{(.+?)_meme\}\}/,
        (_, keyword) => {
          match = keyword;
          return "";
        }
      );

      // setting editorContent for updating it later

      setHelper(editorContent);

      // waiting for the data to be fetched
      
      await getMemesFromServer(match);
    } catch (error) {
      Window.alert("no meme found");
      console.log(error.message);
    }
  };

  const embedGif = async (gif) => {
    
    // using the editorContent from helper state to updating in DOM

    let content = helper;
    if (gif) {
      content += `<img height:"5rem" src="${gif}" />`;

      // sets content back to editor
      
      editor.commands.setContent(content);
      setMemeModal(false);
    }
  };

  const  hideModal=()=>{
    setMemeModal((prev) => !prev);
    setMemeList([]);
  }

  return (
    <>
      {memeModal && memelist.length > 0 && (
        <div className="meme-modal glassmorphic-modal">
          <div className="meme-images">
          {memelist.map((meme) => (
            <img
              className="meme-img"
              key={meme.id}
              onClick={() => embedGif(meme.media[0].gif?.url)}
              src={meme.media[0].gif?.url}
              alt=""
            />
          ))}
          </div>
          <button
            className="modal-btns "
            aria-label="close meme options"
            onClick={() => hideModal()}
          >
            <span className="modal-btns-cancel">
              <MdCancel />
            </span>
          </button>
        </div>
      )}
      <button
        className="is-inactive"
        aria-label="Add meme"
        onClick={() => getKeyword()}
      >
        <span className="center-icons">
          <AiOutlineFileGif />
        </span>
      </button>
    </>
  );
};
