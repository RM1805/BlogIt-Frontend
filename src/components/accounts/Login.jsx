import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  TextField,
  styled,
  Typography,
} from "@mui/material";
import { API } from "../../service/api";
import { DataContext } from "../../context/DataProvider";
import { useNavigate } from "react-router-dom";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled("img")({
  width: 100,
  margin: "auto",
  display: "flex",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > Button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const SignupButton = styled(Button)`
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0px 2px 4px 0px rgb(0 0 0/ 20%);
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 16px;
`;

const loginInitialValues = {
  username: "",
  password: "",
};

const signupInitialValues = {
  name: "",
  username: "",
  password: "",
};

function Login({ isUserAuthenticated }) {
  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

  const [account, toggleAccount] = useState("login");
  const [signup, setSignup] = useState(signupInitialValues);
  const [error, setError] = useState("");
  const [login, setLogin] = useState(loginInitialValues);
  const { setAccount } = useContext(DataContext);
  const navigate = useNavigate();

  function toggleSignup() {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  }

  function onInputChange(event) {
    setSignup({ ...signup, [event.target.name]: event.target.value });
  }

  function onValueChange(event) {
    setLogin({ ...login, [event.target.name]: event.target.value });
  }

  const signupUser = async () => {
    let response = await API.userSignup(signup);
    if (response.isSuccess) {
      setError("");
      setSignup(signupInitialValues);
      toggleAccount("login");
    } else {
      setError("Something went wrong. Please try again later");
    }
  };

  const loginUser = async () => {
    let response = await API.userLogin(login);
    if (response.isSuccess) {
      setError("");
      sessionStorage.setItem(
        "accessToken",
        `Bearer ${response.data.accessToken}`
      );

      sessionStorage.setItem(
        "refreshToken",
        `Bearer ${response.data.refreshToken}`
      );

      setAccount({ username: response.data.username, name: response.data.name });

      navigate("/");

      isUserAuthenticated(true);
    } else {
      setError("Something went wrong! Please try again later");
    }
  };

  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="login" />
        {account === "login" ? (
          <Wrapper>
            <TextField
              variant="standard"
              value={login.username}
              onChange={onValueChange}
              name="username"
              label="Enter username"
            />
            <TextField
              variant="standard"
              value={login.password}
              onChange={onValueChange}
              name="password"
              label="Enter password"
            />
            {error && <Error>{error}</Error>}
            <LoginButton onClick={loginUser} variant="contained">
              Login
            </LoginButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <SignupButton onClick={toggleSignup}>Create an account</SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              variant="standard"
              value={signup.name}
              onChange={onInputChange}
              name="name"
              label="Enter Name"
            />
            <TextField
              variant="standard"
              value={signup.username}
              onChange={onInputChange}
              name="username"
              label="Enter username"
            />
            <TextField
              variant="standard"
              value={signup.password}
              onChange={onInputChange}
              name="password"
              label="Enter password"
            />
            {error && <Error>{error}</Error>}
            <SignupButton onClick={signupUser}>Signup</SignupButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <LoginButton variant="contained" onClick={toggleSignup}>
              Already have an account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
}

export default Login;
