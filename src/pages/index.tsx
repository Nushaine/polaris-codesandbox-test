import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { AppProvider, Button } from '@shopify/polaris'
import en from "@shopify/polaris/locales/en.json";

export default function Home() {
  return (
    <AppProvider i18n={en}>
      <Button>Hi</Button>
    </AppProvider>
  )
}
