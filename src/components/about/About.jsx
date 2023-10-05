import React from 'react';
import { Box, Typography, Link, styled } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
  background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
  width: 100%;
  height: 50vh;
  background-position: left 0px bottom 0px;
  background-size: cover;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  & > h3,
  & > h5 {
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

const About = () => {
  return (
    <Box>
      <Banner />
      <Wrapper>
        <Typography variant="h3">RM Tech Labs</Typography>
        <Text variant="h5">
          I'm a Software Engineer based in India. I've built websites, desktop applications, and corporate software.
          <br />
          If you are interested, you can view some of my favorite projects here{' '}
          <IconWrapper sx={{ marginBottom: '13px' }}>
            <Link href="https://github.com/RM1805" color="inherit" target="_blank">
              <GitHub />
            </Link>
          </IconWrapper>
        </Text>
        <Text variant="h5">
          Need something built or simply want to have a chat? Reach out to me on{' '}
          <IconWrapper sx={{ marginLeft: '7px', marginRight: '7px', marginTop: '3px' }}>
            <Link href="https://instagram.com/therishimishra18" color="inherit" target="_blank">
              <Instagram />
            </Link>
          </IconWrapper>
          or send me an Email{' '}
          <IconWrapper sx={{ marginLeft: '7px', marginTop: '3px' }}>
            <Link href="mailto:rmtechlabs001@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
              <Email />
            </Link>
          </IconWrapper>
          .
        </Text>
      </Wrapper>
    </Box>
  );
};

export default About;
