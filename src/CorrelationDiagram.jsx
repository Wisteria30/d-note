import React, {Component} from 'react';
import {render} from 'react-dom';
export default class CorrelationDiagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: '',
      sampleData: [5, 10, 3, 20, 15],
    };
  }

  onChange(e) {
    const sort = e.target.value;
    let newData = this.state.sampleData.slice();
    newData.sort((a, b) => {
      return a - b;
    });
    if (sort === 'DESC') {
      newData.reverse();
    }
    this.setState({
      sort: sort,
      sampleData: newData,
    });
  }

  render() {
    return (
      <div>
        <div>
          <p>未実装です</p>
        </div>
        
        <div>
          <select value={this.state.sort} onChange={this.onChange.bind(this)}>
            <option>ASC</option>
            <option>DESC</option>
          </select>
        </div>
        <svg
          version="1.1"
          width="300"
          height="300"
          xmlns="http://www.w3.org/2000/svg">
          {this.state.sampleData.map((d, idx) => {
            return (
              <rect
                x={idx * 50 + 10}
                y={300 - d * 10}
                width="40"
                height={d * 10}
                fill="#099"
              />
            );
          })}
        </svg>
      </div>
    );
  }
}
