import React, { useEffect } from 'react';
import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkAllTourLoad } from '../../redux/slices/history/createAsyncThunk';

export default function AdminPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const selector = useAppSelector((store) => store.historySlice.history);

  console.log(selector, '----');

  useEffect(() => {
    void dispatch(thunkAllTourLoad());
  }, []);

  return (
    // <table style={{ backgroundColor: 'white', borderRadius: '15px 15px 15px 15px' }}>
    //   <thead>
    //     <tr style={{ backgroundColor: 'black', borderRadius: '15px 15px 0 0', color: 'white' }}>
    //       <th style={{ borderRadius: '8px 0 0 0'}}> Почта пользователя</th>
    //       <th>Название тура</th>
    //       <th>Цена</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {selector.map((tour) => (
    //       <tr key={tour.id}>
    //         <td>{tour.User.email}</td>
    //         <td>{tour.Tour.name}</td>
    //         <td>{tour.Tour.price} ₽</td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
    <TableContainer style={{backgroundColor: 'black', opacity: '0.6'}}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th style={{color: 'white'}}>Почта пользователя</Th>
            <Th style={{color: 'white'}}>Название тура</Th>
            <Th isNumeric style={{color: 'white'}}>Цена</Th>
          </Tr>
        </Thead>
        <Tbody>
          {selector.map((tour) => (
            <Tr>
              <Td style={{color: 'white'}}>{tour.User.email}</Td>
              <Td style={{color: 'white'}}>{tour.Tour.name}</Td>
              <Td isNumeric style={{color: 'white'}}>{tour.Tour.price} ₽</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
