
import favicon from "../Static/favicon.png";


export const Navbar = ()=>{
    return(
        <nav className="glass-effect-nav">
        <div className="nav-adjust">
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div>
        <p className="nav-Title"><span><img className="logo"src={favicon} alt=""/></span> jot.down</p>
        </div>
        </div>
      </nav>
    )
}