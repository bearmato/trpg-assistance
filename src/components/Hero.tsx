import { Box, Heading, Text, Button } from "@chakra-ui/react";
import backGroundImage from "../assets/background.jpeg";
export default function Hero() {
  return (
    <Box
      bgImage={backGroundImage}
      bgSize="cover"
      position="center"
      height="80vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Heading fontSize="3xl" color="black">
        Everything For Your Adventures
      </Heading>
      <Text fontSize="xl" color="gray.700">
        Create and Play Free Unlimited Characters
      </Text>
      <Button mt={6} colorScheme="pink" size="lg">
        Create a Character Now
      </Button>
    </Box>
  );
}
