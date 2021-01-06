import React from "react";

const UserCard = (props) => {
    return (
        <div>
            <picture>{/* <img src={require('')}/> */}</picture>
            <h3>Name </h3>
            {/* Hyper Link to your user specified account */}
            
            <picture>{/* app photo slide show */}</picture>
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

export default UserCard;
