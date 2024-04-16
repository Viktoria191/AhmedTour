import React from 'react';
import {
  Input,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Select,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { editTourModal } from '../../redux/slices/tour/tourSlice';
import { thunkEditTour } from '../../redux/slices/tour/createAsyncThunk';
import type { EditTourFormData } from '../../types/tour/tour';
// import { AddTourFormData } from '../../types/tour/tour';

export default function EditTourModal(): React.JSX.Element {
  const { onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.tourSlice.editTourModalIsOpen);
  const tour = useAppSelector((state) => state.tourSlice.selectedTour);
  console.log(tour);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
      <form
        onSubmit={(e) => {            
          e.preventDefault();
          const formData = Object.fromEntries(new FormData(e.currentTarget)) as EditTourFormData;
          console.log(formData, '=====================');
          if (tour) {
            void dispatch(thunkEditTour({ formData, id: tour?.id }));
          }
          dispatch(editTourModal())
        }}
      >
        <ModalContent>
          <ModalHeader>Изменитьтур</ModalHeader>
          <ModalCloseButton onClick={() => dispatch(editTourModal())} />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>Название тура</FormLabel>
              <Input placeholder="Название" type="text" name="name" defaultValue={tour?.name} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Краткое описание</FormLabel>
              <Input placeholder="Описание" type="text" name="body" defaultValue={tour?.body} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Опписание тура</FormLabel>
              <Input
                placeholder="Полное описание"
                type="text"
                name="description"
                defaultValue={tour?.description}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Цена</FormLabel>
              <Input placeholder="Цена" type="number" name="price" defaultValue={tour?.price} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" colorScheme="green" mr={3}>
              Изменить
            </Button>
            <Button onClick={() => dispatch(editTourModal())}>Закрыть</Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
