import {Box, Typography, styled} from "@mui/material";



const Image =styled(Box)`
background: url(https://neilpatel.com/wp-content/uploads/2018/10/blog.jpg) center/55% repeat-x #000;
width: 100%;
height: 50vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

@media (max-width: 768px) {
    height: 40vh;
  }

  @media (max-width: 480px) {
    height: 30vh;
  }

`;

const Heading = styled(Typography)`
font-size: 60px;
color: #FFA500;
line-height: 1
background: #000;
margin-top: 320px;

@media (max-width: 768px) {
    font-size: 40px;
    margin-top: 200px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
    margin-top: 150px;
  }

`;

const Banner = () => {
    return (
        <Image  className="Banner">
            <Heading>RM Tech Labs</Heading>
        </Image>
    )
}


export default Banner;
