import React, { Component } from 'react';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      seconds: 30,
    };
  }

  handleTimer = () => {
    const ONE_SECOND = 1000;
    this.myInterval = setInterval(() => {
      this.setState((prevState) => ({ seconds: prevState.seconds - 1 }));
    }, ONE_SECOND);
  };

  componentDidMount = () => {
    const { handleTimer } = this;
    handleTimer();
  };

  disableOptionButtons = () => {
    const optionButtons = document.querySelectorAll('.optionButton');
    for (let i = 0; i < optionButtons.length; i += 1) {
      optionButtons[i].setAttribute('disabled', 'true');
    }
  }

  componentDidUpdate = () => {
    const { disableOptionButtons } = this;
    const { seconds } = this.state;
    const FINAL_COUNTDOWN = 0;
    if (seconds === FINAL_COUNTDOWN) {
      clearInterval(this.myInterval);
      disableOptionButtons();
    }
  };

  render() {
    const { seconds } = this.state;
    return (
      <div className="timer">{ seconds }</div>
    );
  }
}

export default Timer;
