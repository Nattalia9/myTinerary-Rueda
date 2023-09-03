import {useState, useEffect} from 'react';
import { getCity } from '../services/citiesQueries';
import { useParams } from 'react-router-dom';
import Itineraries from '../components/Itineraries'
import HeroDetail from '../components/HeroDetail';
import { useSelector, useDispatch } from 'react-redux';
import {getCityById, resetCity}  from '../redux/actions/citiesActions.js'

export default function CityDetail() {

  // const [ city, setCity ] = useState({});

  const {id} = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCityById(id));
    return () => dispatch( resetCity())
  },[]);


  const cityStore = useSelector(store => store.citiesReducer.city)
  console.log("storexid",cityStore);

  // useEffect(()=>{
  //   getCity(id)
  //     .then((data) => setCity(data))
  //     .catch((err) => console.log(err))
  // },[]);

  return (
    <>
      {!cityStore ? (
        <h2>Loading...</h2>
      ) : (
        <div className='container-fluid p-0'>
          <HeroDetail data={cityStore} />
          <Itineraries data={cityStore} />
        </div> 
      )}
    </>
  )
}
