import { useState } from "react";
import SignUpItem from "./SignUpItem";
import SignUpContext from "./SignUpContext";
function SignUp() {
    
    const [name, setName] = useState("");
    const [gender, setGender] = useState("male");
    const [result, setResult] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const genderChange = (e) => {
        setGender(e.target.value);
    }

    const handleSubmit = (e) => {
        alert(`이름 : ${name} / 성별 : ${gender}`);
        e.preventDefault();
        setResult(`이름 : ${name} / 성별 : ${gender}`);  
    }

    return (
        <SignUpContext.Provider value={{name,gender,result,handleChange,genderChange,handleSubmit}}>
            <SignUpItem />
        </SignUpContext.Provider>
    );

}

export default SignUp;