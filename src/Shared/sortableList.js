import React, {Component} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import {arrayMoveImmutable} from 'array-move';

const SortableItem = SortableElement(({value,listItemStyles}) => <div style={listItemStyles}>{value}</div>);

const SortableList = SortableContainer(({items, listStyles, listItemStyles}) => {
  return (
    <div style={ listStyles }>
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} listItemStyles={listItemStyles}/>
      ))}
    </div>
  );
});

class SortableComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
          items: this.props.items
        };
      }
      
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({items}) => ({
      items: arrayMoveImmutable(items, oldIndex, newIndex),
    }));
  };
  render() {
    return <SortableList pressDelay={200} items={this.state.items} onSortEnd={this.onSortEnd} listStyles={this.props.listStyles} listItemStyles={this.props.listItemStyles}/>;
  }
}

export default SortableComponent;