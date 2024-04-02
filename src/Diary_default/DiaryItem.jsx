function DiaryItem(props) {

    const setData = props.setData;
    
    const handleDelete = (id) => {
        setData(prevData => prevData.filter(diary => diary.id !== id));
    }


    return (
        <div className="DiaryItem">
            <div className="info">
                <span>
                    작 성 자 : {props.diary.author}  | 감 정 점 수 : {props.diary.emotion}
                </span>
                <br />
                <span className="date">
                    시 간(ms) : {props.diary.created_date}
                </span>
                <div className="content">
                    내 용 : {props.diary.content}
                </div>
                <button onClick={() => handleDelete(props.diary.id)}>삭제</button>
            </div>
        </div>
    );
};

export default DiaryItem;