import "./sidebar.css"

export default function Sidebar() {
  return (
        <div className="sidebar">
            <div className="sidebaritem">
                <span className="sidebartitle">ABOUT ME</span>
                <img src="https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=393&q=80" alt="" />
                <p>Hello! I'm Yash and I'm photographer</p>
            </div>
            <div className="sidebaritem">
                <span className="sidebartitle">CATEGORIES</span>
                <ul className="sidebarlist">
                    <li className="sidebarlistitem">Life</li>
                    <li className="sidebarlistitem">Music</li>
                    <li className="sidebarlistitem">Art</li>
                    <li className="sidebarlistitem">Sports</li>
                    <li className="sidebarlistitem">Technologies</li>
                    <li className="sidebarlistitem">Travel</li>
                </ul>
            </div>
            <div className="sidebaritem">
                <span className="sidebartitle">FOLLOW US</span>
                <div className="sidebarsocial">
                <i className="sidebaricon fa-brands fa-square-facebook"></i>
                <i className="sidebaricon fa-brands fa-square-instagram"></i>
                <i className="sidebaricon fa-brands fa-square-twitter"></i>
                <i className="sidebaricon fa-brands fa-linkedin"></i>
                </div>
            </div>
        </div>
    )
}