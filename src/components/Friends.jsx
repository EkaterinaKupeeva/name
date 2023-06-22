import { NavLink } from "react-router-dom";
import backgrImg from ".././assets/img/ger.jpg"
import React from "react";

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


export class Friends extends React.Component {
constructor(props){
  super(props);
  this.state = { userRow: [] };
}

  componentDidMount(){
    this.props.function().then((users) => {
      
      let userRow = [];
      for (let i = 0; i < users.length; i++) {
        userRow.push(
        <TableRow 
        id={users[i].id} 
        key={i} 
        index={i} 
        name={users[i].name} 
        lastname={users[i].lastname} 
        />
        );
      }
      this.setState({userRow: userRow});
    });
  }
  render() {
    return (
      <>
      <div className="row">
        <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Фамилия и имя</th>
          </tr>
        </thead>
        <tbody>
        {this.state.userRow}
        </tbody>
        </table>
        <div className="row mt-5">
          <div className="col-xl-6 p-5 text-white" style={{backgroundImage: `url(${backgrImg})`}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto ipsam recusandae dolor illo eligendi molestiae ipsum porro minima harum in quis quisquam quos eveniet nemo ipsa, unde, perferendis sunt tenetur?</div>
          <div className="col-xl-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero dolor nam, doloremque fugiat consequuntur rem aspernatur voluptate id alias fuga, distinctio quisquam, error dolorum minus accusamus? Accusantium odio dolorum saepe?</div>
        </div>
      </div>
      </>
    );
  }
}

