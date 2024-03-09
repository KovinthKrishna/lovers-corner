import { Button, HStack, Hide, Image, Show, Text } from "@chakra-ui/react";
import logo from "../assets/Logo.png";
import ColorModeButton from "./ColorModeButton";

const NavBar = () => {
    return (
        <HStack justifyContent="space-between" padding="20px">
            <HStack>
                <Image src={logo} boxSize="50px" />
                <Hide below="320px">
                    <Text fontWeight="bold">Lover's Corner</Text>
                </Hide>
            </HStack>
            <Show above="md">
                <HStack>
                    <Button variant="ghost">Home</Button>
                    <Button variant="ghost">Men</Button>
                    <Button variant="ghost">Women</Button>
                    <Button variant="ghost">About</Button>
                    <Button variant="ghost">Contact</Button>
                </HStack>
            </Show>
            <ColorModeButton />
        </HStack>
    );
};

export default NavBar;
