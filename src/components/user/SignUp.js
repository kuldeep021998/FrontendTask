import { Grid, Button, Typography, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    const body = {
      email: email,
      mobile: mobile,
      name: name,
      fname: fname,
      password: password,
    };

    const response = await axios.post(
      "http://localhost:5000/user/register_user",
      body
    );

    navigate("/login");
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
      <Grid lg={12} sx={{ marginTop: 2 }}>
        <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
          Sign Up
        </Typography>
      </Grid>
      <Grid lg={12} sx={{ marginTop: 1 }}>
        <Typography>Full Name</Typography>
        <TextField
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid lg={12} sx={{ marginTop: 1 }}>
        <Typography>Father's Name</Typography>
        <TextField
          variant="outlined"
          onChange={(e) => setFname(e.target.value)}
        />
      </Grid>
      <Grid lg={12} sx={{ marginTop: 1 }}>
        <Typography>Email</Typography>
        <TextField
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid lg={12} sx={{ marginTop: 1 }}>
        <Typography>Mobile</Typography>
        <TextField
          variant="outlined"
          onChange={(e) => setMobile(e.target.value)}
        />
      </Grid>
      <Grid lg={12} sx={{ marginTop: 1 }}>
        <Typography>Password</Typography>
        <TextField
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Grid>
      <Grid lg={12} sx={{ marginTop: 1 }}>
        <Button variant="contained" onClick={handleSignUp}>
          Sign Up
        </Button>
      </Grid>
      <Grid lg={12} sx={{ marginTop: 1 }}>
        <Typography
          sx={{ fontWeight: "bold", cursor: "pointer" }}
          onClick={() => navigate("/login")}
        >
          Already a member? Login
        </Typography>
      </Grid>
    </Grid>
  );
}
