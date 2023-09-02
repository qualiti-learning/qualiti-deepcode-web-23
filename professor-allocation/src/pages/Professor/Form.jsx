import {
  Input,
  FormControl,
  FormLabel,
  ButtonGroup,
  Button,
  useToast,
  Select,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Page from '../../components/Page';
import { fetcher } from '../../services/fetcher';

function ProfessorForm() {
  const [form, setForm] = useState({ cpf: '', departamentId: '', name: '' });
  const [departaments, setDepartaments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();

  const isUpdate = !!id;

  const onSave = async () => {
    setSubmitting(true);

    const newForm = {
      ...form,
      departament: departaments.find(
        ({ id }) => id === Number(form.departamentId)
      ),
    };

    const response = await fetcher(`/professor/${id || ''}`, {
      body: JSON.stringify(newForm),
      method: isUpdate ? 'PATCH' : 'POST',
    });

    if (response.ok) {
      setSubmitting(false);

      toast({
        title: `Professor ${isUpdate ? 'Update' : 'Create'}.`,
        description: `We've ${
          isUpdate ? 'Update' : 'Create'
        } professor for you.`,
        status: 'success',
      });

      return navigate('..');
    }

    setSubmitting(false);

    toast({
      title: 'Unexpected Error',
      description: `Was not possible to save, try again.`,
      status: 'error',
    });
  };

  useEffect(() => {
    if (id) {
      fetcher(`/professor/${id}`)
        .then((response) => response.json())
        .then((data) => setForm(data));
    }
  }, [id]);

  useEffect(() => {
    fetcher('/departament')
      .then((response) => response.json())
      .then((data) => setDepartaments(data));
  }, []);

  return (
    <Page title={`${isUpdate ? 'Update' : 'Create'} Professor`}>
      <FormControl my={4}>
        <FormLabel>Name</FormLabel>
        <Input
          onChange={(event) => setForm({ ...form, name: event.target.value })}
          type='text'
          value={form.name}
        />
      </FormControl>

      <FormControl my={4}>
        <FormLabel>CPF</FormLabel>
        <Input
          onChange={(event) => setForm({ ...form, cpf: event.target.value })}
          type='text'
          value={form.cpf}
        />
      </FormControl>

      <FormControl my={4}>
        <FormLabel>Departament</FormLabel>
        <Select
          onChange={(event) =>
            setForm({ ...form, departamentId: event.target.value })
          }
          type='text'
          value={form.departamentId}
        >
          {departaments.map((departament, index) => (
            <option key={index} value={departament.id}>
              {departament.name}
            </option>
          ))}
        </Select>
      </FormControl>

      <ButtonGroup>
        <Button
          colorScheme='blue'
          isLoading={submitting}
          isDisabled={!form.name.trim().length || !form.cpf.trim().length}
          onClick={onSave}
        >
          Save
        </Button>
        <Button onClick={() => navigate('..')}>Cancel</Button>
      </ButtonGroup>
    </Page>
  );
}

export default ProfessorForm;
