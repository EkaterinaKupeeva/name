//import styles from "./Profile.module.css";

export const Profile = () => {
    return (
        <div className="row">
            <div className="col-md-4">
                <img src="https://belkacheli.com/upload/iblock/11a/11a288de470af81156eb388895b3d60c.jpg" alt="" 
                width="100%"/>
            </div>
            <div className="col-md-8">
                <h2 className="{styles.id}">ID: <span>2</span></h2>
                <h2 className="{styles.name}">Фамилия и имя: <span>Марина Рябинова</span></h2>
                <h2>E-mail: <span>mary@ry.ru</span></h2>
                <p>Небольшой текст о себе</p>
            </div>
        </div>
    );
  };