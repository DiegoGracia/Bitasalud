import React, { Component } from 'react';
import Slider from "react-slick"; 

//IMAGES
import mainImage from '../../assets/images/1.png';
import historyImage from '../../assets/images/2.png';
import benefitsBackground from '../../assets/images/3.png';
import benefitsImage from '../../assets/images/4.png';
import productsImage from '../../assets/images/6.png';
import galleryImage1 from '../../assets/images/7.png';
import galleryImage2 from '../../assets/images/9.png';
import galleryImage3 from '../../assets/images/8.png';
import galleryImage4 from '../../assets/images/10.png';
import catalogoImage from '../../assets/images/Woman.png';
import arrow from '../../assets/images/abajo.png';
import arrowBlack from '../../assets/images/arrow.png';
import arrowGrey from '../../assets/images/Flechablanca.png';
import message from '../../assets/images/message.png';
import user from '../../assets/images/user.png';
import whatsapp from '../../assets/images/whatsapp.png';

//SLICK CAROUSEL CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BenefitsNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <a className="horizontal__center benefitsNext" onClick={onClick}>Siguiente <img src={arrowBlack} alt="arrowBlack"/></a>
  );
}

function BenefitsPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <a className="benefitsPrev" onClick={onClick}><img src={arrowGrey} alt="arrowGrey"/></a>
  );
}

function ProductsNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <a className="productsNext" onClick={onClick}><img src={arrowGrey} alt="arrowGrey"/></a>
  );
}

function ProductsPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <a className="productsPrev" onClick={onClick}><img src={arrowGrey} alt="arrowGrey"/></a>
  );
}

export default class Home extends Component{

  render() {

    const mainSlider = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const benefitsSlider = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <BenefitsNextArrow />,
      prevArrow: <BenefitsPrevArrow />
    };

    const productsSlider = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <ProductsNextArrow />,
      prevArrow: <ProductsPrevArrow />
    };

    return (
      <>
        <div className="home">

          <div className="home__main">
            <Slider {...mainSlider}>

              <div className="carouselItem">
                <div className="row">

                  <div className="col col-lg-6 col-md-6 col-12">
                    <img src={mainImage} alt="mainImage1"/>
                  </div>

                  <div className="col col-lg-6 col-md-6 col-12">
                      <h1>
                        Bienestar
                        <span>en tu vida</span>
                      </h1>
                      <p>
                        En Bita Salud, tenemos la misión de ofrecer a nuestros clientes y sus familiar la facilidad de crear entornos de bienestar inspirados en la naturaleza pura, a través de artículos tecnológicos que ayudan a lograr una salud integral. Invierte en tu salud
                        Bita Salud te ofrece una gran variedad de productos para el hogar y para el uso diario que puedes integrar a tu vida: desde purificadores de agua y de aire, hasta masajeadores con tecnología magnética; todo enfocado a mejorar tu calidad de vida. Desarrolla tu negocio
                        Con Bita Salud, puedes desarrollar un negocio enfocado en la salud, el bienestar, y la calidad de vida de tus clientes, mientras tu y tu familia gozan de una economía más estable, sumada a los beneficios de los productos que elijas para uso personal.
                      </p>
                      <a className="main__button" href="">Texto</a>
                  </div>

                </div>
              </div>

              <div className="carouselItem">
                <div className="row">

                  <div className="col col-lg-6 col-md-6 col-12">
                    <img src={mainImage} alt="mainImage2"/>
                  </div>

                  <div className="col col-lg-6 col-md-6 col-12">
                      <h1>
                        Bienestar
                        <span>en tu vida</span>
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        In cupiditate dolores maxime maiores consequatur pariatur sapiente 
                        repellat quam, corporis aliquam, odio beatae 
                        quidem quod autem voluptatibus error labore. Mollitia, fugiat.
                      </p>
                      <a className="main__button" href="">Texto</a>
                  </div>

                </div>
              </div>

              <div className="carouselItem">
                <div className="row">

                  <div className="col col-lg-6 col-md-6 col-12">
                    <img src={mainImage} alt="mainImage3"/>
                  </div>

                  <div className="col col-lg-6 col-md-6 col-12">
                      <h1>
                        Bienestar
                        <span>en tu vida</span>
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        In cupiditate dolores maxime maiores consequatur pariatur sapiente 
                        repellat quam, corporis aliquam, odio beatae 
                        quidem quod autem voluptatibus error labore. Mollitia, fugiat.
                      </p>
                      <a className="main__button" href="">Texto</a>
                  </div>

                </div>
              </div>

            </Slider>    
          </div>

          <div className="home__history" id="history">

              <img className="background" src={historyImage} alt="historyImage"/>

              <div className="home__history__container">
                <h2>
                  Nosotros
                  <span>historia</span>
                </h2>
                <p>
                  Bita Salud nace en (AÑO) encabezado por Fabela Legaspi, con el propósito de llevar productos con tecnología de punta a todas las familias, con fin de ayudarles a mejorar su calidad de vida. Bita Salud es un distribuidor oficial en México y Chile, de la marca japonesa Nikken, reconocida mundialmente por sus desarrollos tecnológicos.
                </p>
                <img className="horizontal__center" src={arrow} alt="arrow"/>
              </div>

          </div>

          <div className="home__benefits" id="benefits">

            <img className="background" src={benefitsBackground} alt="benefitsBackground"/>

            <Slider className="carousel" {...benefitsSlider}>

              <div className="carouselItem">
                <div className="row">

                  <div className="col col-lg-6 col-md-6 col-12">
                      <h1>Kenki Air</h1>
                      <h3>Purifier</h3>
                      <p>
                        Lleva a tu hogar el placer de respirar aire puro y energizado con Kenko Air: el increíble purificador de aire de Nikken que muchísimas familias ya están disfrutando. Deja de sufrir por alergias y males respiratorios en tu propio hogar, y comienza a respirar la verdadera pureza con Kenko Air.
                      </p>
                      <a className="main__button" href="">Texto</a>
                  </div>

                  <div className="col col-lg-6 col-md-6 col-12">
                    <img src={benefitsImage} alt="benefitsImage1"/>
                  </div>

                </div>
              </div>

              <div className="carouselItem">
                <div className="row">

                  <div className="col col-lg-6 col-md-6 col-12">
                      <h1>Waterfall</h1>
                      {/* <h3>Purifier</h3> */}
                      <p>
                        Brinda a tu cuerpo agua refrescante, revitalizante, y muy saludable con este purificador de agua que la llena de minerales naturales que tu cuerpo necesita, y además la carga con iones negativos para brindarte una hidratación muy superior al agua regular embotellada. ¡Un producto de verdad espectacular!
                      </p>
                      <a className="main__button" href="">Texto</a>
                  </div>

                  <div className="col col-lg-6 col-md-6 col-12">
                    <img src={benefitsImage} alt="benefitsImage2"/>
                  </div>

                </div>
              </div>
              
              <div className="carouselItem">
                <div className="row">

                  <div className="col col-lg-6 col-md-6 col-12">
                      <h1>Joyería</h1>
                      {/* <h3>Purifier</h3> */}
                      <p>
                        Un accesorio que no sólo te hace lucir en tendencia, sino que beneficia tu salud y te ayuda con la prevención de malestares físicos. Collares, pendientes, y brazaletes, con efectos desinflamatorios y analgésicos, y tecnología magnética que ayuda a la desintoxicación. Cada accesorio tiene efectos distintos, pruébalos y notarás lo bien que te hacen sentir. 
                      </p>
                      <a className="main__button" href="">Texto</a>
                  </div>

                  <div className="col col-lg-6 col-md-6 col-12">
                    <img src={benefitsImage} alt="benefitsImage3"/>
                  </div>

                </div>
              </div>
          
            </Slider>
          </div>

          <div className="home__products" id="products">
            <h2>Los más vendidos</h2>
            <Slider {...productsSlider}>
              
              <div className="carouselItem">      
                <a href=""> <span>Ver mas</span> </a>
                <div className="carouselItem__image">
                  <img src={productsImage} alt="productsImage1"/>
                </div>
              </div>

              <div className="carouselItem">      
                <a href=""> <span>Ver mas</span> </a>
                <div className="carouselItem__image">
                  <img src={productsImage} alt="productsImage2"/>
                </div>
              </div>

              <div className="carouselItem">      
                <a href=""> <span>Ver mas</span> </a>
                <div className="carouselItem__image">
                  <img src={productsImage} alt="productsImage3"/>
                </div>
              </div>

              <div className="carouselItem">      
                <a href=""> <span>Ver mas</span> </a>
                <div className="carouselItem__image">
                  <img src={productsImage} alt="productsImag4"/>
                </div>
              </div>
            </Slider>
          </div>
          <div className="container">
            <h2 style={{display:"flex", justifyContent:"center"}} >Testimonios</h2>
            <h6>Las siguientes son experiencias personales de algunos de nuestros usuarios de producto, Nikken se reserva el derecho de interpretación y estas han sido suministradas bajo su consentimiento.</h6>
            <div class="container" style={{display:"flex", flexFlow:"row wrap"}} >
              <p>"Mi Familia usa Nikken desde hace 15 años, en la Ciudad de Mexico (esta información se las doy para que ponderen la mala calidad del agua), estos 15 años, nunca nos ha causado problema beber el agua NIKKEN, ya nos casamos mi hermana y yo, el filtro de mis Padres está perfecto, y cada una compró para su casa un filtro, los bebés de mi hermana beben agua NIKKEN (su pediatra lo recomendó desde el nacimiento para preparar la fórmula) y próximamente mi bebé también beberá agua NIKKEN. Soy Médico con especialidad en Otorrinolaringología, y lo super recomiendo."</p>
              <p>"Mi nombre es María del Carmen Eyzaguirre, soy de Chile y me traje el PI WATER desde Colombia, hace 6 meses. Tuve la suerte de probar estos productos allá y realmente, el tomar agua pura, me cambió la vida. Yo no tomaba agua porque me caía mal. Ahora no dejo de hacerlo, Es realmente impresionante este filtro. Lo recomiendo a ojos cerrados."</p>
              <p>"Desde siempre me consideré una persona saludable, porque disfruto haciendo deporte, como sano, cultivo mis emociones, duermo bien, hasta que conocí Nikken. Era una fase de apretada agenda laboral, con ataques de ansiedad incluidas, al punto de ir al cardiólogo (quien me recomendó dejar mi empleo y obligó a pensar y tomarlo en serio)... Empecé a consumir el agua del PiWater, con resultados que me acompañan hasta hoy (28 meses después): en 45 días se me dejó de caer el cabello, en 60 días reguló mi presión arterial y en 120 días había dejado de fumar. Todo esto ocurrió sin darme cuenta, cada resultado me lo hicieron ver personas ajenas a mí, mi peluquera mi médico y una amiga. Eliminó mis procesos de ansiedad por la vida ajetreada! Eso carece de precio, mi Calidad de Vida se ha potenciado."</p>
              <p>"Excelente tamaño y el sabor del agua es bueno."</p>
            </div>
          </div>
          <div className="home__gallery" id="gallery">
            <div className="row">
                <div className="col col-lg-7 col-12">
                  <img src={galleryImage1} alt="galleryImage1"/>
                  <img src={galleryImage2} alt="galleryImage2"/>
                </div>
                <div className="col col-lg-5 col-12">
                  <img src={galleryImage3} alt="galleryImage3"/>
                  <img src={galleryImage4} alt="galleryImage4"/>
                </div>
            </div>
          </div>
          <div className="home__catalog" id="catalog">

            <img className="background" src={historyImage} alt="image"/>

            <div className="row">

              <div className="col col-lg-6 col-md-6 col-12">
                <img src={catalogoImage} alt="image"/>
              </div>

              <div className="col col-lg-6 col-md-6 col-12">

                <h1>Catálogo</h1>

                <div className="margin--mod">
                  <h4>Mexico</h4>
                  <a className="main__button" href="">Consultar</a>
                </div>
               
                <div className="margin--mod">
                  <h4>Chile</h4>
                  <a className="main__button" href="">Consultar</a>
                </div>  

                <h2>Siempre lo mejor de ti</h2>

                <div className="social">
                  <div className="d-flex">
                    <img src={user} alt=""/>
                    <a href="">Fabela Legaspi</a>
                  </div>

                  <div className="d-flex">
                    <img src={message} alt=""/>
                    <a href="">bitasalud@gmail.com</a>
                  </div>
                  
                  <div className="d-flex">
                    <img src={whatsapp} alt=""/>
                    <a href="">56 9 7905 4317</a>
                  </div>
                </div>
             
              </div>

            </div>
            
          </div>

        </div>
      </>
    )
  }
}
