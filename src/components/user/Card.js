import React from "react";

const Card = (props) => {
    
  const user = props.user;

  return (
    <div>
      <h3>
        {user.firstName} {user.lastName}
      </h3>
      <div>
        <ul>
          <li>{user.phone}</li>
          <li>
          {user.bio != null ? user.bio : null}
          </li>
          <li>{user.language}</li>
          <li>
          {user.linkedIn != null ? user.linkedIn : null}
          </li>
          <li>
          {user.github != null ? user.github : null}
          </li>
          <li>
          {user.portfolio != null ? user.portfolio : null}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;