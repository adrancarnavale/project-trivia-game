import React, { Component } from 'react';
import FeedbackHeader from '../components/FeedbackHeader';
import FeedbackMessage from '../components/FeedbackMessage';
import Score from './Score';
import PlayAgain from '../components/PlayAgain';
import BtnRanking from '../components/BtnRanking';

class Feedback extends Component {
  render() {
    return (
      <div>
        <FeedbackHeader />
        <FeedbackMessage />
        <Score />
        <PlayAgain />
        <BtnRanking />
      </div>
    );
  }
}

export default Feedback;
