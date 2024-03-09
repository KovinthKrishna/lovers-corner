import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

const ColorModeButton = () => {
    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <IconButton
            isRound={true}
            variant="outline"
            aria-label="Color Mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
        />
    );
};

export default ColorModeButton;
