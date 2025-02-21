import { Box, Flex, Text, Button, Spacer, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { ColorModeButton } from "@/components/ui/color-mode";

export default function Navbar() {
  return (
    <Box px={6} py={4} shadow="md">
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

        <ColorModeButton mr={4} />

        <Button bgColor="pink.500">LOG IN</Button>
      </Flex>
    </Box>
  );
}
