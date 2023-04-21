import React from 'react'
import Link from "next/link";

function TicketContainer({ obj }) {
  console.log(typeof (obj.date))
  const inputDate = new Date(obj.date);
  const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const month = monthNames[inputDate.getUTCMonth()];
  const day = inputDate.getUTCDate();
  const formattedDate = `${month}${day}`;
  const options = { weekday: 'long' };
  const dayOfWeek = new Intl.DateTimeFormat('en-US', options).format(inputDate);
  const currentDate = new Date();
  const timeDiff = Math.abs(inputDate.getTime() - currentDate.getTime());
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));


  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px',
      background: '#fff',
      marginBottom: '16px'
    }}>
      <div style={{
        display: 'flex',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingRight: '16px',
          height: '100%'
        }}>
          <h4 style={{
            color: "#29B2B2",
            fontWeight: "700",
            fontSize: "20px",
          }}>
            {formattedDate}
          </h4>
          <span style={{
            color: "#677383",
            fontWeight: "400",
            fontSize: "11px",
            textTransform: "uppercase"
          }}>
            {dayOfWeek.substring(0, 3)}
          </span>
          <span style={{
            color: "#677383",
            fontWeight: "400",
            fontSize: "11px",
            textTransform: "uppercase"
          }}>
            {obj.time}
          </span>
          <span style={{
            background: "rgba(188, 231, 231, 0.39)",
            border: "1px solid #29B2B2",
            borderRadius: "16px",
            marginTop: '8px'
          }}>
            <span style={{

              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: "#29B2B2",
              fontSize: '8px',
              padding: '8px',

            }}>
              {`in ${daysDiff} days`}
            </span>
          </span>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '16px',
          borderLeft: '1px solid #d3d3d3',
          paddingTop: '6px'
        }}>
          <h3 style={{
            color: "#0D8282",
            fontWeight: "500",
            fontSize: "14px"
          }}>
            {obj.title}
          </h3>
          <span style={{
            color: "#677383",
            fontWeight: "400",
            fontSize: "15px"
          }}>
            {obj.location}
          </span>
          <span style={{
            color: "#677383",
            fontWeight: "400",
            fontSize: "15px"
          }}>
            {obj.address}
          </span>
        </div>
      </div>
      <div style={{

        color: "#677383",
        fontWeight: "400",
        fontSize: "15px"
      }}>
        <Link href="/tickets/[ticketId]" as={`/tickets/${obj.id}`}>
          <a>View Ticket</a>
        </Link>
      </div>
    </div>
  )
}

export default TicketContainer