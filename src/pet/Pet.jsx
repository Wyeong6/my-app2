import React from "react";

function Pets(props) {



  return (
    <div>
      <li>
        {props.name}은 {props.species}이고 {props.age}살 이다.
        <button >삭제</button>
      </li>
    </div>
  );
}

export default Pets;