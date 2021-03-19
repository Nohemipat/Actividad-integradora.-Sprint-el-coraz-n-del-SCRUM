import React from 'react';
import './Inicio.css';
function Inicio(){
    return (
        <div>
            <header>
            <h1>CONSULTORIO EN LINEA “NUTRICIÓN PARA TODOS” </h1>
                <nav>
                <img 
                    src='/img/logo.jfif'width= '100' height='100' ></img>
                    <a href='#'>
                        Inicio
                    </a>
                    <a href='#'>
                        Registro
                    </a>
                    <a href='#'>
                        Categoria
                    </a>
                                        
                    <a href='#'>
                        Nosotros
                    </a>
                    <a href='#'>
                        Promocion
                    </a>
                </nav>
            </header>
            <div className='container'>
                <div className='cartas'>
                    <div className='carta'>
                        <img
                        src='/img/niños.jfif'width= '250' height='250px'>
                        </img>
                        <div className='texto'>
                            <p>Niños</p>
                        </div>
                    </div>
                    <div className='carta'>
                        <img
                        src='/img/adolescente.jfif'>
                        </img>
                        <div className='texto'>
                            <p>Adolescentes</p>
                        </div>
                        
                    </div>
                    <div className='carta'>
                        <img
                        src='/img/Adulto.jfif'>
                        </img>
                        <div className='texto'>
                            <p>Adultos</p>
                        </div>
                    </div>
                    <div className='carta'>
                        <img
                        src='/img/familiar.jfif'>
                        </img>
                        <div className='texto'>
                            <p>Familiar</p>
                        </div>
                    </div>
                    <div className='carta'>
                        <img
                        src='/img/deporte.jpg'>
                        </img>
                        <div className='texto'>
                            <p>Deportivo</p>
                        </div>
                    </div>

                </div>
                
                <aside>
                    <h2>PROMOCION DEL MES</h2>
                    <h3>Proteinas</h3>
                    <img
                        src='/img/PROMO.jfif'width= '250' height='250px'>
                        </img>
                </aside>

            </div>
            <div className='descripcion'>
                <h2>¡Conoce Aprende y Crea Tu Alimentación Saludable!</h2>
                <p>Aprender a comer en familia, es mejorar nuestros hábitos alimenticios evitando el riesgo de tener o padecer algún tipo de enfermedad, debido a la complicación que trae consigo cambiar la alimentación cuando los demás no lo hacen o teniendo que cocinar para cada miembro de la familia. Lograr el peso ideal y composición corporal adecuado para cada uno es un compromiso que se aprende y se genera a través de la educación alimenticia familiar. </p>
            </div>

            <footer>
                <div className='footer_txt'>
            <h3>Síguenos en nuestras redes sociales @NutFam </h3>
            </div>
           <div className='footer_img'> 
            <img 
                    src='/img/face.jfif'width= '100' height='100' ></img>
            <img 
                    src='/img/insta.png'width= '100' height='100' ></img>
            <img 
                    src='/img/tuit.jpg'width= '100' height='100' ></img>                
                    </div>
            </footer>
        </div>
    );

}

export default Inicio;