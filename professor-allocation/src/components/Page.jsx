import { Box, Container, Heading } from '@chakra-ui/react';

function Page({ children, title }) {
  return (
    <Container p={8} maxW='7xl'>
      <Heading>{title}</Heading>

      <Box as='section'>{children}</Box>
    </Container>
  );
}

export default Page;
