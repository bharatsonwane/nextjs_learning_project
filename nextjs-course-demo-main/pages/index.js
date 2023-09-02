import { MongoClient } from 'mongodb'
import Head from 'next/head'
import { Fragment, useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Some Address 5, 12345 some city",
//     description: "This is a first meeup!",
//   },
//   {
//     id: "m2",
//     title: "A second Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Some Address 10, 12345 some city",
//     description: "This is a second meeup!",
//   },
// ];

function HomePage(props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  //   // send a http request and tech data
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);

  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list  of hightly active React meetups!!!" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export default HomePage;



// export async function getStaticProps() {
//   // fetch data from an API
//   const client = await MongoClient.connect("mongodb+srv://bharat:K9BpDcZd6wLA3yj@cluster0.eanwv.mongodb.net/meetups?retryWrites=true&w=majority");
//   const db = client.db();
//   const meetupsCollection = db.collection("meetups");

//   const meetup = await meetupsCollection.find().toArray()

//   client.close()

//   return {
//     props: {
//       meetups: meetup.map(meetup => ({
//         title: meetup.title,
//         address: meetup.address,
//         image: meetup.image,
//         id: meetup._id.toString()
//       })),
//     },
//     revalidate: 1, // on every 1 second static page will be regenerate on server
//   };
// }


// // // on every request static page will be regenerate on server side
export async function getServerSideProps() {
  // fetch data from an API
  const client = await MongoClient.connect("mongodb+srv://bharat:K9BpDcZd6wLA3yj@cluster0.eanwv.mongodb.net/meetups?retryWrites=true&w=majority");
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetup = await meetupsCollection.find().toArray()

  client.close()

  return {
    props: {
      meetups: meetup.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      })),
    },
  };


  // const req = context.req
  // const res = context.res

  // //   // fetch data from an API
  // return {
  //   props: {
  //     meetups: DUMMY_MEETUPS,
  //   },
  // };
}
