import { useState } from "react";
import useCounter from "./useCounter";

function LikeFeature2() {
    const [likeCount, increaseLike,decreaseLike] = useCounter(0);

    return (
        <div>
            <button onClick={increaseLike}>추천하기</button>
            <button onClick={decreaseLike}>비추하기</button>
            <h2>이 페이지를 {likeCount}번 추천하였습니다.</h2>
        </div>
    );



}

export default LikeFeature2