import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//!< 리액트에서 인터넷을 사용하기 위한 import
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  //!< React.StrictMode index.js에서 사용하는 태그로 
  //!< 지워도 아무런 에러가 나오지 않지만 개발자 모드에서 나오는 소소한 오류 때문에 사용을 권장한다.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //!< index.html에서 본문을 감싸고 있는 div의 id인 'root'를 받아 DOM 요소를 사용 할 수 있도록 한다.
  document.getElementById('root') 
);

reportWebVitals();

