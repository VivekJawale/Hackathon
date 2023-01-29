import { CardHeader,Button, Flex, Box, Heading, Text, IconButton, Avatar, Card, SimpleGrid, CardBody, CardFooter } from '@chakra-ui/react';
import * as React from 'react';


export default function Assignment(){
  return (
    <SimpleGrid mt="10px" spacing={4} templateColumns='repeat(auto-fill, minmax(230px, 1fr))'>
  <Card>
    <CardHeader>
      <Heading size='md'> title</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button m="10px">edit</Button>
      <Button m={'10px'}>delete</Button>
      <Button m={'10px'}>status</Button>
    </CardFooter>
  </Card>
 
</SimpleGrid>
  )
}
