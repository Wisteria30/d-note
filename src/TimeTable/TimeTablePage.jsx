import React, {Component} from 'react';
import TimeTable from './TimeTable';
import TimeBar from './TimeBar';

export default class TimeTablePage extends Component {
  constructor(state) {
    super(state);
    this.state = {
      who: '',
      what: '',
      begin: null,
      end: null,
    };
    this.onChangeField = this.onChangeField.bind(this);
    this.createTable = this.createTable.bind(this);
  }

  // stateの更新
  onChangeField(e, key) {
    this.setState({[key]: e.target.value});
  }

  //TimeTable作成
  createTable() {
    <TimeBar
      who={this.state.who}
      what={this.state.what}
      begin={this.state.begin}
      end={this.state.end}
    />;
  }

  render() {
    return (
      <div>
        <div className="who_is">
          <p>Who is ?</p>
          <input
            type="text"
            value={this.state.who}
            onChange={e => this.onChangeField(e, 'who')}
          />
        </div>
        <div className="What_do">
          <p>What do ?</p>
          <input
            type="text"
            value={this.state.what}
            onChange={e => this.onChangeField(e, 'what')}
          />
        </div>
        <div className="When_begin">
          <p>When begin ?</p>
          <input type="time" onChange={e => this.onChangeField(e, 'begin')} />
        </div>
        <div className="When_end">
          <p>When end ?</p>
          <input type="time" onChange={e => this.onChangeField(e, 'end')} />
        </div>
        <div className="push_line">
          <button onClick={this.createTable}>Enter</button>
        </div>
        <TimeTable />
      </div>
    );
  }
}
