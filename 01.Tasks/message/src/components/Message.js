import './Message.css'

function Message(props) {
    return ( 
        <div className='Message'>
            <div style={{color: props.color, fontWeight: props.weight}}>{props.from}</div>
            <div style={{color: props.color, fontWeight: props.weight}}>{props.to}</div>
            <div style={{color: props.color, fontWeight: props.weight}}>{props.subject}</div>
            <div style={{color: props.color, fontWeight: props.weight}}>{props.text}</div>
        </div>
    );
}

export default Message;
