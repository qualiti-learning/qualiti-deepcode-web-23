import { Button, useToast, Box } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Page from '../../components/Page';
import ListView from '../../components/ListView';
import { fetcher } from '../../services/fetcher';
import Actions from '../../components/Actions';

function Professors() {
  const [forceRefetch, setForceRefetch] = useState(0);
  const navigate = useNavigate();

  const toast = useToast();

  function onEdit(professor) {
    navigate(`${professor.id}/update`);
  }

  function onRemove(professor) {
    fetcher(`professor/${professor.id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response.ok) {
        setForceRefetch(new Date().getTime());

        return toast({
          title: 'Professor removed.',
          description: `We've removed the professor "${professor.name}" for you.`,
          status: 'success',
        });
      }

      toast({
        title: 'Unexpected Error',
        description: `Was not possible to remove "${professor.name}", try again.`,
        status: 'error',
      });
    });
  }

  return (
    <Page
      title={
        <Box display='flex' justifyContent='space-between'>
          <span>Professors</span>

          <Button colorScheme='blue' onClick={() => navigate('create')}>
            New
          </Button>
        </Box>
      }
    >
      <ListView
        columns={[
          {
            key: 'id',
            label: 'ID',
          },
          {
            key: 'name',
            label: 'Name',
          },
          {
            key: 'cpf',
            label: 'CPF',
          },
          {
            key: 'departament',
            label: 'Departament',
            render: (departament) => departament?.name,
          },
          {
            key: 'actions',
            label: 'Actions',
            render: (action, row) => {
              return (
                <Actions
                  actions={[
                    { name: 'Edit', onClick: () => onEdit(row) },
                    { name: 'Remove', onClick: () => onRemove(row) },
                  ]}
                />
              );
            },
          },
        ]}
        entity='professor'
        forceRefetch={forceRefetch}
      />
    </Page>
  );
}

export default Professors;
