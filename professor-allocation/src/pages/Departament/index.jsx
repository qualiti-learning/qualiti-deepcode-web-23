import { Button, useToast, Box } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Actions from '../../components/Actions';
import Page from '../../components/Page';
import ListView from '../../components/ListView';
import { fetcher } from '../../services/fetcher';

function Departaments() {
  const [forceRefetch, setForceRefetch] = useState(0);
  const navigate = useNavigate();

  const toast = useToast();

  function onEdit(departament) {
    navigate(`${departament.id}/update`);
  }

  function onRemove(departament) {
    fetcher(`departament/${departament.id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response.ok) {
        setForceRefetch(new Date().getTime());

        return toast({
          title: 'Departament removed.',
          description: `We've removed the departament "${departament.name}" for you.`,
          status: 'success',
        });
      }

      toast({
        title: 'Unexpected Error',
        description: `Was not possible to remove "${departament.name}", try again.`,
        status: 'error',
      });
    });
  }

  return (
    <Page
      title={
        <Box display='flex' justifyContent='space-between'>
          <span>Departaments</span>
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
            key: 'actions',
            label: 'Actions',
            render: (action, row) => (
              <Actions
                actions={[
                  { name: 'Edit', onClick: () => onEdit(row) },
                  { name: 'Remove', onClick: () => onRemove(row) },
                ]}
              />
            ),
          },
        ]}
        entity='departament'
        forceRefetch={forceRefetch}
      />
    </Page>
  );
}

export default Departaments;
