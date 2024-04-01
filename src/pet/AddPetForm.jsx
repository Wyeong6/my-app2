import { useEffect, useState } from "react";
import Pet from "./Pet";

function AddPetForm({props}) {

        const [name, setName] = useState("");
        const [species, setSpecies] = useState("");
        const [age, setAge] = useState("");
        const [pets, setPets] = useState([]);
        const [id,setId] = useState("");


             // 처음 한번만 실행됨
            useEffect(() => {
                if (localStorage.getItem("PetData")){
                    setPets(JSON.parse(localStorage.getItem("PetData")));
                }
            },[]);
            // pets가 수정될때마다 실행됨
            useEffect(() => {
                localStorage.setItem("PetData", JSON.stringify(pets));
            },[pets]);



    function handleSubmit(e) {
        e.preventDefault();
        setPets(prevPets => [...prevPets, { name: name, species: species, age: age, id : id }]);
        setName("");
        setSpecies("");
        setAge("");
        setId(Date.now())
    }



    function handleName(e) {
        setName(e.target.value)
      }
    
    function handleSpecies(e) {
        setSpecies(e.target.value)
      }
    
    function handleAge(e) {
        setAge(e.target.value)
      }

    function handleDelete(id) {
        setPets(prevPets => prevPets.filter(pet => pet.id !== id));
    }




    return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>새 PET 을 추가하기</legend>
          <input type="text" placeholder="이름" value={name} onChange={handleName}/>
          <input type="text" placeholder="종류" value={species} onChange={handleSpecies} />
          <input type="text" placeholder="나이" value={age} onChange={handleAge} />
          <button type="submit">펫 추가</button>
        </fieldset>
      </form>
      <ul>
        {
            pets.map((pet) => (
                <li key={pet.id}>
                    {pet.name}은(는) {pet.species}이고 {pet.age}살 이다.
                    <button onClick={() => handleDelete(pet.id)}>삭제</button>
                </li>
            ))
        }
      </ul>
      </>
    );
  }

  export default AddPetForm;