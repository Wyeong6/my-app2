import { useState } from "react";


function DiaryEditor(props) {


    
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formattedDateTime = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;

    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [emotion, setEmotion] = useState("");

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    }
    const handleContentChange = (e) => {
        setContent(e.target.value);
    }
    const handleEmotionChange = (e) => {
        setEmotion(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newDiary = {
            id : new Date().getTime(),
            author : author,
            content : content,
            emotion : emotion,
            created_date : formattedDateTime    
        };
        props.setData(prevData => [...prevData, newDiary]);
        setAuthor("");
        setContent("");
        setEmotion("1"); 
    };



    return (
        <div>
            <h3>오늘의 일기</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="작성자" value={author} onChange={handleAuthorChange} />
                <br />
                <textarea placeholder="내용" value={content} onChange={handleContentChange} />
                <br />
                <select value={emotion} onChange={handleEmotionChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
                <button type="submit">저장하기</button>
            </form>
        </div>
    );
} 

export default DiaryEditor;