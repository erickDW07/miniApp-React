
import { useLocation } from "react-router-dom"



export const MyRoutes = ({ children }) => {

    const { pathname, search } = useLocation();
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);
    return children
}