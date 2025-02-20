import { Box, Flex, Text, Button, Spacer, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Box bg="white" px={6} py={4} shadow="md">
      <Flex align="center">
        <Link as={RouterLink} _hover={{ textDecoration: "none" }}>
          <RouterLink to="/">
            <Text
              fontSize="xl"
              fontWeight="bold"
              color="pink.500"
              padding={"10px"}
            >
              TRPG - Assistance
            </Text>
          </RouterLink>
        </Link>

        <Flex gap={6}>
          <Link as={RouterLink} fontWeight="bold">
            <RouterLink to="/rules">规则查询</RouterLink>
          </Link>
          <Link as={RouterLink} fontWeight="bold">
            <RouterLink to="/character-creation">角色创建</RouterLink>
          </Link>
          <Link as={RouterLink} fontWeight="bold">
            <RouterLink to="/ai-gm">AI GM</RouterLink>
          </Link>
        </Flex>

        <Spacer />
        <Button bgColor="pink.500">登录</Button>
      </Flex>
    </Box>
  );
}
