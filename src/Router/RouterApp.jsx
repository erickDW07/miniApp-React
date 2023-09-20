import { Route, Routes } from "react-router-dom";


import { TodoApp } from "../Todo/Pages/TodoApp";

import { MyApp } from "../MyApp";
import { ErrorPage } from "../UI/ErrorPage";
import { Login } from "../Auth/Pages/Login";

import { PokemonRouter } from "../Pokemon/Router/pokemonRouter";
import { PrivateRouter } from "./PrivateRouter";
import { HomePage } from "../UI/HomePage";
import { MyRoutes } from "./MyRoutes";

export const RouterApp = ()=>{
    
    return(
        <>
            <Routes>
               
                <Route path="/login" element={<Login/>}/>                
                <Route path="/*" element= {
                    
                    <>
                    <MyApp/>
                    <MyRoutes>
                        <Routes>
                        <Route path="/" element= {<HomePage/>}/>
                        <Route path="/*" element={
                        <PrivateRouter>                       
                        <Routes>                        
                            <Route path="/todo" element= {<TodoApp/>}/>
                            <Route path="/pokemon/*" element= {<PokemonRouter/>}/>
                        </Routes>
                        </PrivateRouter>}/>
                         </Routes>
                    </MyRoutes>
                                        
                    </>
                    
                }/>                
            </Routes>
        </>
    )
}

// export const router = createBrowserRouter([
//     {
//         path:'/',
//         element: <MyApp/>,
//         errorElement: <ErrorPage/>,
//         children:[
//             {
//                 index:true,
//                 element: <HomePage/>
//             },
//             {
//                 path:'/heroes',
//                 element:<HeroesApp/>
//             },
//             {
//                 path:'/pokemon',
//                 element:<PokemonApp/>,
//                 children:[
//                     {
//                         path:'pokemon/:name',
//                         element: <PokemonInfo/>
//                     }
//                 ]
//             },
//             {
//                 path:'/todo',
//                 element:<TodoApp/>
//             }
//         ]   
//     },
//     {
//         path:'/auth',
//         element: <Login/>,
//     }
    
// ]);