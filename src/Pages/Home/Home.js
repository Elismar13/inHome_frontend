import React, {Component} from 'react';

import './styles.css';

import InferiorBar from '../../components/InferiorBar/InferiorBar';;

export default class Home extends Component {
    render() {
        return(
                <div className = "Container">
                    <div className="Image">
                            <h1 id="welcome">Bem-vindo ao inHome</h1>
                            <p id="descricao">Uma plataforma para o monitoramento e controle de ambientes</p>
                    </div>

                    <div className="Cards">
                        <div className="Subcards">
                            <h1>Controle seus aparelhos remotamente</h1>
                            <p>Com o sinHome é possível controlar aparelhos a partir da internet de uma forma simples e interativa.</p>
                        </div>
                        <div className="Subcards">
                            <h1>Economize energia</h1>
                            <p>O modo de economia de energia possibilita o controle automático de aparelhos como ar condicionados e lâmpadas!</p>
                        </div>
                        <div className="Subcards">
                            <h1>Informações em tempo real</h1>
                            <p>Dados em tempo real hospeados na nuvem. Disponível para serem acessados nos demais dispositivos, desde celulares até desktops!</p>
                        </div>
                        <div className="Subcards">
                            <h1>Documentação online e fácil instalação</h1>
                            <p>Use o inHome hoje mesmo! Você só precisa de poucos materiais.</p>
                        </div>
                    </div>
                </div>
        )
    }
}

