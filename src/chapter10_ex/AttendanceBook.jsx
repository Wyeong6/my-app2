const students = [
    {
        id : 1,
        name : "Tom",
    },
    {
        id : 2,
        name : "Steve",
    },
    {
        id : 3,
        name : "Bill",
    },
    {
        id : 4,
        name : "Jeff",
    },
];

function AttendanceBook(props){
    return(
        <ul>
            {
                students.map((students) => {
                    // id를 키값으로 사용
                    // return  <li key={students.id}>{students.name}</li>
                    // 포맷팅 된 문자열을 키값으로 사용 (id응용)
                    return  <li key={`student-id-${students.id}`}>{students.name}</li>
                })
            }
        </ul>
    )
}

export default AttendanceBook;