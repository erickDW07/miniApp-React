import { login, logout } from "./authSlice";


const submitLogin = (email = '', password = '') => {

    return async (dispatch) => {
        const user = {
            email,
            password
        }
        localStorage.setItem('auth', JSON.stringify({user}));


        dispatch(login({ user }));

    }
}

const submitLogout = () => {
    return async (dispatch) => {        
        localStorage.removeItem('auth');        
        dispatch(logout());
    }
}

const checkAuth = () =>{
    return async (dispatch) =>{
        const user = localStorage.getItem('auth');
        if (!user) {
            return null;
        }
        dispatch(login({ user }));
    }
}

export {
    submitLogout,
    submitLogin,
    checkAuth
}