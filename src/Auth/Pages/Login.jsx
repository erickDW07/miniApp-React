import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { submitLogin } from "../../Store/auth/authThunks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { login } from "../../Store/auth/authSlice";

export const Login = () => {

   const dispatch = useDispatch();
   
   const navigate = useNavigate();

   const {email, password, onInputChange, onResetForm}= useForm({
      email: '',
      password: ''
   });

   const lastPath = localStorage.getItem('lastPath') || '/';
   const auth = localStorage.getItem('auth');

   useEffect(()=>{
      auth && dispatch(login({user: auth.user})) && navigate(lastPath,{replace:true})
   }, []);

   const onLogin = (event)=>{
      event.preventDefault();
      dispatch(submitLogin(email, password));      
      onResetForm();
      console.log(lastPath);
      navigate(lastPath,{replace:true});
   };

   return (
      <form onSubmit={onLogin}  className="form-login justify-content-center">
         <div className="container">
            <label className="form-label"> Email </label>
            <input type="email" className="form-control" value={email} name="email" onChange={onInputChange} />
            <label className="form-label"> Password </label>
            <input type="password" className="form-control" value={password} name="password" onChange={onInputChange} />
            <div className="mt-3">
               <button type="submit" className=" form-control btn btn-primary"> Log in </button>
            </div>  

            <span> <Link to={'/'}>home</Link></span>          
         </div>
      </form>
   )
}