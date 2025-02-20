import { Box, Heading, Text, Button } from "@chakra-ui/react";
import bgImage from "../assets/background.jpeg";

export default function Hero() {
  return (
    <Box
      bgImage={`url(${bgImage})`}
      bgSize="cover"
      height="80vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Heading fontSize="3xl" color="White">
        Everything For Your Adventures
      </Heading>
      <Text fontSize="xl" color="pink">
        Create Free Unlimited Characters
      </Text>
      <Button mt={6} bgColor="pink.500" size="lg">
        Create a Character Now
      </Button>
    </Box>
  );
}
