import React from 'react';
import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { Box, Container, Text } from '@chakra-ui/layout';
import type { CommentType } from '../../types/comment/comment';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { deleteCommentThunk } from '../../redux/slices/comment/commentThunkAction';

export type CardCommentPropsType = {
  oneComment: CommentType;
};

function CardComment({ oneComment }: CardCommentPropsType): JSX.Element {
  const auth = useAppSelector((store) => store.authSlice.user);
  const dispatch = useAppDispatch();

  return (
    <Container maxW="container.xl" style={{ marginLeft: '-3px'}} >
      <Box
        border="1px"
        borderColor="gray.200"
        borderRadius="md"
        overflow="hidden"
        display="flex"
        flexDirection="column"
        p={4}
      >
        <Text fontSize="xl" fontWeight="bold" maxWidth="600px" mt={2} style={{color: 'white'}}>
          Имя пользователя: {oneComment?.User?.name}
        </Text>
        <Text fontSize="md" mt={1} style={{color: 'white'}}>
          Комментарий: {oneComment?.text}
        </Text>
        {auth.roleId === 1 ? (
          <Button
            variant="outline"
            colorScheme="red"
            onClick={() => void dispatch(deleteCommentThunk({ id: oneComment.id }))}
          >
            Удалить
          </Button>
        ) : (
          <div />
        )}
      </Box>
    </Container>
  );
}

export default CardComment;
