import styles from './Profile.module.css';


export const Profile = (props) => {
    let userId = location.pathname.split('/')[2];
    let user = props.function (userId); 
    console.log(user);
    return (
        <div className="row">
            <div className="col-md-4">
                <img src={user.avatar} alt="" 
                width="100%"/>
            </div>
            <div className="col-md-8">
                <h2 className={styles.id}>ID: <span>{user.id}</span></h2>
                <h2 className={styles.name}>Фамилия и имя: <span>{user.name} {user.lastname}</span></h2>
                <h2 className={styles.email}>E-mail: <span>{user.email}</span></h2>
                <p className={styles.p} style={{fontWeight: 600}}>{user.about}</p>
            </div>
        </div>
    );
  };