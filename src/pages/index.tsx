import { Button, Flex, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Input } from "../components/Form/Input";

const Home: NextPage = () => {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing={4}>
          <Input type="email" label="E-mail" name="email" />

          <Input type="password" label="Password" name="password" />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
