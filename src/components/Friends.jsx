import { NavLink } from "react-router-dom";
import backgrImg from ".././assets/img/ger.jpg"

const TableRow = (props) => {
return (
  <tr>
  <th scope="row">{props.index + 1}</th>
  <td>
    <NavLink to={"/profile/" + props.id}>{props.lastname} {props.name}</NavLink> 
  </td>
</tr>
);
};

export const Friends = (props) => {
  let users = props.function ();
  let usersCount = Object.keys(users).length;
  let userRow = [];
  for (let i = 0; i < usersCount; i++) {
    userRow.push(<TableRow id={users[i].id} key={i} index={i} name={users[i].name} lastname={users[i].lastname} />);
  }
    return (
      <div className="row">
        <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Фамилия и имя</th>
          </tr>
        </thead>
        <tbody>
        {userRow}
        </tbody>
        </table>
        <div className="row mt-5">
          <div className="col-xl-6 p-5 text-white" style={{backgroundImage: `url(${backgrImg})`}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto ipsam recusandae dolor illo eligendi molestiae ipsum porro minima harum in quis quisquam quos eveniet nemo ipsa, unde, perferendis sunt tenetur?</div>
          <div className="col-xl-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero dolor nam, doloremque fugiat consequuntur rem aspernatur voluptate id alias fuga, distinctio quisquam, error dolorum minus accusamus? Accusantium odio dolorum saepe?</div>
        </div>
      </div>
    );
  };