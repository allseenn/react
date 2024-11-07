
import { Link } from 'react-router-dom';
const ListPage = ({list}) => {

    return (
        <div>
            <h1>Список</h1>
            <ol>
                {list.map((item) => (
                <li>
                    <Link to = {`/details/${item.id}`}>{item.name}</Link>
                </li>
                ))}
            </ol>
        </div>
    )
}

export default ListPage