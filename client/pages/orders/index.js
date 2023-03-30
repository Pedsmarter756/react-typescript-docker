
import { Alert, AlertTitle, Container } from "@mui/material";
import { Typography, Box, Avatar } from "@mui/material";

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#fff",
    color: '#e94560',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#fbfbfb",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const OrderIndex = ({ orders }) => {

  const orderList = orders.map((order) => {
    return (

      <StyledTableRow key={order.id}>
        <StyledTableCell component="th" scope="row">
          <strong> {order.id}</strong>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          <strong> {order.ticket.title}</strong>
        </StyledTableCell>
        <StyledTableCell align="right">{order.status}</StyledTableCell>

      </StyledTableRow>
    );
  });
  return (
    // <ul>
    //   {orders.map((order) => {
    //     return (
    //       <li key={order.id}>
    //         {order.ticket.title} - {order.status}
    //       </li>
    //     );
    //   })}
    // </ul>
    <Container maxWidth="xl">
      <Box mx={7} mt={8}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 800 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  <Typography component="h2">
                    <strong>  Order ID</strong>

                  </Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography component="h2">
                    <strong>  Ticket Title</strong>

                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Typography component="h2">
                    <strong>    Order Status</strong>

                  </Typography>
                </StyledTableCell>


              </TableRow>
            </TableHead>
            <TableBody>
              {orderList}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

OrderIndex.getInitialProps = async (context, client) => {
  const { data } = await client.get("/api/orders");

  return { orders: data };
};

export default OrderIndex;
