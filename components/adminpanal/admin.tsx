import { Button, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import * as React from "react";

import routes from "./routes";
import FromData from "../FromData";
import { useRouter } from "next/router";
import { useState } from "react";
import Teacher from "./Teacher";
import Assignment from "./Assignment";
import AssignmentAdd from "./AssignmentAdd";
import Student from "./Student";
// routes.setAssetPrefix(process.env.ASSET_PREFIX);
export function Admin() {
  const router = useRouter();
  const [teacher, setTaecher] = useState(false);
  const [student, setStudent] = useState(false);
  const [assignment, setAssignmemt] = useState(false);
  const [assignmentAdd, setAssignmentAdd] = useState(false);
  const [taecherAdd, setTaecherAdd] = useState(false);
  const [studentAdd, setStudentAdd] = useState(false);
  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      //   h='200px'
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="orange.300" area={"header"}>
        <Heading textAlign={"center"}> Adminpenal</Heading>
      </GridItem>
      <GridItem pl="2" bg="pink.300" area={"nav"} h="650px">
        <Flex
          w="90%"
          rowGap={4}
          direction={"column"}
          justifyContent="space-evenly"
        >
          <Button mt="10px">Admin</Button>
          <Button
            onClick={() => {
              setTaecher(!teacher);
              setStudentAdd(false);
              setStudent(false);
              setTaecherAdd(false);
              setAssignmentAdd(false);
              setAssignmemt(false);
            }}
          >
            Teacher
          </Button>
          <Button
            onClick={() => {
              setStudentAdd(!studentAdd);
              setTaecher(false);
              setStudentAdd(false);
              setStudent(false);
            //   setTaecherAdd(taecherAdd);
              setAssignmentAdd(false);
              setAssignmemt(false);
            }}
          >
            StudentAdd
          </Button>
          <Button
            onClick={() => {
              setStudent(!student);
              setTaecher(false);
              setStudentAdd(false);
              setStudent(false);
              setTaecherAdd(false);
              setAssignmentAdd(false);
              setAssignmemt(false);
            }}
          >
            Student
          </Button>
          <Button
            onClick={() => {
              setTaecherAdd(!taecherAdd);
              setTaecher(false);
              setStudentAdd(false);
              setStudent(false);
            //   setTaecherAdd(taecherAdd);
              setAssignmentAdd(false);
              setAssignmemt(false);
            }}
          >
            TaecherAdd
          </Button>
          <Button
            onClick={() => {
              setAssignmemt(!assignment);
              setTaecher(false);
              setStudentAdd(false);
              setStudent(false);
              setTaecherAdd(false);
              setAssignmentAdd(false);
            }}
          >
            assignment
          </Button>
          <Button
            onClick={() => {
              setAssignmentAdd(!assignmentAdd);
              setTaecher(false);
              setStudentAdd(false);
              setStudent(false);
              setTaecherAdd(false);
              setAssignmemt(false);
            //   setAssignmentAdd(assignmentAdd);
            }}
          >
            AddAssignment
          </Button>
        </Flex>
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        {teacher && <Teacher />}
        {student && <Student />}
        {assignmentAdd && <AssignmentAdd />}
        {assignment && <Assignment />}
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        copyrights2023
      </GridItem>
    </Grid>
  );
}
