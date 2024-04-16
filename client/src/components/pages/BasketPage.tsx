import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import Carousel from 'react-bootstrap/Carousel';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import PayForm from '../ui/PayForm';


import { thunkBasDel, thunkBasketLoad, thunkEditCountPay } from '../../redux/slices/tour/createAsyncThunk';

export default function BasketPage(): JSX.Element {
  const [show, setShow] = useState(false);
  const [dataPage, setDataPage] = useState(0);
  const auth = useAppSelector((store) => store.authSlice.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(thunkBasketLoad());
  }, []);
  const selector = useAppSelector((state) => state.basketSlice.basket);

  console.log(selector, 222222);
  const handleClickButton = (): void => {
    setDataPage((prev) => prev - 1);
    void dispatch(thunkEditCountPay(Number(id)));
  };
  return (
    <div style={{ display: 'flex', gap: '10px 10px', marginTop: '10px'}}>
      {selector?.map((tour, index) => (

        <Card key={tour.id} maxW="sm" style={{ height: '700px',  backgroundColor: '#DCDCDC'}}>

          <CardBody>
            <Stack mt="6" spacing="3">
              {/* <img src={tour.Tour.PhotoTour.img1} alt="123" /> */}
              <Carousel style={{ width: '350px', height: '200px' }}>
                <Carousel.Item style={{ width: '350px', height: '200px' }}>
                  <img src={tour.Tour.PhotoTour.img1} />
                </Carousel.Item>
                <Carousel.Item style={{ width: '350px', height: '200px' }}>
                  <img src={tour.Tour.PhotoTour.img2} />
                </Carousel.Item>
                <Carousel.Item style={{ width: '350px', height: '200px' }}>
                  <img src={tour.Tour.PhotoTour.img3} />
                </Carousel.Item>
                <Carousel.Item style={{ width: '350px', height: '200px' }}>
                  <img src={tour.Tour.PhotoTour.img4} />
                </Carousel.Item>
              </Carousel>
              <Heading size="md">{tour.Tour.name}</Heading>
              <Text>{tour.Tour.body}</Text>
              <Text color="blue.600" fontSize="2xl">
                {tour.Tour.price}₽
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">

              <Button
                onClick={() => setShow(true)}
                colorScheme="green"
                variant='ghost'
              
                px={6}
                
                my={4}
                style={{marginTop: '-10px'}}
              >

                Купить
              </Button>

              <PayForm

                show={show}
                handlerClose={() => setShow(false)}
                handleClickButton={handleClickButton}
              />


              <Button colorScheme="red" variant='ghost' onClick={() => void dispatch(thunkBasDel(tour.tourId))} style={{marginTop: '-10px'}}>
                Удалить
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
