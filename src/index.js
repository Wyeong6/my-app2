import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './chapter03/Library';
import Hello from "./chapter03/Hello"
import Hello2 from "./chapter03/Hello2"
import ConfirmDialog from "./chapter04/Test1"
import Clock from "./chapter04/Clock";
import CommentList from './chapter05/CommentList';
import Comment from './chapter05_ex/Comment';
import First from './chapter05_ex2/First';
import Second from './chapter05_ex2/Second';
import Notification from './chapter06/NotificationList';
// import Counter from './chapter07/Counter';
import Counter2 from './chapter07/Counter2';
import Accommodate from './chapter07_ex/Accommodate';
import LikeFeature from './chapter07_ex/Recommend1';
import LikeFeature2 from './chapter07_ex/Recommend2';
import Gugudan from './blog/gugudan';
import Gugufunction from './blog/gugufunction';
import WordRelay from './blog/wordRelay';
import ConfirmButton from './chapter08/ConfirmButton';
import MailBox from './chapter09/Mailbox';
import CounterIf from './chapter09/Mailbox';
import LoginControl from './chapter09/LoginControl';
import MainPage from './chapter09/MainPage';
import LandingPage from './chapter09_ex/LandingPage';
import LoginPage from './chapter09_ex/LoginPage';



const root = ReactDOM.createRoot(document.getElementById('root'));


const user = {
  id: "user",
  pw: "1234"
}

root.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
