import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PollPreview from './PollPreview';
import '../css/PollPreviewList.css';

class PollPreviewList extends Component {
  state = {
    tab: 'unanswered'
  };

  handleTabs = event => {
    this.setState({
      tab: event.target.value
    });
  };

  render() {
    const { tab } = this.state;
    const { unansweredIds, answeredIds } = this.props;
    console.log(this.props,'preview list')
    return (
      <div className='bg-white border'>
        <div className='text-center btn-options'>
          <button className="btn btn-none shadow-none default-active active-inactive w-50" value="unanswered" onClick={this.handleTabs}>
            Unanswered
          </button>
          <button className="btn btn-none shadow-none active-inactive w-50" value="answered" onClick={this.handleTabs}>
            Answered
          </button>
        </div>
        <ul className='list-unstyled p-4'>
          {tab === 'unanswered'
            ? unansweredIds.map(id => (
                <li key={id} >
                  <Link to={`/questions/${id}`}>
                    <PollPreview id={id} />
                  </Link>
                </li>
              ))
            : answeredIds.map(id => (
                <li key={id}>
                  <Link to={`/questions/${id}`}>
                    <PollPreview id={id} />
                  </Link>
                </li>
              ))}
        </ul>
      </div>
    );
  }
}

export default PollPreviewList;
