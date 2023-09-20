import { useRouteError } from "react-router-dom"


export const ErrorPage = ({message}) => {
    const error = useRouteError();

    console.log(error);

   return (
      <div className="center-grid">
        <h1>Oops!</h1>
        <p>Sorry, something is wrong</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
      </div>
   )
}