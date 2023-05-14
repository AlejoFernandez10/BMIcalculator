import Calculator from '@/components/Calculator'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
     
     <section className='w-full pt-20 max-w-[1100px] items-center gap-3 justify-between flex flex-col sm:flex-row '>

      <div>
        <h1 className='text-4xl font-bold lg:text-6xl'>Body Mass Index Calculator</h1>
      </div>

      <Calculator />
     </section>

    </main>
  )
}
