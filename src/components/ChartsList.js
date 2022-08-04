import React from "react";
import ListItem from "./ListItem";

const ChartsList = ({top20s}) => {

    const chartsListItems = top20s.map ((song, index) => {
        return (
            <>
            <ListItem key={index} song={song}/>
            </>


        )
    });

    return (
        <ol>
            {chartsListItems}
        </ol>

    )

}; 

export default ChartsList;

