function Greeting() {
    const time = new Date().getHours()
    if (time > 12) {
    return (
            <h1>Good afternoon {time}</h1>
        );
    }
    else {
        return (
            <h1>Good morning {time}</h1>
        )
    }
}

export default Greeting;


