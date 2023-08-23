import {useState, useEffect} from 'react';
import { getCity } from '../services/citiesQueries';
import { useParams } from 'react-router-dom';
import Itineraries from '../components/Itineraries'
import HeroDetail from '../components/HeroDetail';

export default function CityDetail() {

  const [ city, setCity ] = useState({});

  const {id} = useParams();

  useEffect(()=>{
    getCity(id)
      .then((data) => setCity(data))
      .catch((err) => console.log(err))
  },[]);

  return (
    <div className='container-fluid p-0'>
      <HeroDetail data={city} />
      <Itineraries data={city} />
    </div> 
  )
}
