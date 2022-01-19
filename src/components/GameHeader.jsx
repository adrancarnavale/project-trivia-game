import React, { Component } from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import { PropTypes } from 'prop-types';

class GameHeader extends Component {
  render() {
    const { nome, email, score } = this.props;
    const myGravatarEmail = `https://www.gravatar.com/avatar/${md5(email).toString()}`;
    return (
      <div>
        <header>
          <img
            src={ myGravatarEmail }
            alt=""
            data-testid="header-profile-picture"
            id="header-profile-picture"
          />
          <h2 data-testid="header-player-name">{nome}</h2>
          <div data-testid="header-score">{ score }</div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  nome: state.player.name,
  email: state.player.gravatarEmail,
  score: state.player.score,
});

GameHeader.propTypes = {
  nome: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(GameHeader);
