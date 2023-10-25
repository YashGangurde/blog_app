import Sidebar from "../../components/sidebar/sidebar"
import "./settings.css"


export default function Settings() {
  return (
    <div className="settings">
        <div className="settingwrapper">
          <div className="settingstitle">
              <span className="settingsupdatetitle">Update Your Account</span>
              <span className="settingsdeletetitle">Delete Account</span>
          </div>
          <form action="" className="settingsform">
              <label >Profile Picture</label>
              <div className="settingpp">
                <img src="https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=393&q=80" alt="" />
                <label htmlFor="fileinput">
                <i className="settingppicon fa-sharp fa-solid fa-user"></i>
                </label>
                <input type="file" id="fileinput" style={{display:"none"}}/>
              </div>
              <label >Username</label>
              <input type="text" placeholder="AK"/>
              <label >Email</label>
              <input type="email" placeholder="ak@gmail.com"/>
              <label >Password</label>
              <input type="password" />
              <button className="settingssubmit">Update</button>
          </form>
        </div>
        <Sidebar/>
    </div>
  )
}