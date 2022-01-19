import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Score extends Component {
  constructor() {
    super();
    this.state = {
      pontos: 0,
    };
  }

  pontos = () => {
    const local = localStorage.getItem('ranking');
    const acesso = JSON.parse(local);
    const placar = acesso.score;
    this.setState({ pontos: placar });
  };

  componentDidMount = () => {
    const { pontos } = this;
    pontos();
  }

  render() {
    const { pontos } = this.state;

    const { assertions } = this.props;

    return (
      <div>
        <div data-testid="feedback-total-score">{pontos}</div>
        <div data-testid="feedback-total-question">{assertions}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
});

Score.propTypes = {
  assertions: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(Score);
