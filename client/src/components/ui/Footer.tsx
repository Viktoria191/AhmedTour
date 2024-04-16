import type { ReactNode } from 'react';
import React from 'react';
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function SocialButton({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      as="a"
      href={href}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
}

export default function Footer(): JSX.Element {
  return (
    <Box
      bg={useColorModeValue('#363030')}
      color={useColorModeValue('white')}
      style={{ borderRadius: '15px 15px 0 0', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.7)' }}
    >
      <Container
        as={Stack}
        maxW="6xl"
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
        marginTop="auto"
      >
        <Text style={{marginTop: '10px'}}>© 2023</Text>
        <Stack direction="row" spacing={6}>
          <SocialButton label="Twitter" href="#">
            <FaTwitter />
          </SocialButton>
          <SocialButton label="YouTube" href="#">
            <FaYoutube />
          </SocialButton>
          <SocialButton label="Instagram" href="#">
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
