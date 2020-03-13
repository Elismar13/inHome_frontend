import React from 'react';

import './styles.css';

import LogoAssert from '../../assets/LogoAssert.png';
import LogoIfpb from '../../assets/LogoIFPB.png'

const InferiorBar = () => {
    return(
        <footer>
            <img src={LogoAssert} id="LogoAssert"/>
            <p id="Descricao">© Elismar Silva 2020. Todos os direitos reservados.</p>
            <img src={LogoIfpb} id="LogoIfpb"/>

        </footer>
    )
}

export default InferiorBar;