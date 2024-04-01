import { useState } from "react";

function Reservation(){
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    const [numberOfGuest, setNumberOfGuest] = useState(2);

    const handleSubmit = (e) => {
        alert(`아침식사 여부: ${haveBreakfast ? "먹었음" : "안먹었음"}, 방문객 수: ${numberOfGuest}`);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                아침식사 여부:
                <input type="checkbox" checked={haveBreakfast}
                    onChange={ (e) => {
                        setHaveBreakfast(e.target.checked);
                    }} />
            </label>
            <label>
                방문객 수:
                <input type="number" value={numberOfGuest}
                    onChange={ (e) => {
                        setNumberOfGuest(e.target.value);
                    }} />
            </label>
            <button type="submit">제출</button>
        </form>
    )






}

export default Reservation