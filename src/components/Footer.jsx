import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white; 
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payments = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const PaymentImg = styled.img`
    max-height: 50px;
    max-width: 50px;
    padding-right: 5px;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>techreside.</Logo>
            <Desc>This white paper takes an in-depth look at the major changes in the global retail industry, including "The Retail Apocalypse," the rise of digital commerce and the ways in which retailers are adapting – like improving their brand experiences and scaling their businesses.</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wish List</ListItem>
                <ListItem>About</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{ marginRight: "10px"}}/>
                234, Gandhi Road, Bangalore, India
            </ContactItem>
            <ContactItem>
                <Phone style={{ marginRight: "10px"}}/>
                +91 8974787061
            </ContactItem>
            <ContactItem>
                <MailOutline style={{ marginRight: "10px"}}/>
                store@techreside.com
            </ContactItem>
            <Payments>
                <PaymentImg src="https://mpng.subpng.com/20180330/jdq/kisspng-unified-payments-interface-bhim-national-payments-wallets-5abdf47f14fc64.488606551522398335086.jpg"/>
                <PaymentImg src="https://cdn2.iconfinder.com/data/icons/social-icons-color/512/paytm-512.png"/>
                <PaymentImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"/>
                <PaymentImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png"/>
                <PaymentImg src="https://1000logos.net/wp-content/uploads/2021/04/Paypal-logo.png"/>
            </Payments>
        </Right>
    </Container>
  )
}

export default Footer