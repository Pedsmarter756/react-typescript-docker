import Router from "next/router";
import useRequest from "../../hooks/use-request";
import { Grid, Paper, Avatar, Button, Box, Container, Alert, AlertTitle } from '@mui/material'

import LockOutlinedIcon from '@mui/icons-material/Money'

const TicketShow = ({ ticket, currentUser }) => {

  const paperStyle = { padding: 20, height: "auto", width: "100%", margin: "20px auto" }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '32px 0 0 0', padding: '12px', backgroundColor: '#000', textTransform: 'capitalize', fontWeight: 'bold' }


  const { doRequest, errors } = useRequest({
    url: "/api/orders",
    method: "post",
    body: {
      ticketId: ticket.id,
    },
    onSuccess: (order) =>
      Router.push("/orders/[orderId]", `/orders/${order.id}`),
  });

  return (


    <Container>
      {errors?.toString().indexOf("400") > 0 &&
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          <strong>Ticket is currently reserved for other user, Please try after some time. </strong>
        </Alert>
      }

      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Paper elevation={2} style={paperStyle}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <div style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
                  <img src=" https://picsum.photos/200/200?random=2" style={{ height: 'auto', width: '100%', borderRadius: 8 }} />
                </div>
              </Grid>
              <Grid item xs={9}>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: '700' }} >Event Name : {ticket.title}</h3>
                  <h3 style={{ fontSize: 18, fontWeight: '700' }} >Price : {ticket.price}</h3>
                  <h3 style={{ fontSize: 18, fontWeight: '700' }} >Category : {ticket.category}</h3>
                  <h3 style={{ fontSize: 18, fontWeight: '700' }} >SubCategory : {ticket.subcategory}</h3>
                  <h3 style={{ fontSize: 18, fontWeight: '700' }} >Location : {ticket.location}</h3>
                  <h3 style={{ fontSize: 18, fontWeight: '700' }} >Address : {ticket.address}</h3>
                  <h3 style={{ fontSize: 18, fontWeight: '700' }} >Date : {ticket.date}</h3>
                  <h3 style={{ fontSize: 18, fontWeight: '700' }} >Time : {ticket.time}</h3>
                  <h3 style={{ fontSize: 18, fontWeight: '700' }} >Seller Id : {ticket.userId}</h3>




                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={2} style={paperStyle}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={`/Group.png`} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
              <p>{currentUser.email}</p>
            </div>
            <Button onClick={() => doRequest()} color='primary' variant="contained" style={btnstyle} fullWidth >Purchase</Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>


  );
};

TicketShow.getInitialProps = async (context, client, currentUser) => {
  const { ticketId } = context.query;
  const { data } = await client.get(`/api/tickets/${ticketId}`);
  console.log(currentUser)
  return { ticket: data };
};

export default TicketShow;
