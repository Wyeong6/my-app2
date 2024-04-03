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
import NumberList from './chapter10/NumberList';
import AttendanceBook from './chapter10_ex/AttendanceBook';
import FruitSelect from './chapter11/FruitSelect';
import Reservation from './chapter11/Reservation';
// import SignUp from './chapter11_ex/SignUp';
import Pet from './pet/AddPetForm';
import AddPetForm from './pet/AddPetForm';
import Diary from './Diary_default/Diary';
import Calculator from './chapter12/Calculator';
import ProfileCard from './chapter13/PrifileCard';
import DarkOrLight from './chapter14/DarkOrLight';
import SignUp from './chapter14_ex/SignUp';
import LoginPage3 from './chapter14_ex/LoginPage3';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <LoginPage3 />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
