import { Link } from "react-router-dom"
import "./topbar.css"

export default function TopBar()
{
    const user = true;
    return (
        <div className="top">
            <div className="topleft">
            <i className="topicon fa-brands fa-square-facebook"></i>
            <i className="topicon fa-brands fa-square-instagram"></i>
            <i className="topicon fa-brands fa-square-twitter"></i>
            <i className="topicon fa-brands fa-linkedin"></i>
            </div>

            <div className="topcenter">
                <ul className="toplist">
                    <li className="toplistitem">
                        <Link className="link" to="/" >HOME</Link>
                    </li>
                    <li className="toplistitem"><Link className="link" to="/about" >ABOUT</Link></li>
                    <li className="toplistitem"><Link className="link" to="/settings" >UPDATE</Link></li>
                    <li className="toplistitem"><Link className="link" to="/write" >WRITE</Link></li>
                    <li className="toplistitem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topright">
                {   user ? (<img className="topimg"
                    src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
                    alt=""
                    />) : (
                        <ul className="toplist">
                            <li className="toplistitem">
                            <Link className="link" to = "/login">
                                LOGIN
                            </Link>
                            </li>
                            <li>
                            <Link className="link" to = "/register">
                                REGISTER
                            </Link>
                            </li>
                        </ul>
                    )
                }
                <i className=" topsearchicon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
