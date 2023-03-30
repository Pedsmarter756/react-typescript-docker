import { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, FormControlLabel, Checkbox, Container } from '@mui/material'

import LockOutlinedIcon from '@mui/icons-material/AirplaneTicket'

const NewTicket = () => {

  const paperStyle = { padding: 20, height: '60vh', width: 500, margin: "20px auto" }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '40px 0 0 0', padding: '16px', backgroundColor: '#000', textTransform: 'capitalize', fontWeight: 'bold' }


  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const { doRequest, errors } = useRequest({
    url: "/api/tickets",
    method: "post",
    body: {
      title,
      price,
    },
    onSuccess: () => Router.push("/"),
  });

  const onSubmit = (event) => {
    event.preventDefault();

    doRequest();
  };

  const onBlur = () => {
    const value = parseFloat(price);

    if (isNaN(value))
    {
      return;
    }

    setPrice(value.toFixed(2));
  };

  return (
    /**
     *   <form onSubmit={onSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Price</label>
                <input
                  value={price}
                  onBlur={onBlur}
                  onChange={(e) => setPrice(e.target.value)}
                  className="form-control"
                />
              </div>
              {errors}
              <button className="btn btn-primary">Submit</button>
            </form>
     * 
     */
    <Container maxWidth="lg">
      <Grid mt={6}>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
            <h2 style={{ marginTop: 12 }}>Create A Ticket</h2>
          </Grid>
          <form onSubmit={onSubmit}>
            <TextField style={{ marginTop: 14 }} label='Title' placeholder='Enter ticket title' value={title} onChange={(e) => setTitle(e.target.value)} fullWidth required />
            <TextField style={{ marginTop: 14 }} stylabel='Price' placeholder='Enter ticket price' value={price} onBlur={onBlur} onChange={(e) => setPrice(e.target.value)} fullWidth required />

            <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Create</Button>
          </form>
        </Paper>
      </Grid>
    </Container>

  );
};

export default NewTicket;
