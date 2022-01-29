import React from "react-redux";

function CardComponent(props) {
    return(
        <>
        <h5>{props.user.id} {props.user.name}</h5>
        </>
    )
}

export default CardComponent;

