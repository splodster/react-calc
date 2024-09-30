import { Center, Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CalculatorContainer = ({ children }: Props) => {
  return (
    <Center h="100vh">
      <Box w="400px" h="400px" bg="silver" p="10px" borderRadius="30px">
        {children}
      </Box>
    </Center>
  );
};

export default CalculatorContainer;
