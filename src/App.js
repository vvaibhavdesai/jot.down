import "./App.css";
import { useEditor, EditorContent } from "@tiptap/react";
import Underline from "@tiptap/extension-underline";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { Navbar } from "./Components/Navbar";
import { AboutCard } from "./Components/WelcomeModal";
import { useState } from "react";
import { TextEditBar } from "./Components/TextEditBar";
function App() {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Link, Image],

    content: `<p>Welcome User</p>
    <img src="https://images.unsplash.com/photo-1595907936728-c3d0aa17115e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"/>
    <img src="https://media.tenor.com/images/3f103f167aa8f11a641e19522dbd3203/tenor.gif"/>`,

    autofocus: "end",
  });
  const [welcomeModal, setWelcomeModal] = useState(true);

  return (
    <>
      <Navbar />
      <div className="App">
        <section>
          {welcomeModal ? (
            <AboutCard setWelcomeModal={setWelcomeModal} />
          ) : (
            <div className="content">
              <TextEditBar editor={editor} />
              <EditorContent editor={editor} />
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default App;
