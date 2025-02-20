import { Box, Flex, Text, Button, Spacer } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box bg="white" px={6} py={4} shadow="md">
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold" color="pink.500">
          TRPG - Assistance
        </Text>
        <Spacer />
        <Button colorScheme="pink">登录</Button>
      </Flex>
    </Box>
  );
}
