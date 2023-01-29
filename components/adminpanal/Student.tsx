import { CardHeader, Flex, Box, Heading, Text, IconButton, Avatar, Card } from '@chakra-ui/react';
import * as React from 'react';


export default function Student(){
  return (
    <Card maxW='sm' w="30%">
    <CardHeader>
    <Flex >
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

        <Box>
          <Heading size='sm'>Segun Adebayo</Heading>
          <Text>Creator, Chakra UI</Text>
        </Box>
      </Flex>
    
    </Flex>
  </CardHeader>
  </Card>
  )
}
