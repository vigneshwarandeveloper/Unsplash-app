import React from 'react'
import { useGlobalContext } from '../Context/context';
import { FaSearch } from 'react-icons/fa';


export const SearchForm = () => {

  const {setsearch}=useGlobalContext();

const handlesubmit=(e)=>{
  e.preventDefault();
  const ename=e.target.elements.search.value;
  setsearch(ename);
}

  return (
    <section>
    <h2 className="title">Unsplash Images</h2>
      <form className="search-form" onSubmit={handlesubmit}>
      <input 
        type="text"
        name="search"
        placeholder="Motivation"
        className="search-input search"
      />
      <button className="btn"> <FaSearch /> Search</button>
      </form>
    </section>
  )
}
