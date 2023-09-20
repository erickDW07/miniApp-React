import { useDispatch, useSelector } from "react-redux";
import { getPokemons, nextPage, previusPage } from "../Store/pokemon";


export const Pagination = () => {
    const { page, pages } = useSelector(state => state.pokemons);
    const dispatch = useDispatch();

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">

                <li className={page > 0 ? "page-item" : "page-item disabled"}>
                    <button className="page-link" onClick={() => dispatch(previusPage(page))} aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>

                {
                    ((page - 2) >= 0) ?
                        <li className="page-item"><a className="page-link" onClick={(event) => dispatch(getPokemons(event.target.name))} name={page - 2}>{page - 1}</a></li>
                        : ''
                }
                {
                    ((page - 1) >= 0) ?
                        <li className="page-item"><a className="page-link" onClick={(event) => dispatch(getPokemons(event.target.name))} name={page - 1}>{page}</a></li>
                        : ''
                }
                <li className="page-item active"><a className="page-link" onClick={(event) => dispatch(getPokemons(event.target.name))} name={page}>{page + 1}</a></li>
                {
                    ((page + 1) <= pages) ?
                        <li className="page-item"><a className="page-link" onClick={(event) => dispatch(getPokemons(event.target.name))} name={page + 1}>{page + 2}</a></li>
                        : ''
                }
                {
                    ((page + 2) <= pages) ?
                        <li className="page-item"><a className="page-link" onClick={(event) => dispatch(getPokemons(event.target.name))} name={page + 2}>{page + 3}</a></li>
                        : ''
                }
                <li className={page < pages ? "page-item" : "page-item disabled"}>
                    <button className="page-link" onClick={() => dispatch(nextPage(page))} aria-label="Next">
                        <span aria-hidden="true"  >&raquo;</span>
                    </button>
                </li>


            </ul>
        </nav>
    )
}