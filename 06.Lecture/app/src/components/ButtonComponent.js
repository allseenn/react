import { connect } from "react-redux";
import { increment } from "../reducers/counterSlice";

const ButtonComponent = (props) => {
    return (
        <button onClick={props.increment}>+1</button>
    );
    
}

const mapDispatchToProps = {
    increment
}

export default connect(null, mapDispatchToProps)(ButtonComponent);