// import React, {Component} from 'react';
// import update from 'react/lib/update';
// import {DropTarget} from 'react-dnd';
// import Card from './Card';

// const style = {
//   width: 400,
// };

// class Container extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cards: [
//         {
//           id: 1,
//           text: 'Write a cool JS library',
//         },
//         {
//           id: 2,
//           text: 'Make it generic enough',
//         },
//         {
//           id: 3,
//           text: 'Write README',
//         },
//         {
//           id: 4,
//           text: 'Create some examples',
//         },
//         {
//           id: 5,
//           text:
//             'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
//         },
//         {
//           id: 6,
//           text: '???',
//         },
//         {
//           id: 7,
//           text: 'PROFIT',
//         },
//       ],
//     };
//   }

//   pushCard(card) {
//     this.setState(
//       update(this.state, {
//         cards: {
//           $push: [card],
//         },
//       })
//     );
//   }

//   removeCard(index) {
//     this.setState(
//       update(this.state, {
//         cards: {
//           $splice: [[index, 1]],
//         },
//       })
//     );
//   }

//   moveCard(dragIndex, hoverIndex) {
//     const {cards} = this.state;
//     const dragCard = cards[dragIndex];

//     this.setState(
//       update(this.state, {
//         cards: {
//           $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
//         },
//       })
//     );
//   }

//   render() {
//     const {cards} = this.state;
//     const {connectDropTarget} = this.props;

//     return connectDropTarget(
//       <div style={style}>
//         {cards.map((card, i) => (
//           <Card
//             key={card.id}
//             card={card}
//             index={i}
//             removeCard={this.removeCard.bind(this)}
//             moveCard={this.moveCard.bind(this)}
//           />
//         ))}
//       </div>
//     );
//   }
// }

// const cardTarget = {
//   drop(props, monitor, component) {
//     const {id} = props;
//     const sourceObj = monitor.getItem();
//     if (id !== sourceObj.listId) component.pushCard(sourceObj.card);
//     return {
//       listId: id,
//     };
//   },
// };

// export default DropTarget('CARD', cardTarget, (connect, monitor) => ({
//   connectDropTarget: connect.dropTarget(),
//   isOver: monitor.isOver(),
//   canDrop: monitor.canDrop(),
// }))(Container);
