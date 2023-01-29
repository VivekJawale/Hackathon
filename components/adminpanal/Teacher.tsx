import { CardHeader, Flex, Box, Heading, Text, IconButton, Avatar, Card, SimpleGrid } from '@chakra-ui/react';
import * as React from 'react';


export default function Teacher(){
  return (

     <Box> <Heading> Teacher </Heading>
    <SimpleGrid mt="10px" spacing={4} templateColumns='repeat(auto-fill, minmax(230px, 1fr))'>
       
    <Card maxW='sm' w="100%">
    <CardHeader>
    <Flex >
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

        <Box>
          <Heading size='md'>Segun Adebayo</Heading>
          <Text>Creator, Chakra UI</Text>
        </Box>
      </Flex>
    
    </Flex>
  </CardHeader>
  </Card>
  </SimpleGrid>
  </Box>
  )
}
