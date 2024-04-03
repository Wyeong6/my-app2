import LoginContext from "./LoginContext"
import { useContext } from "react"


function Logout() {

    const {onClickLogout,userId} = useContext(LoginContext);


    return (
        <>
        <div style={{ padding: 16 }}>{userId}님 어서오세요!!</div>
        <div><button onClick={onClickLogout}>로그아웃</button></div>
        </>
    );
}

export default Logout;