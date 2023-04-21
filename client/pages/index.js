import Link from "next/link";
import Timeline from '@mui/icons-material/Timeline'
import Warning from '@mui/icons-material/Warning'
import ListItem from '@mui/icons-material/ListAlt'
import Dns from '@mui/icons-material/Dns'
import { Container } from "@mui/system";
import TicketContainer from "../components/TicketContainer";






const corodata = [
  { image: '/img1.png', name: 'Image 1' },
  { image: 'https://picsum.photos/800/600?random=2', name: 'Image 2' },
  { image: 'https://picsum.photos/800/600?random=3', name: 'Image 3' },
  { image: 'https://picsum.photos/800/600?random=4', name: 'Image 4' },
  { image: 'https://picsum.photos/800/600?random=5', name: 'Image 5' },
  { image: 'https://picsum.photos/800/600?random=6', name: 'Image 6' },
]

const LandingPage = ({ currentUser, tickets }) => {


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


  const avatarStyle = { backgroundColor: '#1e1e1e', textAlign: "center" }

  // const ticketsData = [
  //   {
  //     date: 'APR21',
  //     day: 'fri',
  //     time: '5.30 PM',
  //     remainingDays: 'in 19 days',
  //     title: 'Mum Vs CSk IPL',
  //     location: 'Mumbai,India',
  //     address: 'B-604 msr olive socity, pune',
  //     status: 'available'
  //   },
  //   {
  //     date: 'APR21',
  //     day: 'fri',
  //     time: '5.30 PM',
  //     remainingDays: 'in 19 days',
  //     title: 'Mum Vs CSk IPL',
  //     location: 'Mumbai,India',
  //     address: 'B-604 msr olive socity, pune',
  //     status: 'navailable'
  //   }, {
  //     date: 'APR21',
  //     day: 'fri',
  //     time: '5.30 PM',
  //     remainingDays: 'in 19 days',
  //     title: 'Mum Vs CSk IPL',
  //     location: 'Mumbai,India',
  //     address: 'B-604 msr olive socity, pune',
  //     status: 'available'
  //   }, {
  //     date: 'APR21',
  //     day: 'fri',
  //     time: '5.30 PM',
  //     remainingDays: 'in 19 days',
  //     title: 'Mum Vs CSk IPL',
  //     location: 'Mumbai,India',
  //     address: 'B-604 msr olive socity, pune',
  //     status: 'navailable'
  //   }, {
  //     date: 'APR21',
  //     day: 'fri',
  //     time: '5.30 PM',
  //     remainingDays: 'in 19 days',
  //     title: 'Mum Vs CSk IPL',
  //     location: 'Mumbai,India',
  //     address: 'B-604 msr olive socity, pune',
  //     status: 'available'
  //   }, {
  //     date: 'APR21',
  //     day: 'fri',
  //     time: '5.30 PM',
  //     remainingDays: 'in 19 days',
  //     title: 'Mum Vs CSk IPL',
  //     location: 'Mumbai,India',
  //     address: 'B-604 msr olive socity, pune',
  //     status: 'navailable'
  //   }, {
  //     date: 'APR21',
  //     day: 'fri',
  //     time: '5.30 PM',
  //     remainingDays: 'in 19 days',
  //     title: 'Mum Vs CSk IPL',
  //     location: 'Mumbai,India',
  //     address: 'B-604 msr olive socity, pune',
  //     status: 'available'
  //   },

  // ]

  function groupItemsByCategory(items) {
    const groupedItems = {};

    for (const item of items)
    {
      const category = item.category;

      if (groupedItems[category])
      {
        groupedItems[category].push(item);
      } else
      {
        groupedItems[category] = [item];
      }
    }

    return groupedItems;
  }
  const catogoryArray = groupItemsByCategory(tickets)
  console.log("------")
  const arr = Object.entries(catogoryArray).map(([key, value]) => ({ [key]: value }));
  console.log(arr[0]["Sports"])
  return (

    <div className="background" >

      <Container >
        <div style={{

          fontStyle: "normal",
          fontWeight: 700,
          fontSize: 19,
          display: "flex",
          alignItems: "center",
          color: "#DB2C7B",
          marginBottom: 16
        }}>
          <Link href="/category/[categoryId]" as={`/category/${Object.keys(arr[1])[0]}`}>
            <div >
              {Object.keys(arr[0])[0]}
            </div>
          </Link>
        </div>
        <div className="grid2">
          {
            arr[0][Object.keys(arr[0])[0]].map((item, index) => {
              return index < 4 && (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <img src={`https://picsum.photos/800/600?random=${index + 1}`} alt={item.name} style={{ width: '90%', height: '150px', borderRadius: '10px' }} />
                  <div style={{ padding: '8px', alignSelf: 'self-start', fontWeight: 'bolder', marginLeft: '12px', cursor: 'pointer' }}>
                    <Link href="/tickets/[ticketId]" as={`/tickets/${item.id}`}>
                      <p style={{ margin: '0', fontSize: '14px' }}>{item.title}</p>
                    </Link>
                  </div>
                </div>
              )
            })
          }
        </div>
      </Container>
      <Container >
        <div style={{

          fontStyle: "normal",
          fontWeight: 700,
          fontSize: 19,
          display: "flex",
          alignItems: "center",
          color: "#DB2C7B",
          marginBottom: 16,
          marginTop: 16,
          cursor: 'pointer'
        }}>
          <Link href="/category/[categoryId]" as={`/category/${Object.keys(arr[1])[0]}`}>
            <div>
              {Object.keys(arr[1])[0]}
            </div>
          </Link>

        </div>
        <div className="grid2">
          {
            arr[1][Object.keys(arr[1])[0]].map((item, index) => {
              return index < 4 && (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <img src={`https://picsum.photos/800/600?random=${(index + 1) + 4}`} alt={item.ti} style={{ width: '90%', height: '150px', borderRadius: '10px' }} />
                  <div style={{ padding: '8px', alignSelf: 'self-start', fontWeight: 'bolder', marginLeft: '12px', cursor: 'pointer' }}>
                    <Link href="/tickets/[ticketId]" as={`/tickets/${item.id}`}>
                      <p style={{ margin: '0', fontSize: '14px' }}>{item.title}</p>
                    </Link>                  </div>
                </div>
              )
            })
          }
        </div>
      </Container>
      <Container style={{ marginTop: '64px' }}>
        <div style={{
          fontSize: "15px",
          fontWeight: "400",
          color: "#2F343B",
          marginTop: "16px",
          marginBottom: "36px"
        }}><span style={{
          fontWeight: 'bolder'
        }}>10 </span>
          result found
        </div>

        {
          tickets.map((item) => {
            return (
              <TicketContainer obj={item} />
            )
          })
        }

      </Container>

    </div>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get("/api/tickets");
  // console.log(data);
  return { tickets: data };
};

export default LandingPage;
