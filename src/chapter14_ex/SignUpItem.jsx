import { useState } from "react";
import SignUpContext from "./SignUpContext";
import { useContext } from "react";


function SignUpItem() {

    const {name,gender,result,handleChange,genderChange,handleSubmit} = useContext(SignUpContext);

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름 :
                <input type="text" value={name} onChange={handleChange}/>
            </label>
            <br></br>
            <label>
                성별 :
                <select value={gender} onChange={genderChange}>
                    <option value="male">남자</option>
                    <option value="female">여자</option>
                </select>
            </label>
            <button type="submit">제출</button>
            <p>{result}</p>
        </form>
    );
}

export default SignUpItem;