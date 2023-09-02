import {
  Input,
  FormControl,
  FormLabel,
  ButtonGroup,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Page from '../../components/Page';
import { fetcher } from '../../services/fetcher';

function CourseForm() {
  const [name, setName] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();

  const isUpdate = !!id;

  const onSave = async () => {
    setSubmitting(true);

    const response = await fetcher(`/course/${id || ''}`, {
      body: JSON.stringify({
        name,
      }),
      method: isUpdate ? 'PATCH' : 'POST',
    });

    if (response.ok) {
      setSubmitting(false);

      toast({
        title: `Course ${isUpdate ? 'Update' : 'Create'}.`,
        description: `We've ${
          isUpdate ? 'Update' : 'Create'
        } course "${name}" for you.`,
        status: 'success',
      });

      return navigate('..');
    }

    setSubmitting(false);

    toast({
      title: 'Unexpected Error',
      description: `Was not possible to save "${name}", try again.`,
      status: 'error',
    });
  };

  useEffect(() => {
    if (id) {
      fetcher(`/course/${id}`)
        .then((response) => response.json())
        .then((data) => setName(data.name));
    }
  }, [id]);

  return (
    <Page title={`${isUpdate ? 'Update' : 'Create'} Course`}>
      <FormControl my={4}>
        <FormLabel>Name</FormLabel>
        <Input
          onChange={(event) => setName(event.target.value)}
          type='text'
          value={name}
        />
      </FormControl>

      <ButtonGroup>
        <Button
          colorScheme='blue'
          isLoading={submitting}
          isDisabled={!name.trim().length}
          onClick={onSave}
        >
          Save
        </Button>
        <Button onClick={() => navigate('..')}>Cancel</Button>
      </ButtonGroup>
    </Page>
  );
}

export default CourseForm;
