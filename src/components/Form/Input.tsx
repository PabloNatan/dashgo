import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { HTMLInputTypeAttribute } from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}
export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>E-mail</FormLabel>}
      <ChakraInput
        {...rest}
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{ bgColor: "gray.900" }}
        size="lg"
      />
    </FormControl>
  );
}
