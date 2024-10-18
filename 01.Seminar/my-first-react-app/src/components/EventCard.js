import './EventCard.css';
function EventCard(props) {
    return ( 
        <div className='EventCard'>
            <div>{props.name}</div>
            <div>{props.date}</div>
            <div>{props.place}</div>
        </div>
     );
}

export default EventCard;