import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push(`/${props.id}`);
    // router.push("/" + props.id);
  };



  const handleDeleteMeetup = async (id) => {
    // const response = await fetch('https://some-domain.com/abc')
    const response = await fetch('/api/delete-meetup', {
      method: 'DELETE',
      body: JSON.stringify(id),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()

    router.push('/')

  };


  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler} style={{margin: "10px"}}>Show Details</button>
          <button onClick={() => handleDeleteMeetup(props.id)}>Delete Meetup</button>
        </div>
        {/* <div>
          <button onClick={() => handleDeleteMeetup(props.id)}>Delete Meetup</button>
        </div> */}
      </Card>
    </li>
  );
}

export default MeetupItem;
