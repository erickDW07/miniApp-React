import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { startLoadingPokemons } from "../../Store/pokemon";




export const ItemCard = ({ item }) => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const onRequestInfo =()=>{
      dispatch(startLoadingPokemons());
      navigate(`${item.name}`);
   }
   return (
      <div className="col-2 ">
         <div className="card" onClick={()=>onRequestInfo()}>
            <div className="card-header">{item.name}</div>
            <img className="card-img-bootom" src={item.image} />           
         </div>
      </div>
   )
}