import {
  Icon,
  Link as ChackraLink,
  LinkProps as ChakraLinkProps,
  Text,
} from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  children: string;
  icon: ElementType;
  href: string;
}

export const NavLink = ({ icon, children, href, ...rest }: NavLinkProps) => {
  return (
    <ActiveLink href={href} passHref>
      <ChackraLink {...rest} display={"flex"} alignItems="center">
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight={"medium"}>
          {children}
        </Text>
      </ChackraLink>
    </ActiveLink>
  );
};
