// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import { Stage, Layer, Rect, Text } from 'react-konva';
// import Konva from 'konva';

// class ColoredRect extends Component {
//   state = {
//     color: 'green'
//   };
//   handleClick = () => {
//     this.setState({
//       color: Konva.Util.getRandomColor()
//     });
//   };
//   render() {
//     return (
//       <Rect
//         x={20}
//         y={20}
//         width={50}
//         height={50}
//         fill={this.state.color}
//         shadowBlur={5}
//         onClick={this.handleClick}
//       />
//     );
//   }
// }

// export default class SketchPage extends Component {
//   render() {
//     return (
//       <Stage width={window.innerWidth} height={window.innerHeight}>
//         <Layer>
//           <Text text="Try click on rect" />
//           <ColoredRect />
//         </Layer>
//       </Stage>
//     );
//   }
// }
import React, {Component} from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from './ Container';

export default class SketchPage extends Component {
  render() {
    // return <Container />;
    return (
      <div>
        <p>未実装です</p>
      </div>
    );
  }
}

// // export default DragDropContext(HTML5Backend)(SketchPage);
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { DragSource } from 'react-dnd';
// import { ItemTypes } from './Constants';

// /**
//  * Implements the drag source contract.
//  */
// const cardSource = {
//   beginDrag(props) {
//     return {
//       text: props.text
//     };
//   }
// };

// /**
//  * Specifies the props to inject into your component.
//  */
// function collect(connect, monitor) {
//   return {
//     connectDragSource: connect.dragSource(),
//     isDragging: monitor.isDragging()
//   };
// }

// const propTypes = {
//   text: PropTypes.string.isRequired,

//   // Injected by React DnD:
//   isDragging: PropTypes.bool.isRequired,
//   connectDragSource: PropTypes.func.isRequired
// };

// class Card extends Component {
//   render() {
//     const { isDragging, connectDragSource, text } = this.props;
//     return connectDragSource(
//       <div style={{ opacity: isDragging ? 0.5 : 1 }}>
//         {text}
//       </div>
//     );
//   }
// }

// Card.propTypes = propTypes;

// // Export the wrapped component:
// export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);
