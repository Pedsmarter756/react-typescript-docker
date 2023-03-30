import Link from "next/link";
import { Typography, Box, Avatar } from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LockOutlinedIcon from '@mui/icons-material/LockClockOutlined'
import Timeline from '@mui/icons-material/Timeline'
import Warning from '@mui/icons-material/Warning'
import ListItem from '@mui/icons-material/ListAlt'
import Dns from '@mui/icons-material/Dns'
import { Container } from "@mui/system";


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
function createData(name, price, link) {
  return { name, price, link };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0),
  createData('Ice cream sandwich', 237, 9.0),
  createData('Eclair', 262, 16.0),
  createData('Cupcake', 305, 3.7),
  createData('Gingerbread', 356, 16.0),
];


const LandingPage = ({ currentUser, tickets }) => {
  const ticketList = tickets.map((ticket) => {
    return (
      // <tr key={ticket.id}>
      //   <td>{ticket.title}</td>
      //   <td>{ticket.price}</td>
      //   <td>
      //     <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
      //       <a>View</a>
      //     </Link>
      //   </td>
      // </tr>
      <StyledTableRow key={ticket.id}>
        <StyledTableCell component="th" scope="row">
          <strong>{ticket.title}</strong>
        </StyledTableCell>
        <StyledTableCell align="right">{ticket.price}</StyledTableCell>
        <StyledTableCell align="right">
          <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
            <a>View</a>
          </Link>
        </StyledTableCell>
      </StyledTableRow>
    );
  });

  const ticketsList2 = tickets.map((ticket) => {
    return (
      <div className='box' key={ticket.id}>
        <div className='img'>
          <img src="https://picsum.photos/200" alt='' style={{ borderRadius: 8 }} />
        </div>
        <h4>{ticket.title}</h4>
        <span>${ticket.price}</span>
        <h5> <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
          <a>View</a>
        </Link></h5>
      </div>
    )
  })

  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Highly Scalable",
      comp: <Timeline />,
      decs: "Each service can be scaled independently and mutiple replicas of each can be created according to need",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Fault Tolerant",
      comp: <Warning />,
      decs: "Deployment & scaffold makes sures that each pod is running and if it fails it restart the services automatically",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Containerize",
      comp: <ListItem />,
      decs: "Each service is containerise and can be use directly on any device irrespective of architecture & os",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "Microservice ",
      comp: <Dns />,
      decs: "6 services works together and  total 13 servers are working at same time which handle lots of request",
    },
  ]
  const avatarStyle = { backgroundColor: '#1e1e1e', textAlign: "center" }

  return (

    <div className="background" >
      {/* <h1>Tickets</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>{ticketList}</tbody>
      </table> */}
      <Container maxWidth="xl">
        <Box mx={7}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 800 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>
                    <Typography component="h2">
                      <strong>  Ticket Title</strong>

                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Typography component="h2">
                      <strong>     Ticket Price</strong>

                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Typography component="h2">
                      <strong>
                        Ticket Link
                      </strong>
                    </Typography>
                  </StyledTableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {ticketList}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
      <>
        <section className='NewArrivals ' style={{ marginTop: 92 }}>
          <div className='container2'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>

                <h2>Tickets </h2>
              </div>
              <div className='heading-right row '>
                <span>View all</span>
                <i className='fa-solid fa-caret-right'></i>
              </div>
            </div>

            <div className='content grid product'>
              {ticketsList2}
            </div>
          </div>
        </section>
      </>
      <>
        <section className='wrapper background'>
          <div className='container grid2'>
            {data.map((val, index) => {
              return (
                <div className='product' key={index}>
                  <Typography style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Avatar style={avatarStyle}>{val.comp}</Avatar>
                  </Typography>
                  <Typography component="h3" textAlign="center" mt={2}><strong>{val.title}</strong></Typography>
                  <Typography component="p" textAlign="center" mt={2}>{val.decs}</Typography>
                </div>
              )
            })}
          </div>
        </section>
      </>
    </div>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get("/api/tickets");

  return { tickets: data };
};

export default LandingPage;
