import React, { useState, useEffect } from 'react';
// import { gridData } from './data';
import Client from '../api/endpoints';
import Card from './card';
import SortableComponent from '../Shared/sortableList';

export default function List(){
    const [gridData, setGridData] = useState(null)

    useEffect(() => {
        async function fetchGridData(){
            const response = await Client.posts.getAll();
            const posts = await response.json();
            setGridData(posts);
        }
        fetchGridData();
    },[])
    
    return <div className="width-100">
    {gridData && <SortableComponent 
        items={gridData.map((item) => <Card item={item} />)} 
        listStyles= {{ display : 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}
        listItemStyles = {{ width : '30%'}}
    />}
    </div>
}