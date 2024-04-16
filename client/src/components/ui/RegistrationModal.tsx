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
} from '@chakra-ui/react';
import type { SignupFormData } from '../../types/auth';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkSignup } from '../../redux/slices/auth/checkAuthThunk';
import { registrModal } from '../../redux/slices/auth';

export default function RegistrationModal(): React.JSX.Element {
  const {onClose} = useDisclosure();
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.authSlice.addRegistrationModalIsOpen);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = Object.fromEntries(new FormData(e.currentTarget)) as SignupFormData;
          void dispatch(thunkSignup(formData));
          dispatch(registrModal());
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Регистрация</ModalHeader>
          <ModalCloseButton onClick={() => dispatch(registrModal())} />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Имя</FormLabel>
              <Input ref={initialRef} name="name" type="text" placeholder="Введите имя" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Почта</FormLabel>
              <Input placeholder="Введите почту" type="email" name="email" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Пароль</FormLabel>
              <Input placeholder="Введите пароль" type="password" name="password" />
            </FormControl>

            {/* <FormControl mt={4}>
              <FormLabel>Повторение пароля</FormLabel>
              <Input placeholder="Повторите пароль" />
            </FormControl> */}
          </ModalBody>

          <ModalFooter>
            <Button type="submit" colorScheme="blue" mr={3}>
              Зарегистрироваться
            </Button>
            <Button onClick={() => dispatch(registrModal())}>Закрыть</Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
