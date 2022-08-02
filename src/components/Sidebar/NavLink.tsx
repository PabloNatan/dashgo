import {
  Icon,
  Link as ChackraLink,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import Link from "next/link";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps {
  children: string;
  icon: ElementType;
  href: string;
}

export const NavLink = ({ icon, children, href, ...rest }: NavLinkProps) => {
  return (
    <Link href={href} passHref>
      <ChackraLink {...rest} display={"flex"} alignItems="center">
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight={"medium"}>
          {children}
        </Text>
      </ChackraLink>
    </Link>
  );
};
