import { Center, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import HomeCard from "./components/HomeCard";

const App = () => {
    return (
        <Grid>
            <GridItem>
                <NavBar />
            </GridItem>
            <GridItem padding="2.5%">
                <Center>
                    <HomeCard />
                </Center>
            </GridItem>
        </Grid>
    );
};

export default App;
