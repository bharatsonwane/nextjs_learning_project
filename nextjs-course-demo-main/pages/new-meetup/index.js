// our-domain.com/new-meetup
import React, { Fragment } from "react";
import Head from 'next/head'
import { useRouter } from 'next/router'

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

import { NotificationContainer, NotificationManager } from 'react-notifications'
import 'react-notifications/lib/notifications.css';

function NewMeetupPage() {
  const router = useRouter()

  const addMeetupHandler = async (enteredMeetupData) => {
    // const response = await fetch('https://some-domain.com/abc')
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    console.log(data)

    // setTimeout(() => {
    //   NotificationManager.success("Meetup added successfully.", "", 1000)
    // }, 500);

    router.push('/')

  };

  return (
    <Fragment>
      <Head>
        <title>New Meetup form</title>
        <meta name="description" content="Add your own meetups and create amazing networking opportunities.!!!" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
      {/* <NotificationContainer /> */}
    </Fragment>
  );
}

export default NewMeetupPage;
