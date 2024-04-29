import React from 'react';
import ImageViewer from 'react-images-viewer';

const ReactImageViewer = props => {
    return (
        <ImageViewer
            imgs ={[{ src : props.imgs}]}
            isOpen={props.isOpen}
            onClose={props.onClose}
            backdropCloseable
        />
    )
}

export default ReactImageViewer;