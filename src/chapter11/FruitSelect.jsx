import { useState } from "react";

function FruitSelect() {
    const [value,setValue] = useState('grape');
    const [text, setText] = useState("포도");

    const handleChange = (e) => {
        setValue(e.target.value);
        // 현재 선택된 index값
        const selectedIndex = e.target.selectedIndex;
        // 현재 선택된 index의 text
        setText(e.target.options[selectedIndex].textContent)
    }
    
    const handleSubmit = (e) => {
        alert("선택한 과일: " + text);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                과일을 선택하세요:
                <select value={value} onChange={handleChange}>
                    <option value="apple">사과</option>
                    <option value="banana">바나나</option>
                    <option value="grape">포도</option>
                    <option value="watermelon">수박</option>
                </select>
                <button type="submit">제출</button>
            </label>
        </form>
    )
}

export default FruitSelect;