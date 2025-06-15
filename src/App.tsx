import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootswatch/dist/slate/bootstrap.min.css'
import { SLIDES_DATA } from './constants.ts'
function App() {
  const [count, setCount] = useState(0)
  const handleReset = () => {
    console.log('reset: !!!', count)
    if (count > 0) {
      setCount(0)
    }
  }
  const handlePrev = () => {
    console.log('<< prev: ', count)
    if (count > 0) {
      setCount(count - 1)
    }
  }
  const handleNext = () => {
    console.log('next: >>', count)
    if (count < SLIDES_DATA.length - 1) { 
      setCount(count + 1)
    }
  }
  return (
    <>
      <div>
        <h2>
          <a className="text-decoration-none text-info"
            href="https://react-hackerrank-slideshow.vercel.app/"
            target="_blank"
          >
            <img src={reactLogo} className="logo react mx-2" alt="React logo" />
            <span>SlideShowApp</span>
          </a>
        </h2>
        <small>
          <a key="code-repo" href="https://github.com/attila5287/react-hackerrank-slideshow" target="_blank" className="text-decoration-none text-info">
            click here to see the code
          </a>
            (README for the requirements)
          <a key="gh-link" href="https://github.com/attila5287" target="_blank">
            <i className="fa-brands fa-github mx-2"></i>
            By <span>attila5287</span>
          </a>
        </small>
      </div>
      <div className="btn-group mt-2" role="group" aria-label="Basic example">
        <button className="btn btn-success" key="reset" onClick={handleReset}>
          <i className="fa-solid fa-sync"></i>
        </button>
        <button className="btn btn-dark" key="prev" onClick={handlePrev}>
          prev
        </button>
        <button className="btn btn-dark" key="next" onClick={handleNext}>
          next
        </button>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{SLIDES_DATA[count].title}</h5>
          <p className="card-text">{SLIDES_DATA[count].text}</p>
          <img src={"/images/"+count+".jpg" } className="img-thumbnail" alt="React logo" />
        </div>
      </div>
      <p className="text-center mt-2">
        <code>Current slide: {count} </code> 
      </p>
    </>
  );
}

export default App
