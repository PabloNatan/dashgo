import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box maxWidth={"100%"} overflow="hidden">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8" overflow="hidden">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                cursor="pointer"
                alignItems="center"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>
          <Box overflow={["scroll", "scroll", "auto"]}>
            <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th px={["4", "4", "6"]} color="gray.300" width="8">
                    <Checkbox colorScheme="pink" />
                  </Th>
                  <Th>Usuário</Th>
                  {isWideVersion && <Th>Data de cadastro</Th>}
                  <Th w="8"></Th>
                </Tr>
              </Thead>

              <Tbody>
                <Tr>
                  <Td px={["4", "4", "6"]}>
                    <Checkbox colorScheme="pink" />
                  </Td>

                  <Td>
                    <Box>
                      <Text fontWeight="bold">Pablo Santos</Text>
                      <Text fontSize="sm" color="gray.300">
                        pablonatan.d.r.s@gmail.com
                      </Text>
                    </Box>
                  </Td>

                  {isWideVersion && <Td>04 de Abril, 2021</Td>}

                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      cursor="pointer"
                      leftIcon={<Icon as={RiPencilLine} />}
                      alignItems="center"
                      iconSpacing={isWideVersion ? 2 : 0}
                    >
                      {isWideVersion ? "Editar" : null}
                    </Button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
