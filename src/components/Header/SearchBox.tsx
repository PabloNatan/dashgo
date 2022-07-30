import { Flex, Icon, Input } from "@chakra-ui/react";
import React from "react";
import { RiSearchLine } from "react-icons/ri";

function SearchBox() {
  return (
    <Flex
      as="label"
      flex="1"
      px="8"
      py="4"
      ml="6"
      maxW="400"
      alignSelf={"center"}
      color="gray.200"
      position={"relative"}
      bg="gray.800"
      borderRadius="full"
      align={"center"}
    >
      <Input
        color="gray.50"
        variant={"unstyled"}
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: "gray.400" }}
      />

      <Icon as={RiSearchLine} fontSize="26" cursor={"pointer"} />
    </Flex>
  );
}

export { SearchBox };
