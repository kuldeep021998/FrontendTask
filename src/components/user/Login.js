import { Grid, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [mobileEmail, setMobileEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    const body = { mobileEmail: mobileEmail, password: password };
    const response = await axios.post("http://localhost:5000/user/login", body);
    if (response.status) {
      navigate("./display");
    }
  };
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid lg={12} sx={{ marginTop: 15 }}>
        <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>Login</Typography>
      </Grid>
      <Grid lg={12} sx={{ marginTop: 2 }}>
        <Typography>Email/Mobile</Typography>
        <TextField
          variant="outlined"
          onChange={(e) => setMobileEmail(e.target.value)}
        />
      </Grid>
      <Grid lg={12} sx={{ marginTop: 2 }}>
        <Typography>Password</Typography>
        <TextField
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Grid>
      <Grid lg={12} sx={{ marginTop: 2 }}>
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
      </Grid>
      <Grid lg={12} sx={{ marginTop: 2 }}>
        <Typography sx={{ fontWeight: "bold" }}>
          Not a member? SignUp
        </Typography>
      </Grid>
    </Grid>
  );
}
