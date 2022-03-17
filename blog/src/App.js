import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '강남 고기 맛집'
  // function 함수(){
  //   return 100;
  // }

  return (
    <div className="App">
      <div className="black-nav">
      <div className='font'>뙈지몬의 개발 Blog</div>
      </div>
      {/* <img src={logo} alt="귀여운 내사진" /> */}
      <h4>{ posts }</h4>
    </div>
  );
}

export default App;
