import Link from "next/link";
import Timeline from '@mui/icons-material/Timeline'
import Warning from '@mui/icons-material/Warning'
import ListItem from '@mui/icons-material/ListAlt'
import Dns from '@mui/icons-material/Dns'
import { Container } from "@mui/system";
import TicketContainer from "../../components/TicketContainer";
import { useRouter } from 'next/router'




const corodata = [
  { image: '/img1.png', name: 'Image 1' },
  { image: 'https://picsum.photos/800/600?random=2', name: 'Image 2' },
  { image: 'https://picsum.photos/800/600?random=3', name: 'Image 3' },
  { image: 'https://picsum.photos/800/600?random=4', name: 'Image 4' },
  { image: 'https://picsum.photos/800/600?random=5', name: 'Image 5' },
  { image: 'https://picsum.photos/800/600?random=6', name: 'Image 6' },
]

const CategoryShow = ({ currentUser, tickets }) => {
  const router = useRouter()
  const { categoryId } = router.query

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

 
  const containerStyle = {
    width: '100%',
    height: 250,
    borderRadius: 16,
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',

  };

  return (

    <div className="background" >

      <Container>
        <div style={containerStyle}>
          <img src="https://picsum.photos/seed/cricket/1200/800" alt="your-image-description" style={imageStyle} />
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
            return categoryId === item.category && (
              <TicketContainer obj={item} />
            )
          })
        }

      </Container>

    </div>
  );
};

CategoryShow.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get("/api/tickets");

  return { tickets: data };
};

export default CategoryShow;
