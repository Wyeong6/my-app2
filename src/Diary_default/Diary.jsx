import "./Diary.css";
import { useState } from "react";
import DiaryList from "./DiaryList";
import DiaryEditor from "./DiaryEditor";

function Diary() {
    const [data, setData] = useState([
        {
            id: 1,
            author: "hyun",
            content: "첫번째",
            emotion: 1,
            created_date: new Date().getTime()
        },
        {
            id: 2,
            author: "jeong",
            content: "두번째",
            emotion: 2,
            created_date: new Date().getTime()
        },
        {
            id: 3,
            author: "react",
            content: "3번째",
            emotion: 3,
            created_date: new Date().getTime()
        }
    ]);

    return (
        <div className="App">
            <DiaryEditor setData={setData} />
            <DiaryList diaryList={data} setData={setData} />
        </div>
    );    
}

export default Diary;