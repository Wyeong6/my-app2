import { useState } from "react";

function SignUp() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("male");
    const [text, setText] = useState("남자")
    

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const genderChange = (e) => {
        setGender(e.target.value);
        const selectedIndex = e.target.selectedIndex;
        setText(e.target.options[selectedIndex].textContent)
    }

    const handleSubmit = (e) => {
        alert(`이름 : ${name} / 성별 : ${text}`);
        e.preventDefault();
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름 :
                <input type="text" value={name} onChange={handleChange}/>
                성별 :
                <select value={gender} onChange={genderChange}>
                    <option value="male">남자</option>
                    <option value="female">여자</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    )

}

export default SignUp;