import Image from 'next/image'
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Login from './login'
import {useRouter} from 'next/router'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  const clickMe = (e) => {
    e.preventDefault()
    router.push('/test')
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Welcome to the App !</div>
      <Link href="/login">Login</Link>
      <button onClick={clickMe}>Click me</button>
    </main>
  )
}
