import React, { useRef }from 'react'
import './style.css'
import { BsKey } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/actions/userActions.js";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from "jwt-decode";

export default function FormSignIn() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useRef(null)
  const password = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    const aux = [email, password];
    if (aux.some((campo) => !campo.current.value)) {
      alert("All fields are required");
    } else {
      const body = {
        email: email.current.value,
        password: password.current.value,
      };
      dispatch(signIn(body)).then((response) => {
        if(response.payload.success){
          navigate("/")
        }
      });
    }
  };

  const signInWithGoogle = (credentialResponse) => {
    const dataUser = jwtDecode(credentialResponse.credential);
    const body = {
      email: dataUser.email,
      password: dataUser.given_name + dataUser.sub,
    };
    dispatch(signIn(body))
      .then((actionResponse) => {
        if(actionResponse.payload.success){
          navigate("/");
        }
      }).catch( err => console.log(err) )
  };

  // let token = localStorage.getItem("token");
  // if(token) {
  //   return navigate('/');
  // }

  return (
    <div className="container-fluid bg-img bgm">
      <div className="mountain">
        <div className="f-grayt">
          <div className="container font">
            <div className="row justify-content-center rep">
              <div className="col-md-6 pt-5 thn">
                <h2 className='title-form text-center mb-4'>Sign In</h2>
                <div className="sociahl d-flex gap-2 justify-content-center">
                  {/* <span className='btn-red' title="Google"><FaGoogle className="" /></span>
                  <span className='btn-red' title="Facebook"><FaFacebookF className="" /></span> */}
                  <GoogleLogin 
                    text="signin_with"
                    onSuccess={signInWithGoogle}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                  />
                </div>
                <p className='text-center pt-2'> Log in to your account:</p>
                <p className='text-center pt-2'>New user? <Link className="link-account" to="/signUp">create an account</Link></p>
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
