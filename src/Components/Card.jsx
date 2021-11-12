import React from "react";
import CardHeading from "./CardHeading";
import CardList from "./CardList";

function Card(props){
    const {title,li1,li2,li3,li4} = props;
    return(
        <div>
            <CardHeading title = {title}/>
            <CardList li1 = {li1} li2 = {li2} li3 = {li3} li4 = {li4}  />
        </div>
    )
}

export default Card

// 