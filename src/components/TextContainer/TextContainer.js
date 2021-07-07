import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users ,user}) => (
  <div className="textContainer">
    <div>
      {/* <h1><strong> Welcome , {user}</strong></h1> */}
      
      
      

    </div>
    {
      users
        ? (
          <div style={{ color: "white",position: 'absolute',top: '180px', left: '990px',fontSize:'15px'}}>
            <h1>People Currently Online:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;