import DiaryItem from "./DiaryItem";

function DiaryList(props) {

    

    const diaryList = props.diaryList;
    const setData = props.setData;

    return (
        <div className="DiaryList">
            <h2>일기리스트</h2>
            <h4>{diaryList.length}개의 일기가 있습니다.</h4>
            <div>
                {
                    diaryList.map(diary => (
                        <DiaryItem key={diary.id} diary={diary} setData={setData}/>
                    ))
                }
                
            </div>
        </div>
    );
}

export default DiaryList;