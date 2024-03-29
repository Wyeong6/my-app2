import React,{useState,useRef} from 'react'






const Gugufunction = () => {

  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);

  const inputEl = useRef(null);

  const submit = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setResult("딩동댕!");
      setValue('');
      setScore((prev) => prev + 1);
    } else {
      setValue('');
      setResult("땡!");
      setScore((prev) => prev - 1);
    }
    inputEl.current.focus();
  };

  return (
    <>
        <div>{first} 곱하기 {second} 는?</div>
          <form onSubmit={submit}>
          <input type="number" ref={inputEl} value={value} onChange={(e) => setValue(e.target.value)} />
              <button >입력!</button>
          </form>
        <div>{result} 점수: {score}</div>
    </>
  )
}

export default Gugufunction