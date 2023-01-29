import { CardHeader, Button, Flex, Box, Heading, Text, IconButton, Avatar, Card, SimpleGrid, CardBody, CardFooter, FormControl, FormLabel, Input } from '@chakra-ui/react';
import * as React from 'react';
import { useState } from 'react';


export default function AssignmentAdd(){
    const [title, setTitle] = useState("");
  const [descrp, setDescrp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit =  () => {
   
  };
  return (
    <form onSubmit={handleSubmit}>
  <FormControl>
    <FormLabel>title</FormLabel>
    <Input
      type="title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Enter your title"
    />
  </FormControl>
  <FormControl mt={4}>
    <FormLabel>descrption</FormLabel>
    <Input
      type="descrp"
      value={descrp}
      onChange={(e) => setDescrp(e.target.value)}
      placeholder="Enter your descrption"
    />
  </FormControl>
  <Button mt={4} color="teal" type="submit" isLoading={isSubmitting}>
    Add assignment
  </Button>
</form>
  )
}
