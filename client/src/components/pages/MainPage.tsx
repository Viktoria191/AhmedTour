import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import CarouselCard from '../ui/CarouselCard';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import { CardBody, Heading, Stack, Text, Card } from '@chakra-ui/react';
import { useAppSelector } from '../../redux/hooks';

export default function MainPage(): JSX.Element {
  const regions = useAppSelector((store) => store.regionSlice.regions);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const imgStyle = {
    width: '800px', // Задайте фиксированную ширину
    height: '570px',
    justifyContent: 'space-around',
    borderRadius: '19px',
    backgroundColor: 'rgba(0.5)', // Используйте 0 для полной прозрачности
    filter: 'brightness(60%)',
    border: '3px solid #fff', // Белая рамка шириной 2 пикселя
    transition: 'transform 0.3s ease-in-out', // Плавное изменение размера при наведении
    cursor: 'pointer', // Курсор при наведении
  };

  const hoverStyle = {
    filter: 'brightness(100%)',
  };

  const regionStyles = {
    position: 'absolute',
    top: '500px',
    // right: '6px',
    color: 'white',
    width: '800px',
    height: '726px',
    display: 'flex',
    justifyContent: 'center',

    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)',
    fontSize: '45px',
    fontWeight: 'bold',
  };

  return (
    <>
      {/* <div style={{ position: 'relative', width: '1300px', textAlign: 'center' }}>
        <video autoPlay muted loop style={{borderRadius: '15px 15px 15px 15px', border: '2px solid black', height: '700px', width: '1300px'}}>
          <source src="/src/assets/IMG_0563.MP4" />
        </video>
        <p
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '10px',
          color: 'orange',
        }}
      >
        Наш проект решает множество проблем с поиском  незабываемых туров по Северному Кавказу
      </p>
      </div> */}

      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
        bg="transparent"
        style={{
          height: '410px',
          borderRadius: '15px 15px 15px 15px',
          border: '2px solid black',
          marginTop: '10px',
        }}
      >
        <video
          autoPlay
          muted
          loop
          style={{
            borderRadius: '15px 0 0 15px',
            border: '2px solid black',
            height: '410px',
            width: '800px',
          }}
        >
          <source src="/src/assets/IMG_0563.MP4" />
        </video>

        <Stack style={{backgroundColor: 'black', opacity: '0.8'}}>
          <CardBody>
            <Heading size="md" style={{color: 'white', marginLeft: '210px'}}>AxmedTyp</Heading>

            <Text py="2" style={{color: 'white'}}>
              Кавказ – это уникальный регион со своей яркой культурой, богатой историей и
              захватывающей природой. Наш проект призван познакомить путешественников со всеми его
              удивительными аспектами.
            </Text>
            <Text py="2" style={{color: 'white'}}>
              Вы сможете отправиться на пешие походы по знаменитым кавказским хребтам, насладиться
              панорамными видами с высоких пиков, искупаться в чистейших горных озерах и реках. А
              наши экскурсии по историческим городам и древним крепостям позволят вам окунуться во
              времена давно минувших эпох и увидеть следы исламской, христианской и языческой
              религий, объединенных на этих территориях.
            </Text>
          </CardBody>
        </Stack>
        <div
          style={{
            position: 'absolute',
            width: '73px',
            marginLeft: '652px',
            marginTop: '14px',
          }}
        >
          <img src="/src/assets/photo_2023-12-15_10-55-02(1).png" alt='h'/>
        </div>
      </Card>

      <Carousel infinite autoPlay autoPlaySpeed={3000} responsive={responsive}>
        {regions.map((region) => (
          <div key={region.id} style={{ marginBottom: '230px' }}>
            <Link to={`/region/${region.id}`} style={{ textDecoration: 'none' }}>
              <img key={region.id} src={region.img} alt="Img" style={imgStyle} />
              <h1 style={regionStyles}>{`${region.name}`}</h1>
              {/* <h5 style={regionStyles}>{`${region.description}`}</h5> */}
            </Link>
          </div>
        ))}
      </Carousel>
    </>
  );
}
