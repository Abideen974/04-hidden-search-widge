import React,{useEffect, useRef} from 'react';
import './search.css'

function SearchWidge() {

  const searching = useRef(null)
  const input = useRef(null)
  const btn = useRef(null)
   
   const searchBtn = () =>{
    searching.current.classList.toggle('active')
    // input.focus()
}
   
  return (
    <>
        <div className="search " id='search' ref={searching}>
            <input type="text" className='input' id='input' placeholder='search' ref={input}/>
            <button className='btn' id='btn' ref={btn} onClick={searchBtn}>
                <i className='fas fa-search'></i>
            </button>
        </div>
    </>
  )
}

export default SearchWidge