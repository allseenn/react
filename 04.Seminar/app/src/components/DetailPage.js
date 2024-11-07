import { useParams } from 'react-router-dom';
const DetailPage = ({ list }) => {
    const { id } = useParams();
    const item = list.find(item => item.id === Number(id));
    return (
      <div>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
      </div>
    );
}

export default DetailPage