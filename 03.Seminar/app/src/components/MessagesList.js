import React, { useState } from "react";

export default function MessagesList() {
    const [message, setMessage] = useState([
        {id: 1, text: 'Message 1'},
        {id: 2, text: 'Message 2'},
        {id: 3, text: 'Message 3'}
    ])
  return message.map((message) => 
    < >
        <h2>{message.heading}</h2>
        <div key={message.id}>{message.text}</div>
    </>
)
}