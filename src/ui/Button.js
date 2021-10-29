function Button(props){
    return <button className = {props.type}>{props.children}</button>
}

export default Button;