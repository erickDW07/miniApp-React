import { useForm } from "../hooks/useForm"


export const Search = ({onSubmitSearch}) => {
   const { searchTxt, onResetForm, onInputChange } = useForm({ searchTxt: '' })
   const onSubmit = (event) => {
      event.preventDefault();
      onSubmitSearch(searchTxt);
      onResetForm();
   }
   return (
      <form onSubmit={onSubmit} className="input-group">

         <input type="text" className="form-control" placeholder="Pokemon" value={searchTxt} name='searchTxt' onChange={onInputChange} />
         <button className="btn btn-primary" type="submit"> Search </button>

      </form>
   )
}