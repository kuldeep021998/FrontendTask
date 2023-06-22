import {
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  Pagination,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function Displaycards() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [contentid, setContentid] = useState("");
  const navigate = useNavigate();

  const [text, setText] = useState("");

  const getData = async () => {
    const response = await fetch("http://localhost:5000/content/get_data");
    const result = await response.json();
    const arr = result.result;
    setData(arr);
  };

  useEffect(() => {
    getData();
    loop(0, textPerPage);
  }, []);

  const loop = (start, end) => {
    const myArr = data.slice(start, end);
    setData(myArr);
  };

  const textPerPage = 3;
  const totalTexts = data.length;

  const handlePageChange = (e, p) => {
    const arr = data.slice(textPerPage * (p - 1), textPerPage * p);
    setData(arr);
  };

  const handleDelete = async (id) => {
    const response = await axios.post("http://localhost:5000/content/delete", {
      contentid: id,
    });
    alert(response.status);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDialog = (id) => {
    setOpen(true);
    setContentid(id);
  };

  const handleEdit = async (id) => {
    const body = { text: text, contentid: id };
    const response = await axios.post(
      "http://localhost:5000/content/edit_data",
      body
    );
    alert(response.status);
  };

  const showDialog = (id) => {
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Edit Data"}</DialogTitle>
          <DialogContent>
            <TextField value={text} onChange={(e) => setText(e.target.value)} />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleEdit(contentid)}>Edit</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
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
      <div style={{ backgroundColor: "blue", padding: 50,  }}>
        {data.map((item, index) => {
          return (
            <div key={item.contentid}>
              <Paper
                elevation={3}
                sx={{
                  height: 30,
                  width: 200,
                  margin: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 2,
                }}
              >
                <Typography>{item.text}</Typography>
                <div>
                  <EditIcon onClick={() => handleDialog(item.contentid)} />
                  <DeleteIcon onClick={() => handleDelete(item.contentid)} />
                </div>
              </Paper>
            </div>
          );
        })}
      </div>

      <Pagination
        count={totalTexts / textPerPage}
        onChange={handlePageChange}
      />
      <div>{showDialog()}</div>
    </Grid>
  );
}
