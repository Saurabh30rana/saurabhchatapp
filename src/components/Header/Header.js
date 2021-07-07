import React from 'react';

const Header=()=>{
    return(
        <>
           <header
        className="container-fluid"
        style={{
          backgroundColor: "#2979FF",
          height: "55px",
          color: "white",
          textAlign: "center",
          fontFamily: "'Caveat', cursive",
          paddingTop:'0',
          marginTop:'0'
        }}
      >
        <h1>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h1>
      </header>
        </>
    );
}

export default Header;