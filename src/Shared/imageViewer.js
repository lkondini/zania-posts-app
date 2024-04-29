import React from 'react';
import ReactImageViewer from './reactImageViewer';

export default class ReactImage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen : false,
        }
    }

    closeImageViewer(){
        this.setState({
            isOpen : false
        })
    }

    handleImageClick(e){
        this.setState({
            isOpen : true
        })
    }

    render(){
        return(
            <div>
            <img onClick={() => this.handleImageClick()} src={this.props.imgs} style={{ width : '100%', height: '100%' }} />
            <ReactImageViewer
                imgs={ this.props.imgs }
                isOpen = {this.state.isOpen}
                onClose = {() => this.closeImageViewer()}
            />
            </div>
        )
    }
}