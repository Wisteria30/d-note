// // import React, {Component} from 'react';
// // import {DragDropContext} from 'react-dnd';
// // import HTML5Backend from 'react-dnd-html5-backend';
// // import Container from './ Container';
// // class SketchPage extends Component {
// //   render() {
// //     return <Container />;
// //   }
// // }

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