import React from 'react'
import TeacherList from '../../pages/TeacherList';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/38694620?s=460&u=c5be7b8b573e355f157a2d8b263a3b45908f61d0&v=4" alt="Igor Tuag"/>
                    <div>
                        <strong>Igor Tuag</strong>
                        <span>Programação - Desenvolvendo FullStacks</span>
                    </div>
            </header>

                <p>
                    Apaixonado por tecnologias JavaScript, ReactJS e React Native.
                <br /><br />
                    Sua metodologia irá fazer com que você aprenda de maneira fácil e rápida, levando a uma experiência de outro mundo!
                </p>
                <footer>
                <p>
                    Preço/hora
                <strong>R$ 90,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp"/>
                        Entrar em contato
                </button>
                </footer>
        </article>
    );
}

export default TeacherItem;