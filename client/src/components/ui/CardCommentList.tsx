import React, { useEffect } from 'react';
import { Grid } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getCommentsThunk } from '../../redux/slices/comment/commentThunkAction';
import CardComment from './CardComent';

function CardCommentList(): JSX.Element {
  const comment = useAppSelector((store) => store.commentSlice);
  const dispatch = useAppDispatch();

  const { id } = useParams();
  useEffect(() => {
    void dispatch(getCommentsThunk(Number(id)));
  }, []);

  return (
    <Grid templateColumns="repeat(1, 1fr)" gap={3} marginTop={4} maxW="620px">
    {comment.map((el) => (
      <Grid key={el.id} item colSpan={4.5}>
        <CardComment oneComment={el} />
      </Grid>
    ))}
  </Grid>
  
  );
}

export default CardCommentList;
