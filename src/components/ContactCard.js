import React from "react";
import user from '../images/user.png'

const ContactCard = (props) => {
  let {id, name, email} = props.contact
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <div> <i
        onClick={() => props.clickHandler(id)} 
        className="trash alternate outline icon"
        style={{color: "red", marginTop: "7" }}
      ></i></div>
     
    </div>
  ) 
}

export default ContactCard;