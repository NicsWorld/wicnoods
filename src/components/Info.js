import React from 'react';
import final from './final.jpg';
import github2 from './github2.png';
function Info() {
  return(
    <div className="App-header">
    <img className="info-picture" src={final} alt="oops :/"/>
    <p>Hi. I like to make things.</p>
      <div className="info-box">
        <p className="info-nw">NW</p>
        <p className="info-name">Nic Woods</p>
      </div>
      <a target="_blank" href="https://github.com/NicsWorld"><img src={github2} alt="oops :/"/></a>
    </div>
  );
}
export default Info;
