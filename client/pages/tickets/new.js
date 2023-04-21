import { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, FormControlLabel, Checkbox, Container } from '@mui/material'

import LockOutlinedIcon from '@mui/icons-material/AirplaneTicket'

const NewTicket = () => {

  const paperStyle = { padding: 20, height: "auto", width: 650, margin: "20px auto" }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '40px 0 0 0', padding: '16px', backgroundColor: '#000', textTransform: 'capitalize', fontWeight: 'bold' }

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubCategory] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');

  const { doRequest, errors } = useRequest({
    url: "/api/tickets",
    method: "post",
    body: {
      title,
      price,
      category,
      subcategory,
      location,
      address,
      date,
      time: time.toString()
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
            <TextField style={{ marginTop: 14 }} label='Category' placeholder='Enter ticket category' value={category} onChange={(e) => setCategory(e.target.value)} fullWidth required />
            <TextField style={{ marginTop: 14 }} label='SubCategory' placeholder='Enter ticket subCategory' value={subcategory} onChange={(e) => setSubCategory(e.target.value)} fullWidth required />
            <Grid container spacing={2} style={{ marginTop: 12 }}>
              <Grid item xs={6}>
                <TextField type='date' value={date} onChange={(e) => setDate(e.target.value)} fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextField label='Time' type='time' value={time} onChange={(e) => setTime(e.target.value)} fullWidth />
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: 12 }}>
              <Grid item xs={6}>
                <TextField style={{ marginTop: 8 }} stylabel='Price' placeholder='Enter ticket price' value={price} onBlur={onBlur} onChange={(e) => setPrice(e.target.value)} fullWidth required />
              </Grid>
              <Grid item xs={6}>
                <TextField style={{ marginTop: 8 }} stylabel='Location' placeholder='Enter location' value={location} onBlur={onBlur} onChange={(e) => setLocation(e.target.value)} fullWidth required />
              </Grid>
            </Grid>
            <TextField style={{ marginTop: 14 }} label='address' placeholder='Enter address' value={address} onChange={(e) => setAddress(e.target.value)} fullWidth required />

            <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Create</Button>
          </form>
        </Paper>
      </Grid>
    </Container>

  );
};

export default NewTicket;
