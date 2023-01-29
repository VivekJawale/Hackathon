import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Link,
  Image,
  Text,
  useColorMode,
  Button,
} from "@chakra-ui/react";

function Navbar() {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  const NavLink = ({ href="/about", children="home" }) => {
    return (
      <Link
        mr={4}
        fontWeight={router.pathname === href ? "bold" : "normal"}
        color={colorMode === "light" ? "gray.800" : "gray.200"}
        href={href}
      >
        {children}
      </Link>
    );
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg={colorMode === "light" ? "gray.50" : "gray.800"}
    >
      <Flex align="center" mr={5}>
        <Image
          boxSize="50px"
          objectFit="cover"
          src="https://via.placeholder.com/50x50"
          alt="Logo"
        />
        <Text fontSize="xl" fontWeight="bold" ml={2}>
          My App
        </Text>
      </Flex>

      <Box display={{ sm: "block", md: "none" }} onClick={toggleColorMode}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </Box>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Flex>
  );
}

export default Navbar;
