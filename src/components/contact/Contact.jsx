import { Box, styled, Typography, Link } from '@mui/material';
import { Instagram, Email, LinkedIn } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const IconWrapper = styled(Box)`
  display: inline-block;
  vertical-align: middle;
  margin-left: 7px;
  margin-top: 10px;
`;

const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>    
                <Text variant="h5">
                    Reach out to me on
                    <IconWrapper sx={{ marginLeft: '7px', marginRight: '7px', marginTop: '3px' }}>
                        <Link href="https://instagram.com/therishimishra18" color="inherit" target="_blank">
                           <Instagram />
                        </Link>
                    </IconWrapper>
                    and 
                    <IconWrapper sx={{ marginLeft: '7px', marginRight: '7px', marginTop: '3px' }}>
                        <Link href="https://www.linkedin.com/in/rishi-mishra-3a2765210" color="inherit" target="_blank">
                        <LinkedIn />
                        </Link>
                    </IconWrapper>
                    or send me an Email 
                    <IconWrapper sx={{ marginLeft: '7px', marginTop: '4px' }}>
                        <Link href="mailto:rmtechlabs001@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                           <Email />
                        </Link>
                    </IconWrapper>.
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;