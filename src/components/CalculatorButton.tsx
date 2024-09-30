import { Button } from "@chakra-ui/react";

interface Props {
  children: string;
  onClick: (label: string) => void;
}

const CalculatorButton = ({ children: label, onClick }: Props) => {
  return (
    <div>
      <Button
        borderRadius="20px"
        w="100%"
        colorScheme="orange"
        onClick={() => onClick(label)}
      >
        {label}
      </Button>
    </div>
  );
};

export default CalculatorButton;
