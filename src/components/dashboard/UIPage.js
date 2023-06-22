import { Grid, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
export default function UIPage() {
  const [text, setText] = useState("");

  const handleData = async () => {
    const response = await axios.post(
      "http://localhost:5000/content/send_data",
      { text: text }
    );
    alert(response.status);
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
      <Grid lg={6} sx={{ marginTop: 10 }}>
        <Typography sx={{ fontSize: 20, marginBottom: 2, fontWeight: "bold" }}>
          Enter Text
        </Typography>
        <TextField
          variant="outlined"
          onChange={(e) => setText(e.target.value)}
        />
      </Grid>
      <Grid lg={6} sx={{ marginTop: 2 }}>
        <Button variant="contained" onClick={handleData}>
          submit
        </Button>
      </Grid>
    </Grid>
  );
}
