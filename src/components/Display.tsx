import { Box, Center } from "@chakra-ui/react";

interface Props {
  value: string;
}

const Display = ({ value }: Props) => {
  return (
    <Center>
      <Box
        marginBottom="-90px"
        w="80%"
        h="6vh"
        minHeight="4vh"
        bg="white"
        textAlign="right"
        fontSize="2xl"
        overflow="hidden"
        p="2"
        borderRadius="md"
      >
        {value}
      </Box>
    </Center>
  );
};

export default Display;
