import React from "react";
import UserInfo from "./UserInfo";


const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flextDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
};



function formatDate(date) {
    const current = new Date(date);
    const hour = current.getHours();
    const minute = current.getMinutes();
    const second = current.getSeconds();

    return <h2>현재 시간: {`${hour}:${minute}:${second}`}</h2>
}




function Comment(props) {

    props = {
        author: {
          name: "홍길동",
          avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        },
        text: "댓글입니다.",
        date: Date.now(),
      }


    return (
        <div className="comment" style={styles.wrapper}>

            <UserInfo user={props.author}/>

            <div className="comment-text" style={styles.commentText}>
                {props.text}
            </div>
            <div className="comment-date" style={styles.commentText}>
                {formatDate(props.date)}
            </div>
        </div>

    );
}

export default Comment;