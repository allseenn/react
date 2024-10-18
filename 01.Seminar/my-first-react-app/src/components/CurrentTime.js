function CurrentTime() {
    return ( 
        <div>
            <h1 style={{textAlign: 'left', color: 'red'}}>Current Time</h1>
            <h2 style={{textAlign: 'left', color: 'green'}}>{new Date().toLocaleTimeString()}</h2>
        </div>
     );
}

export default CurrentTime;