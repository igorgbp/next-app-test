import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const User = require('./models/user');

async function getUsers() {
  const users = await User.findAll();
  return users;
}

 async function getServerSideProps() {
  const users = await getUsers();
  return {
    props: {
      users: JSON.parse(JSON.stringify(users))
    }
  }
}

useEffect(()=>getServerSideProps())
  return (
    <div><p>{users.name}</p>
    <p>{User.email}</p></div>
  )
}
