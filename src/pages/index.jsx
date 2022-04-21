// chakra ui components
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Heading,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Text,
  Thead,
  Th,
  Tr,
  VStack,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";

// service import
import Environments from "../services/environments";

// copy to clipboard function import
import { CopyToClipboard } from "react-copy-to-clipboard";

// react query imports
import { useQuery, useMutation } from "react-query";

export default function index() {
  // service import
  const env = new Environments();

  // react query functions
  // getting environments function
  const { data, isLoading } = useQuery("deployments", env.getEnvironments);

  // get environment status function
  const envStatus = useQuery("env-status", env.getEnvironmentsStatus);

  // making environment status inactive
  const makeInactive = useMutation(env.changeStatus, {
    onError: (err) => {
      alert(err);
    },
  });

  // delete environment
  const deleteEnvironment = useMutation(env.deleteEnvironment, {
    onError: (err) => {
      alert(err);
    },
  });

  // data
  let theIds = data?.data;

  // debug
  console.log(theIds);

  // button functions
  const makeInactiveFunc = () => {
    let eachTheIds = each.id;
    let theState = {
      state: "inactive",
    };
    makeInactive.mutate({ eachTheIds, theState });
  };

  const getStatus = (eachId) => {
    alert(envStatus.data?.data.status);
  };

  const deleteEnv = () => {
    deleteEnvironment.mutate(each.id);
  };

  // show spinner on loading state
  if (isLoading) {
    return (
      <Center>
        <Spinner size="xl" />
      </Center>
    );
  }

  // main content
  return (
    <Center bg="blackAlpha.700" color="white" h="100vh">
      <Center flexDir="column" maxW="max-content">
        {/* page heading */}
        <Heading textDecor="underline">Github Environment UI</Heading>
        <TableContainer mt="8">
          {/* table title */}
          <Table variant={"simple"}>
            <TableCaption color="white">
              Modify your github repo environments
            </TableCaption>
            <Thead>
              <Tr>
                <Th color="green.200">Environment Name(s)</Th>
                <Th color="blue.200" isNumeric>
                  ID(s)
                </Th>
                <Th color="red.200">Actions</Th>
              </Tr>
            </Thead>

            {/* table body */}
            <Tbody>
              {theIds.map((each) => (
                <Tr key={each.id}>
                  {/* content */}
                  <Th color="green.200">{each.environment}</Th>
                  <Th color="blue.200">{each.id}</Th>

                  {/* buttons */}
                  <Th>
                    <ButtonGroup>
                      <CopyToClipboard text={each.id}>
                        <Button
                          colorScheme="blue"
                          onClick={() => {
                            alert(`Copied ${each.id}`);
                          }}
                        >
                          Copy ID
                        </Button>
                      </CopyToClipboard>
                      <Button colorScheme="blue" onClick={getStatus}>
                        Get Status
                      </Button>
                      <Button
                        colorScheme="gray"
                        isLoading={makeInactive.isLoading}
                        onClick={makeInactiveFunc}
                      >
                        {makeInactive.isSuccess ? "Inactive" : "Make Inactive"}
                      </Button>
                      <Button
                        isLoading={deleteEnvironment.isLoading}
                        loadingText="Deleting"
                        colorScheme="red"
                        onClick={deleteEnv}
                      >
                        {deleteEnvironment.isSuccess ? "Deleted" : "Delete"}
                      </Button>
                    </ButtonGroup>
                  </Th>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
    </Center>
  );
}
