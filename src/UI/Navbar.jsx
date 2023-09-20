import { NavLink, useNavigate } from "react-router-dom"
import { BsPersonCircle } from "react-icons/bs";
import { TbLogout, TbLogin } from "react-icons/tb";
import { submitLogout } from "../Store/auth/authThunks";
import { useDispatch, useSelector } from "react-redux";


export const Navbar = () => {
   const dispatch = useDispatch();
   const navigation = useNavigate();
   const { isAuthenticated } = useSelector(state => state.auth);

   const onLogout = () => {
      dispatch(submitLogout());
      navigation('/', { replace: true });

   }
   const onLogin = () => {
      navigation('/login', { replace: true });

   }

   return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

         <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
               <ul className="navbar-nav mb-2">
                  <li className="nav-item">
                     <NavLink className={({ isActive, isPending }) => (isActive ? 'nav-link active' : 'nav-link')} aria-current="page" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink className={({ isActive, isPending }) => (isActive ? 'nav-link active' : 'nav-link')} to="pokemon">Pokemon</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink className={({ isActive, isPending }) => (isActive ? 'nav-link active' : 'nav-link')} to="todo">Todo</NavLink>
                  </li>
               </ul>

            </div>

            <ul className="navbar-nav mb-2 white">
               <li className="nav-item  dropdown">
                  <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     <BsPersonCircle />
                  </a>

                  <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                     <li><a className="dropdown-item" href="#">Profile</a></li>
                     <hr />
                     {
                        isAuthenticated ?
                           <li className="dropdown-item" onClick={() => onLogout()}>Log out <TbLogout /></li>
                           :<li className="dropdown-item" onClick={() => onLogin()}>Log in <TbLogin /></li>
                     }

                  </ul>
               </li>
            </ul>



         </div>
      </nav>

   )
}