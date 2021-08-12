
import { MenuBar } from "./TextStyleMenu";
import { StyleLinks } from "./LinkStyle";
import { ImageStyles } from "./ImageStyle";
import { MemeStyles } from "./MemeStyle";

export const TextEditBar=({editor})=>{
    return(
        <div className="menubar">
              <div className="menubar-content">
                <MenuBar editor={editor} />
                <StyleLinks editor={editor} />
                <ImageStyles editor={editor} />
                <MemeStyles editor={editor} />
              </div>
              <div>&nbsp;</div>
            </div>
    )
}