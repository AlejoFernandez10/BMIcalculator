'use client'
import React, {useState} from 'react'



const Calculator = () => {


  const [weight, setWeight] = useState()
  const [height, setHeight] = useState()

  const [calc, setCalc] = useState()

  const [validateHeight, setValidateHeight] = useState('')


  function hasDecimals(height) {

      const decimalCheck = height % 1 

    if (decimalCheck === 0) {
      setValidateHeight('')
    } else {
      setValidateHeight('Please enter your height in centimeters')
    }
   
  }

  function imcFormula (height, weight) {
    const formula = Math.floor(weight)  / (height * height) 
   
    
  
    hasDecimals(height)
    setCalc((formula * 10000).toString())
  }
  
  const healthyText = 'Your BMI suggests that you are healthy because it is between the range of 18.5 to 24.9'
  const unhealtyText = 'Your BMI suggests that you are unhealthy, any BMI equal or above to 25.0 means overwheight'
  

  return (
    <div  className='flex   min-h-[350px] rounded-xl max-w-[450px]  w-[95%]  bg-blue-50'>


      <div className='flex flex-col w-full px-4'>

        <h2 className='font-semibold text-lg mb-4'>Enter your details below</h2>
         <span className='text-gray-500 font-semibold mb-5'>Metric System</span> 

       <div className='flex flex-col w-[95%] '>


          <div className='flex gap-5'>

            <div>

              <div className='relative'>

                  <label htmlFor="weight">Weight:</label>
                  <input type="text" name='weight'  placeholder='0' className='pl-3 text-xl text-black w-full rounded-xl min-h-[50px]' onChange={(e)=> setWeight(e.target.value )} />

                  <p className='absolute text-blue-600 right-2 font-semibold bottom-3'>KG</p>


              </div>
                 
            </div>


            <div>

              <div  className='relative'>

                <label htmlFor="height">Height:</label>
                <input type="text" name='height'  placeholder='0' className='pl-3 text-xl text-black w-full rounded-xl min-h-[50px]' onChange={(e)=> setHeight(e.target.value )} />

                    <p className='absolute text-blue-600 right-2 font-semibold bottom-3'>CM</p>
              </div>

              {validateHeight !== '' && <p className='text-xs text-red-500'>{validateHeight} </p> }
            </div>
            </div>



          <button onClick={()=>imcFormula(height, weight)} className='mt-7 border border-blue-500 self-center px-4 py-2 rounded-lg transition-all duration-200 hover:text-white hover:bg-blue-500'> Calculate </button>
        

          <div className='w-full mb-5 mt-5 flex flex-col min-h-[50px] rounded-lg rounded-r-full bg-blue-500'>

                 {calc ?
       
                  <div className=' flex justify-between w-full p-4'> 
                    
                    <div className='flex flex-col '><p className='text-gray-300'>Your BMI is </p> <span className='text-white text-2xl'>{calc.slice(0,4)}</span>  </div> 

                    {calc < 24.9 ? <p className='text-gray-100 text-xs w-[50%]  pr-2'>{healthyText} </p> : <p className='text-gray-100 text-xs w-[50%]  pr-2'>{unhealtyText} </p> }
                  </div>
       
                  :
                   <div className='px-3 flex flex-col gap-3 py-2'>
                      <h4 className='text-white font-semibold text-base'>Welcome!</h4>
                      <p className='text-sm text-gray-300'>Enter your height and weight and you will see your BMI result here</p>
                    </div>

                  }      

          </div>
        </div> 

      </div>


       

    </div>
  )
}

export default Calculator