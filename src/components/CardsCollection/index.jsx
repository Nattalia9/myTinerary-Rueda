import { useEffect, useRef } from 'react'
import Card from '../Card'
import './style.css'
import { BsSearch } from "react-icons/bs";
import {getCities, filterCities}  from '../../redux/actions/citiesActions.js'
import { useSelector, useDispatch } from 'react-redux';


export default function CardsCollection() {
  
  const input = useRef(null)
  
  const citiesStore = useSelector(store => store.citiesReducer)
  // console.log("store",citiesStore);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( getCities() );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    const search = input.current.value;
    dispatch(filterCities(search));
  };

  return (
    <div className='container pb-5'>
      <div className="row justify-content-center py-5"> 
        <div className="col-md-5">
          <div className="h-search-form">
            <form className="d-flex" onSubmit={ handleSubmit }>
              <input type="text" id="search" name="search" placeholder="Search..." ref={input} onKeyUp={handleSubmit}/>
              <button><BsSearch className='icon-search'/></button>
            </form>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="columnita col pb-5">
        {citiesStore.filteredCities.length > 0 ? (
          citiesStore.filteredCities.map((each) => ( 
            <Card key={each._id} ciudad={each} />))
            ) : (
            <h2>No cities found.</h2>
            )} 
        </div>
      </div>
    </div>
  )
}
