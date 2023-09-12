import React, { useEffect, useState, useRef } from 'react';
import axios from "axios";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/actions/userActions.js";
import './style.css'
import { BsGeoAlt } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsPersonPlus } from "react-icons/bs";
import { BsKey } from "react-icons/bs";
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

export default function FormSignUp() {

  const [countries, setCountries] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)
  const lastName = useRef(null)
  const userImg = useRef(null)
  const userLocation = useRef(null)


  useEffect(() => {
    axios("https://restcountries.com/v3.1/all?fields=name").then(({ data }) =>
      setCountries(data.map((country) => country.name.common))
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const aux = [email, password, name, lastName, userImg, userLocation];
    if (aux.some((campo) => !campo.current.value)) {
      alert("All fields are required");
    } else {
      const body = {
        email: email.current.value,
        password: password.current.value,
        name: name.current.value,
        lastName: lastName.current.value,
        userImg: userImg.current.value,
        userLocation: userLocation.current.value,
      };
      dispatch(signUp(body))
      .then(() => {
        navigate('/signIn');
    })
    }
  };


  return (
    <div className="container-fluid bg-img bgm">
      <div className="mountain">
        <div className="f-grayt">
          <div className="container font">
            <div className="row justify-content-center rep">
              <div className="col-md-6 pt-5 thn">
                <h2 className='text-center mb-4'>Create account</h2>
                <div className="sociahl d-flex gap-2 justify-content-center">
                  <span className='btn-red' title="Google"><FaGoogle className="" /></span>
                  <span className='btn-red' title="Facebook"><FaFacebookF className="" /></span>
                </div>
                <p className='text-center pt-2'>or use your email for registration:</p>
                <form className="form-background p-4 bgn text-center" autoComplete="off" onSubmit={handleSubmit} >
                  <div className="input-group d-flex mb-3">
                    <div className="input-group-prepend d-flex ">
                      <span className='input-group-text d-flex justify-content-center align-items-center '>
                        <MdOutlineAlternateEmail className="iconn-i" />
                      </span>
                      </div>
                    <input type="email" name="email" className="form-controoll" placeholder="Email" ref={email}/>
                  </div>
                  <div className="input-group d-flex mb-3">
                    <div className="input-group-prepend d-flex ">
                      <span className='input-group-text d-flex justify-content-center align-items-center '>
                        {/* <SlLock className="iconn-i" /> */}
                        <BsKey className="iconn-i" />
                      </span>
                      </div>
                    <input type="password" name="password" className="form-controoll" placeholder="Password" ref={password}/>
                  </div>
                  <div className="input-group d-flex mb-3">
                    <div className="input-group-prepend d-flex ">
                      <span className='input-group-text d-flex justify-content-center align-items-center '>
                        <BsPerson className="iconn-i" />
                      </span>
                      </div>
                    <input type="text" name="name" className="form-controoll" placeholder="Name" ref={name}/>
                  </div>
                  <div className="input-group d-flex mb-3">
                    <div className="input-group-prepend d-flex ">
                      <span className='input-group-text d-flex justify-content-center align-items-center '>
                        <BsPersonPlus className="iconn-i" />
                      </span>
                      </div>
                    <input type="text" name="last-name" className="form-controoll" placeholder="Last name" ref={lastName}/>
                  </div>
                  <div className="input-group d-flex mb-3">
                    <div className="input-group-prepend d-flex ">
                      <span className='input-group-text d-flex justify-content-center align-items-center '>
                        <IoImageOutline className="iconn-i" />
                      </span>
                      </div>
                    <input type="text" name="url-image" className="form-controoll" placeholder="Url image" ref={userImg}/>
                  </div>
                  <div className="input-group d-flex mb-3">
                    <div className="input-group-prepend d-flex ">
                      <span className='input-group-text d-flex justify-content-center align-items-center '>
                        <BsGeoAlt className="iconn-i" />
                      </span>
                      </div>
                    <select className="form-controoll " name="country" ref={userLocation}>
                    <option selected>Country...</option>
                      {countries.length > 0 && countries.map((country) => ( 
                        <option key={`opt-country-${country}`} value={country}>
                          {" "}
                          {country}{" "}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button className="btn-signup mt-4">Sign up</button>
                </form>          
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>   
  )
}