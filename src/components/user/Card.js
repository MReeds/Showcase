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
          <li> Future linked in data</li>
          <li> Future github data</li>
          <li>Future resume data</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
