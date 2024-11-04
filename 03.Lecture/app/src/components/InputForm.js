import React, { useEffect, useState } from 'react'

export default function InputForm() {
    const [inputValue, setInputValue] = useState('')
    const [submittedValue, setSubmittedValue] = useState('')
    useEffect(() => {
      console.log('input value changed', inputValue);
    }, [inputValue])

    const handleSubmit  = (e) => {
        e.preventDefault()
        setSubmittedValue(inputValue)
        setInputValue('')
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
 
                <label className="form-label">Name</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type='submit'>Submit</button>            
        </form>
        {submittedValue && <p>Submitted value: {submittedValue}</p>}
    </div>
  )
}
