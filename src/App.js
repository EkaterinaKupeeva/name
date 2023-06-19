import { Navlink, Route, Routes } from "react-router-dom";
import "./App.css";


const Profile = () => {
  return <h1>Страница профиля</h1>
}

function App() {
  return (
    <div className="container">
      <div className="col-5">
        <div
          className="nav flex-column nav-pills">
          <Navlink
            className="nav-link"
            href="profile"
          >
            Профиль
          </Navlink>
          <Navlink
            className="nav-link"
            href="massages"
          >
            Сообщения
          </Navlink>
          <Navlink
            className="nav-link"
            href="settings"
          >
            Настройки
          </Navlink>
          <Navlink
            className="nav-link"
            href="friends"
          >
            Мои друзья
          </Navlink>
        </div>
      </div>
      <div className="col-9">
        <Routes>
          <Browser></Browser>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </div>
    </div>

  );
}

export default App;
