function EventCard(props) {
    return ( 
        <div>
            <h1>{props.name}</h1>
            <p>{props.date}</p>
            <p>{props.place}</p>
        </div>
     );
}

export default EventCard;