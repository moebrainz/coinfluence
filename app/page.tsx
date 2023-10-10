import { Hero, HeroTwo, SectionThree } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid grid-rows-3  overflow-hidden">
    <Hero />
    <HeroTwo />
    <SectionThree />
  
    </main>
  )
}
