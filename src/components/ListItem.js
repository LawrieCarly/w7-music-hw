import React from "react";

const ListItem = ({song}) => {

if(!song){
    return
}
    return (
        <>
            <li>{song['im:name'].label}, {song['im:artist'].label}</li>
        </>
    )
    
}

export default ListItem;