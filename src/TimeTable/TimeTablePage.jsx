import React, {Component} from 'react';
import Timeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';

export default class TimeTablePage extends Component {
  constructor(state) {
    super(state);
    this.state = {
      groups: [],
      items: [],
      who: '',
      what: '',
      startDate: null,
      startTime: null,
      endDate: null,
      endTime: null,
    };
    this.onChangeField = this.onChangeField.bind(this);
    this.createTable = this.createTable.bind(this);
    this.clearTable = this.clearTable.bind(this);
  }

  // stateの更新
  onChangeField(e, key) {
    this.setState({[key]: e.target.value});
  }

  createTable() {
    // タイムラインバーの追加
    const changeGroup = [
      {id: this.state.groups.length + 1, title: this.state.who},
    ];
    let newGroups;
    if (
      this.state.groups.find(name => {
        return name.title === this.state.who;
      }) === undefined
    ) {
      newGroups = this.state.groups.concat(changeGroup);
    } else {
      newGroups = this.state.groups;
    }
    this.setState({groups: newGroups});

    // タイムラインの内容追加
    const grNum =
      this.state.groups.findIndex((value, index, sourceArray) => {
        return value.title === this.state.who;
      }) + 1;
    const changeItem = [
      {
        id: this.state.items.length + 1,
        group: grNum,
        title: this.state.what,
        start_time: moment(
          this.state.startDate + ' ' + this.state.startTime,
          'YYYY-MM-DD HH:mm'
        ),
        end_time: moment(
          this.state.endDate + ' ' + this.state.endTime,
          'YYYY-MM-DD HH:mm'
        ),
      },
    ];
    let newItems;
    if (this.state.what !== '') {
      newItems = this.state.items.concat(changeItem);
    } else {
      newItems = this.state.items;
    }
    this.setState({items: newItems});
    console.log(grNum);
    console.log(
      moment(
        this.state.startDate + ' ' + this.state.startTime,
        'YYYY-MM-DD HH:mm'
      )
    );
    console.log(
      moment(this.state.endDate + ' ' + this.state.endTime, 'YYYY-MM-DD HH:mm')
    );
  }

  clearTable() {
    this.setState({groups: []});
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
          <input
            type="date"
            onChange={e => this.onChangeField(e, 'startDate')}
          />
          <input
            type="time"
            onChange={e => this.onChangeField(e, 'startTime')}
          />
        </div>
        <div className="When_end">
          <p>When end ?</p>
          <input type="date" onChange={e => this.onChangeField(e, 'endDate')} />
          <input type="time" onChange={e => this.onChangeField(e, 'endTime')} />
        </div>
        <div className="push_line">
          <button onClick={this.createTable}>Enter</button>
        </div>
        <div className="clear">
          <button onClick={this.clearTable}>Clear</button>
        </div>

        <Timeline
          groups={this.state.groups}
          items={this.state.items}
          defaultTimeStart={moment().add(-12, 'hour')}
          defaultTimeEnd={moment().add(12, 'hour')}
        />
      </div>
    );
  }
}
