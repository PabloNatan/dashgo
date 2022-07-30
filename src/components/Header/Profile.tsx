import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align={"center"}>
      <Box mr="4" textAlign={"right"}>
        <Text>Pablo Santos</Text>
        <Text color={"gray.300"} fontSize="small">
          pablonantan.d.r.s@gmail.com
        </Text>
      </Box>

      <Avatar size={"md"} name="Pablo Santos" />
    </Flex>
  );
}
