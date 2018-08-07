import React, {Component} from 'react';
import Timeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';

const groups = [{id: 1, title: 'group 1'}, {id: 2, title: 'group 2'}];

const items = [
  {
    id: 1,
    group: 1,
    title: 'item 1',
    start_time: moment(),
    end_time: moment().add(1, 'hour'),
  },
  {
    id: 2,
    group: 2,
    title: 'item 2',
    start_time: moment().add(-0.5, 'hour'),
    end_time: moment().add(0.5, 'hour'),
  },
  {
    id: 3,
    group: 1,
    title: 'item 3',
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(3, 'hour'),
  },
];

export default class TimeTablePage extends Component {
  constructor(state) {
    super(state);
    this.state = {
      groups: [{id: 1, title: 'group 1'}, {id: 2, title: 'group 2'}],
      items: [
        {
          id: 1,
          group: 1,
          title: 'item 1',
          start_time: moment(),
          end_time: moment().add(1, 'hour'),
        },
        {
          id: 2,
          group: 2,
          title: 'item 2',
          start_time: moment().add(-0.5, 'hour'),
          end_time: moment().add(0.5, 'hour'),
        },
        {
          id: 3,
          group: 1,
          title: 'item 3',
          start_time: moment().add(2, 'hour'),
          end_time: moment().add(3, 'hour'),
        },
      ],
      who: '',
      what: '',
      begin: null,
      end: null,
    };
    this.onChangeField = this.onChangeField.bind(this);
  }

  // stateの更新
  onChangeField(e, key) {
    this.setState({[key]: e.target.value});
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
