import Router from "next/router";
import useRequest from "../../hooks/use-request";
import { Grid, Paper, Avatar, Button, Box } from '@mui/material'

import LockOutlinedIcon from '@mui/icons-material/Money'

const TicketShow = ({ ticket }) => {

  const paperStyle = { padding: 20, height: '60vh', width: 400, margin: "20px auto" }
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
    // <div>
    //   <h1>{ticket.title}</h1>
    //   <h4>Price: {ticket.price}</h4>
    //   {errors}
    //   <button onClick={() => doRequest()} className="btn btn-primary">
    //     Purchase
    //   </button>
    // </div>
    <Grid mt={6}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
          <h2>Purchase Ticket</h2>
        </Grid>

        <Box style={{ padding: 16, borderRadius: 8, borderWidth: 2, borderStyle: 'dashed', marginTop: 36 }}>
          <h2 style={{ fontSize: 28, marginTop: 18 }} >Ticket Name : {ticket.title}</h2>
          <h3 style={{ fontSize: 28, marginTop: 28 }}>Ticket Price : {ticket.price}</h3>
        </Box>

        <Button onClick={() => doRequest()} color='primary' variant="contained" style={btnstyle} fullWidth >Purchase</Button>


      </Paper>
    </Grid>
  );
};

TicketShow.getInitialProps = async (context, client) => {
  const { ticketId } = context.query;
  const { data } = await client.get(`/api/tickets/${ticketId}`);

  return { ticket: data };
};

export default TicketShow;
