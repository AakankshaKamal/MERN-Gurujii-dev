import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react';
const CommentEdit = () => {
  const [content, setContent] = useState('');
  const onSubmitHandler = event => {
    event.preventDefault();
  };
  return (
    <Box>
      <form onSubmit={onSubmitHandler}>
        <FormControl>
          <FormLabel htmlFor='content'>Comment Content</FormLabel>
          <Input
            type='text'
            id='content'
            value={content}
            onChange={e => setContent(e.target.value)}
            aria-describedby='content-helper-text'
          />
        </FormControl>
      </form>
    </Box>
  );
};
export default CommentEdit;
