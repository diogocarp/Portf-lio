import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Arrow = ({ direction, onClick }) => {
    const icon = direction === 'next' ? <FaArrowRight style={{ color: 'white' }} /> : <FaArrowLeft style={{ color: 'white' }} />;
    
    return (
        <div className={`arrow ${direction}`} onClick={onClick} style={{width:'20px', display: 'flex', alignItems: 'center', justifyContent: 'center' ,margin: '0 10px' }}>
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
                    <p>Projeto de um e-commerce de jogos de tabuleiro, feito com React TypeScript</p>
                </div>
                
                <div>
                    <p>Projeto de uma aplicação mobile para o sistema de gerenciamento de armazem, utilizei React Native</p>
                </div>
                <div>
                    <p>Projeto em Java Springboot e JWP's, utilzando REST API e MVC, criei um CRUD de uma página web de informações sobre jogos eletrônicos.</p>
                </div>
                <div>
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
