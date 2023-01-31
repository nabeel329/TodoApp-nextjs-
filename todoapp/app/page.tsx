import React from 'react';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Todo from "./todo"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Todo/>
    </>
  )
}
