import React, { Component } from 'react';

class FeedbackHeader extends Component {
  constructor() {
    super();
    this.state = {
      imagem: '',
      nomeDoJogador: '',
      pontos: 0,
    };
  }

  imagem = () => {
    const local = localStorage.getItem('ranking');
    const acesso = JSON.parse(local);
    const perfil = acesso.picture;
    this.setState({ imagem: perfil });
  };

  nomeDoJogador = () => {
    const local = localStorage.getItem('ranking');
    const acesso = JSON.parse(local);
    const { name } = acesso;
    this.setState({ nomeDoJogador: name });
  };

  pontos = () => {
    const local = localStorage.getItem('ranking');
    const acesso = JSON.parse(local);
    const placar = acesso.score;
    this.setState({ pontos: placar });
  };

  componentDidMount = () => {
    const { imagem, nomeDoJogador, pontos } = this;
    imagem();
    nomeDoJogador();
    pontos();
  }

  render() {
    const { imagem, nomeDoJogador, pontos } = this.state;
    return (
      <div>
        <header>
          <img src={ imagem } alt="" data-testid="header-profile-picture" />
          <h2 data-testid="header-player-name">
            {nomeDoJogador}
          </h2>
          <h3 data-testid="header-score">{pontos}</h3>
        </header>
      </div>
    );
  }
}

export default FeedbackHeader;
