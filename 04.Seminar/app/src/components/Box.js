export default function Box({ children }) {
  return (
    <div style={{ border: '2px solid black', padding: '10px', margin: '10px', width: '150px', height: '100px'}}>
    {children}
  </div>
  )
}

