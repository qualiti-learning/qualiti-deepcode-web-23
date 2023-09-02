import { Button, useToast, Box } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Actions from '../../components/Actions';
import Page from '../../components/Page';
import ListView from '../../components/ListView';
import { fetcher } from '../../services/fetcher';

function Courses() {
  const [forceRefetch, setForceRefetch] = useState(0);
  const navigate = useNavigate();
  const toast = useToast();

  function onEdit(course) {
    navigate(`${course.id}/update`);
  }

  function onRemove(course) {
    fetcher(`course/${course.id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response.ok) {
        setForceRefetch(new Date().getTime());

        return toast({
          title: 'Course removed.',
          description: `We've removed the course "${course.name}" for you.`,
          status: 'success',
        });
      }

      toast({
        title: 'Unexpected Error',
        description: `Was not possible to remove "${course.name}", try again.`,
        status: 'error',
      });
    });
  }

  return (
    <Page
      title={
        <Box display='flex' justifyContent='space-between'>
          <span>Courses</span>
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
        entity='course'
        forceRefetch={forceRefetch}
      />
    </Page>
  );
}

export default Courses;
