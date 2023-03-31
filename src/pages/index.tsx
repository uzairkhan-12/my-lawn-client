import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Dashboard from '@/components/Dashboard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Dashboard />
    </>
  )
}
