import React, { useState } from 'react';
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
import type { LoginFormData } from '../../types/auth';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkLogin } from '../../redux/slices/auth/checkAuthThunk';
import { loginModal } from '../../redux/slices/auth/index';

export default function RegistrationModal(): React.JSX.Element {
  const { onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.authSlice.addLoginModalIsOpen);
  
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = Object.fromEntries(new FormData(e.currentTarget)) as LoginFormData;
          void dispatch(thunkLogin(formData));
          dispatch(loginModal());
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Вход</ModalHeader>
          <ModalCloseButton onClick={() => dispatch(loginModal())} />
          <ModalBody pb={6}>
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
              Войти
            </Button>
            <Button onClick={() => dispatch(loginModal())}>Закрыть</Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
