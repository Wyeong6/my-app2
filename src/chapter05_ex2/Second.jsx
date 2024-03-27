import React from "react";
import "./first.css"
import Header from "./Header";
import TimeArea from "./TimeArea";
import Footer from "./Footer";


function Second() {
    return (
        <div>
            <Header />
            <TimeArea />
            <ul>
                <Pet name="라이언" species="cat" age="5"/>
                <Pet name="토끼" species="dog" age="3"/>
                <Pet name="고양이" species="cat" age="1"/>
            </ul>
            <Footer school="부산IT교육센터" />
        </div>
    );
}

function Pet(props) {
    return (
        <li>{props.name}은(는) {props.species}이고 {props.age}살이다. </li>
    );
}


export default Second;