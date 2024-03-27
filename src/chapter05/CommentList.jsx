import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "홍길동",
        comment: "안녕하세요??",
    },
    {
        name: "반가워",
        comment: "안녕",
    },
    {
        name: "손흥민",
        comment: "안녕하세요??",
    },
];



function CommentList(props){
    return(
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;