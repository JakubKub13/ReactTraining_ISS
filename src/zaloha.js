import { useState, useEffect } from 'react';


const App = () => {
  
  const [value, setValue] = useState(0)
  const [test, setTest] = useState(0)

  useEffect( () => {
    const button = document.querySelector('.btn')
    if (value >= 1) {
      button.textContent = `Click number ${value}`
    } else {
      button.textContent = `Click here`
    }
    console.log("I am useEffect 1 - click")
  }, [value])


  useEffect( () => {
    document.title = `New title ${test}`
    console.log("I am useEffect 2 - title")
  }, [test])

  return (
    <div>
      <h1>React Training</h1>
      <p>{value}</p>
      {console.log("I am render")}
      <button className="btn" onClick={ () => setValue(value + 1)}>Click here</button>

      <button className="btn-test" onClick={ () => setTest(test + 1)}>Title</button>
    </div>
  )
}

export default App