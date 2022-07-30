import { Box, Stack, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type NavSectionProps = {
  title: string;
  children: ReactNode;
};

export const NavSection = ({ children, title }: NavSectionProps) => {
  return (
    <Box>
      <Text fontWeight={"bold"} color="gray.400" fontSize={"small"}>
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
};
