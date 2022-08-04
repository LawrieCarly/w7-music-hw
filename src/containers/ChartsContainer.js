import React, {useEffect, useState} from "react";
import ChartList from "../components/ChartsList";

const ChartsContainer = () => {
    const [top20s, setTop20s] = useState([]);

    useEffect(() => {
        fetchChartsList();
    }, [])

    const fetchChartsList = function (){
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(response => response.json())
        .then( top20s => setTop20s(top20s.feed.entry))
    }

    return (
        <div>
            <ChartList top20s={top20s}/> 
        </div>
    )

}

export default ChartsContainer;