import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, FormControlLabel, Checkbox } from '@mui/material'

import LockOutlinedIcon from '@mui/icons-material/LockClockOutlined'



const Login = () => {

  const paperStyle = { padding: 20, height: '65vh', width: 340, margin: "20px auto" }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '8px 0', padding: '12px', backgroundColor: '#000', textTransform: 'capitalize', fontWeight: 'bold' }
  
  return (
    <Grid mt={6}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          const avatarStyle = {backgroundColor: '#1bbd7e' }
          <h2>Sign In</h2>
        </Grid>
        <TextField style={{ marginTop: 14 }} label='Username' placeholder='Enter username' fullWidth required />
        <TextField style={{ marginTop: 14 }} stylabel='Password' placeholder='Enter password' type='password' fullWidth required />
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
        <Typography >
          <Link href="#" >
            Forgot password ?
          </Link>
        </Typography>
        <Typography > Do you have an account ?
          <Link href="#" >
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  )
}

export default Login