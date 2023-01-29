// import { Box } from '@chakra-ui/react';
// import * as React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button
} from "@chakra-ui/react";
import { useState } from "react";
export default function FromData () {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit =  () => {
    // e.preventDefault();
    // setIsSubmitting(true);
    // try {
    //   await signup(email, password);
    //   // navigate to the dashboard or display a success message
    // } catch (error) {
    //   // handle the error
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return ( <form onSubmit={handleSubmit}>
  <FormControl>
    <FormLabel>name</FormLabel>
    <Input
      type="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
    />
  </FormControl>
  <FormControl mt={4}>
    <FormLabel>Password</FormLabel>
    <Input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Enter your age"
    />
  </FormControl>
  <Button mt={4} variant="teal" type="submit" isLoading={isSubmitting}>
    Sign Up
  </Button>
</form>
);
}
