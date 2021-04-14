import React from 'react';
import './PhotoCard.css'

export const PhotoCard = (route) => {
    return  <div>
          <h3>{route.tit}</h3>
          <img src={route.img} />  
          <h1 style={{color: 'green'  }}>{route.name}</h1>  
    </div>
}

// const style = {
    // pic: {
        // width: "200px",
        // height: "100px",
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        // margin: "10px",
        // border: "1px solid",
        // cursor: "pointer",
        // 
    // }
    // 
// }