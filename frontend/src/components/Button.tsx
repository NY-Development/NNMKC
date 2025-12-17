import { Button as ChakraButton, HStack } from "@chakra-ui/react"

interface ButtonProps {
  bg: string;
  bgHover: string;
  text: string;
  icon?: React.ReactNode;
}

function Button({bg, bgHover, text, icon}:ButtonProps) {
  return (

        <ChakraButton bg={bg} _hover={{ bgColor: bgHover }}  >
            <HStack>
                {icon}
                <span>{text}</span>
            </HStack>
        </ChakraButton>
  )
}

export default Button