import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '../src/components/button'
import Card from '../src/components/card'

export default function Home() {
  return (
    <div>
      <Button />
      <Card />
    </div>
  )
}
