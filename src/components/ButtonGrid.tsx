import { Center, Grid, GridItem } from "@chakra-ui/react";
import CalculatorButton from "./CalculatorButton.tsx";

interface Props {
  onBtnClick: (value: string) => void;
}

const ButtonGrid = ({ onBtnClick }: Props) => {
  const buttons = [
    "7",
    "8",
    "9",
    "÷",
    "4",
    "5",
    "6",
    "×",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
  ];

  return (
    <Center h="inherit">
      <Grid templateColumns="repeat(4,1fr)" gap={2} w="80%">
        {buttons.map((button, index) => (
          <GridItem key={index} colSpan={button === "C" ? 4 : 1}>
            <CalculatorButton onClick={onBtnClick}>{button}</CalculatorButton>
          </GridItem>
        ))}
      </Grid>
    </Center>
  );
};

export default ButtonGrid;
