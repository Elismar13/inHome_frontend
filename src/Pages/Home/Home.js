import React, {Component} from 'react';

import './styles.css';

import cards from './cards'

export default class Home extends Component {
    render() {
        return(
                <div className = "Container">
                    <div className="Image">
                            <h1 id="welcome">Bem-vindo ao inHome</h1>
                            <p id="descricao">Uma plataforma para o monitoramento e controle de ambientes</p>
                    </div>

                    <section className="Cards">
                        {cards.map((card) => (
                            <div className="Subcards">
                                <div className="Subcards-text">
                                    <h1>{card.title}</h1>
                                    <p>{card.description}</p>
                                </div>
                                <img src={card.image}></img>
                            </div>
                        ))}
                    </section>
                </div>
        )
    }
}

