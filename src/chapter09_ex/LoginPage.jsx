import React,{useState,useRef} from "react";
import Login from "./Login";







function LoginPage(props) {

    const [ID,setID] = useState('');
    const [PW,setPW] = useState('');
    const inputElID = useRef(null);
    const inputElPW = useRef(null);
    const inputEl = useRef(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const USER_ID = "user";
    const USER_PW = "1234";

    const onClickLogin = () => {
        setIsLoggedIn(true)
    }

    const onClickLogout = () => {
        setID("");
        setPW("");
        setIsLoggedIn(false)
    }

    const submit = (e) => {
        e.preventDefault();
        if (ID === USER_ID && PW === USER_PW){
            setIsLoggedIn(true)
        } else if (ID === USER_ID && PW !== USER_PW) {
            alert("비밀번호를 확인해주세요")
            inputElPW.current.focus();
        } else if (ID !== USER_ID && PW === USER_PW) {
            alert("아이디를 확인해주세요")
            inputElID.current.focus();
        } else {
            alert("아이디와 비밀번호를 확인해주세요")
            inputElPW.current.select();
        }
    
    }

    return (
        <div>
            {
            isLoggedIn 
            ? <>
              <p>{ID}님 반갑습니다!</p> 
              <button onClick={onClickLogout}>로그아웃</button>
              </>
            : <form onSubmit={submit}>
                <p>아이디 : <input type="text" ref={inputElID} value={ID} onChange={(e) => setID(e.target.value)} /></p>
                <p>비밀번호 : <input type="password" ref={inputElPW} value={PW} onChange={(e) => setPW(e.target.value)} /></p>
                <button>로그인</button>
            </form>
            }
        </div>
    );
}

export default LoginPage