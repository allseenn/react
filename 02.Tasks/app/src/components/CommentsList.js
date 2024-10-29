import React, { useState } from 'react'

export default function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
        ]);
    const [inputValue, setInputValue] = useState("");
  return (
    <div className='CommentsList'>
        <h1 className='heading'>Задание 2</h1>
        <input className='input' type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
        <button className='addBtn' onClick={() => {
            setComments(prev => [...prev, { id: comments.length + 1, text: inputValue}])
            setInputValue('')
        }
            }>Добавить комментарий</button>
        <ol className='list'>
        {comments.map((comment) => (
            <li className='list-item' key={comment.id}>{comment.text + " "}
                <button className='delBtn' onClick={() => setComments(prev => prev.filter(c => c.id !== comment.id))}>X</button>
            </li>
        ))}
        </ol>
    </div>
  )
}

