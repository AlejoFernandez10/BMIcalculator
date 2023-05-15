import Calculator from '@/components/Calculator'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24 px-2 bg-gradient-to-r from-white  to-blue-300">
     
     <section className='w-full pt-20 max-w-[1100px] items-center gap-3 justify-between flex flex-col lg:flex-row '>

      <div className='w-full max-w-[460px] mb-5 lg:max-w-[500px]  p-2'>
        <h1 className='text-4xl font-bold lg:text-6xl'>Body Mass Index Calculator</h1>

        <p className='text-gray-700 mt-10 text-sm md:text-base'>Better understand your weight in relation to your height using our body mass index (BMI) calculator. BMI is not the sole determinant of a healthy weight.
        BMI is not used for muscle builders, long distance athletes, pregnant women, the elderly or young children. This is because <strong>BMI does not take into account whether the weight is carried as muscle or fat</strong> , just the number. Those with a higher muscle mass, such as athletes, may have a high BMI but not be at greater health risk. 
        </p>
      
      </div>

      <Calculator />
     </section>

    </main>
  )
}
