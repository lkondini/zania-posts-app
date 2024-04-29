import React, { useState } from 'react';
import ReactImage from '../Shared/imageViewer';

export default function Card(props){
    return (
        <div style={props.style} className='pointer'>
            <p>{props.item.title}</p>
            <ReactImage imgs={ require(`../assets/cat${props.item.position}.jpg`) } />
        </div>
    )
}