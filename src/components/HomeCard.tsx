import { Card, CardBody, Image } from "@chakra-ui/react";
import sale from "../assets/Sale.jpeg";

const HomeCard = () => {
    return (
        <Card maxW="900px">
            <CardBody>
                <Image src={sale} alt="Sale Offer" borderRadius="5px"></Image>
            </CardBody>
        </Card>
    );
};

export default HomeCard;
