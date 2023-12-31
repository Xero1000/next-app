import Image from 'next/image'
import aldebaran from '@/public/images/aldebaran-s-qtRF_RxCAo0-unsplash.jpg'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
import { Metadata } from 'next'
import HeavyComponent from './components/HeavyComponent'


export default async function Home() {
  
  return (
    <main className='relative h-screen'>
      <h1>Hello World</h1>
      <HeavyComponent />
      {/* <Image 
        src="https://bit.ly/react-cover" 
        alt="Nebula"
        fill
        className='object-cover'
        sizes='(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw'
        quality={100}
        priority
      /> */}
    </main>
  )
}

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch('');

//   return {
//     title: 'product.title',
//     description: '...'
//   }
// }
