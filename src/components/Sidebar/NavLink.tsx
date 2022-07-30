import {
  Icon,
  Link,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps {
  children: string;
  icon: ElementType;
}

export const NavLink = ({ icon, children, ...rest }: NavLinkProps) => {
  return (
    <Link {...rest} display={"flex"} alignItems="center">
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight={"medium"}>
        {children}
      </Text>
    </Link>
  );
};
