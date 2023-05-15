'use client'
import React, {useEffect, useState} from 'react'
import { Result } from './Result'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Calculator = () => {


  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)

  const [calc, setCalc] = useState(0)

  const [validateHeight, setValidateHeight] = useState('')

  console.log(calc)

  function hasDecimals(height) {

    const heightDecimalCheck = height % 1 


    
    if (heightDecimalCheck === 0) {
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



  const handleCalculate = () => {
    if (weight && height) {
      imcFormula(height, weight);
    } else {
      throwErrorToast();
    }
  };


  const throwErrorToast =()=>{
    if (!weight || !height) {
      toast.error('Please enter valid Height & Weight!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  }
  
  


  return (
    <div  className='flex   min-h-[350px] rounded-xl max-w-[460px]  w-[100%]  bg-blue-50 shadow-2xl'>


      <div className='flex flex-col w-full p-4'>

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



          <button onClick={()=>handleCalculate() } className='mt-7 border border-blue-500 self-center px-4 py-2 rounded-lg transition-all duration-200 hover:text-white hover:bg-blue-500'> Calculate </button>
        

          <div className='w-full mb-5 mt-5 flex flex-col min-h-[50px] rounded-lg rounded-r-full bg-blue-500'>

          

                 {calc.length > 3 ?
       
                  <Result calc={calc} />
       
                  :

                   <div className='px-3 flex flex-col gap-3 py-2'>
                      <h4 className='text-white font-semibold text-base'>Welcome!</h4>
                      <p className='text-sm text-gray-300'>Enter your height and weight and you will see your BMI result here</p>
                    </div>

                  }      

          </div>
        </div> 

      </div>


       
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />       
    </div>
  )
}

export default Calculator