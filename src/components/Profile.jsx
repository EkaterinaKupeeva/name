import styles from './Profile.module.css';

export const Profile = (props) => {
    let user = props.function (); 
    console.log(user);
    return (
        <div className="row">
            <div className="col-md-4">
                <img src="https://belkacheli.com/upload/iblock/11a/11a288de470af81156eb388895b3d60c.jpg" alt="" 
                width="100%"/>
            </div>
            <div className="col-md-8">
                <h2 className="{styles.id}">ID: <span>{user.id}</span></h2>
                <h2 className="{styles.name}">Фамилия и имя: <span>{user.name} {user.lastname}</span></h2>
                <h2>E-mail: <span>{user.email}</span></h2>
                <p>{user.about}</p>
            </div>
        </div>
    );
  };