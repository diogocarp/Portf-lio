import React from 'react';
import Slider from 'react-slick';
import GameRoom from '../images/GameRoom.png'
import EducaTec from '../images/EducaTec.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Arrow = ({ direction, onClick }) => {
    const icon = direction === 'next' ? <FaArrowRight style={{ color: 'white' }} /> : <FaArrowLeft style={{ color: 'white' }} />;
    
    return (
        <div className={`arrow ${direction}`} onClick={onClick} style={{width:'20px', display: 'flex', alignItems: 'center', justifyContent: 'center' ,margin: '0 10px', cursor:'pointer' }}>
            {icon}
        </div>
    );
};

const ProjectsContainer = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Arrow direction="next" />,
        prevArrow: <Arrow direction="prev" />
    }; 

    return (
        <section className="projects-container">
            <h2>Projetos</h2>
            <p>Alguns dos meus projetos desenvolvidos para clientes e para desenvolver meu conhecimento com novas linguagens e frameworks.</p>
            <Slider style={{maxWidth:"700px", display:'flex'}} {...settings}>
                <div>
                    <img src={GameRoom} style={{maxWidth:"600px"}} alt="GameRoom"/>
                    <p>Projeto de um e-commerce de jogos de tabuleiro, feito com React TypeScript</p>
                </div>
                
                <div>
                <iframe width="600" height="315" src="https://www.youtube.com/embed/vNwbiXtZVnM?si=tp_DhUv7X3oxiuIn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <p>Projeto de uma aplicação mobile para o sistema de gerenciamento de armazém, utilizei React Native</p>
                </div>
                <div>
                <img src={EducaTec} style={{maxWidth:"600px"}} alt="EducaTec"/>
                    <p>Projeto que simula uma escola de tecnologia, onde é oferecido cursos, informado seu contato e gestores.</p>
                </div>
            </Slider>
            <a href="https://github.com/diogocarp" className="btn">
                Ver Projetos
            </a>
        </section>
    );
}

export default ProjectsContainer;
