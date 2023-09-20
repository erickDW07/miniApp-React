
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"



export const PrivateRouter = ({ children }) => {

    const { isAuthenticated } = useSelector(state => state.auth);
    return (isAuthenticated)
        ? children
        : (<Navigate to='/login' />)
}