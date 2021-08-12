import { ImCancelCircle } from "react-icons/im";
import { IoIosArrowDropright } from "react-icons//io";
import { BiLink, BiUnlink, BiImageAdd } from "react-icons/bi";
import { AiOutlineFileGif } from "react-icons/ai";
import { BiBold, BiStrikethrough, BiItalic, BiUnderline } from "react-icons/bi";

export const AboutCard = ({ setWelcomeModal }) => {
  return (
    <div className="welcome-modal">
      <div className="welcome-modal-content">
        <button className="close-btn" onClick={() => setWelcomeModal(false)}>
          <span>
            <ImCancelCircle />
          </span>
        </button>
        <h1 className="text-center font-weight-medium margin-top-0">
          Welcome to <span className="primary-color">jot.down</span>
        </h1>
        <h3 className="margin-bottom-0">Instructions</h3>
        <ul className="list-style-none">
          <li>
            <IoIosArrowDropright />
            <span>
              To add/remove <b>bold</b> style, click on{" "}
              <button className="is-inactive" disabled>
                <span className="center-icons">
                  <BiBold />
                </span>
              </button>
            </span>
          </li>
          <li>
            <IoIosArrowDropright />
            <span>
              To add/remove <b>italic</b> style, click on{" "}
              <button className="is-inactive" disabled>
                <span className="center-icons">
                  <BiItalic />
                </span>
              </button>
            </span>
          </li>
          <li>
            <IoIosArrowDropright />
            <span>
              To add/remove <b>underline</b> style, click on{" "}
              <button className="is-inactive" disabled>
                <span className="center-icons">
                  <BiUnderline />
                </span>
              </button>
            </span>
          </li>
          <li>
            <IoIosArrowDropright />
            <span>
              To add/remove <b>strike</b> style, click on{" "}
              <button className="is-inactive" disabled>
                <span className="center-icons">
                  <BiStrikethrough />
                </span>
              </button>
            </span>
          </li>
          <li>
            <IoIosArrowDropright />
            <span>
              To add <b>link</b> to the text, select text and click on{" "}
              <button className="is-inactive" disabled>
                <span className="center-icons">
                  <BiLink />
                </span>
              </button>
            </span>
          </li>

          <li>
            <IoIosArrowDropright />
            <span>
              To remove <b>link</b> from the text, select text and click on{" "}
              <button className="is-inactive" disabled>
                <span className="center-icons">
                  <BiUnlink />
                </span>
              </button>
            </span>
          </li>

          <li>
            <IoIosArrowDropright />
            <span>
              To add <b>image</b>, click on{" "}
              <button className="is-inactive" disabled>
                <span className="center-icons">
                  <BiImageAdd />
                </span>
              </button>{" "}
              and enter the image url
            </span>
          </li>

          <li>
            <IoIosArrowDropright />
            <span>
              To add <b>meme</b>, type e.g. {`{{cat_meme}}`} and click on{" "}
              <button className="is-inactive" disabled>
                <span className="center-icons">
                  <AiOutlineFileGif />
                </span>
              </button>{" "}
              select gif from list of options{" "}
            </span>
          </li>

          <li className="margin-top-2">
            <IoIosArrowDropright />
            <span>
              To remove <b>image &/OR gif</b>, click on image &/OR gif and press{" "}
              <b>backspace/delete</b> button from keyboard.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
