import { useState, useEffect } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";

import { Grid, Paper, Avatar, TextField, Button, Typography, Link, FormControlLabel, Checkbox, Box, Container, Alert, AlertTitle } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockClockOutlined'



const Signin = () => {


  const paperStyle = { padding: 20, height: '65vh', width: 340, margin: "20px auto" }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '8px 0', padding: '12px', backgroundColor: '#000', textTransform: 'capitalize', fontWeight: 'bold' }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doRequest, errors } = useRequest({
    url: "/api/users/signin",
    method: "post",
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push("/"),
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    await doRequest();
  };

  return (
    // <Container maxWidth="lg">
    //   <Box style={{ padding: 16 }}>
    //     <form onSubmit={onSubmit}>
    //       <h1>Sign In</h1>
    //       <div className="form-group">
    //         <label>Email Address</label>
    //         <input
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           className="form-control"
    //         />
    //       </div>
    //       <div className="form-group">
    //         <label>Password</label>
    //         <input
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           type="password"
    //           className="form-control"
    //         />
    //       </div>
    //       {errors}
    //       <button className="btn btn-primary">Sign In</button>
    //     </form>
    //   </Box>

    // </Container>
    <Container maxWidth="lg">
      <Grid mt={6}>
        {errors &&

          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            <strong>{errors}</strong>
          </Alert>

        }
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
            <h2>Sign In</h2>
          </Grid>
          <form onSubmit={onSubmit}>
            <TextField style={{ marginTop: 14 }} label='Email Address' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} fullWidth required />
            <TextField style={{ marginTop: 14 }} stylabel='Password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} type='password' fullWidth required />
            <FormControlLabel
              control={
                <Checkbox
                  name="checkedB"
                  color="primary"
                />
              }
              label="Remember me"
            />
            <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
          </form>


          <Typography > Do you have an account ?
            <Link href="/auth/signup" >
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </Container>
  );
};

export default Signin;
