import React from 'react'

export const Result = ({calc}) => {

  const healthyText = 'Your BMI suggests that you are healthy because it is between the range of 18.5 to 24.9'
  const unhealtyText = 'Your BMI suggests that you are unhealthy, any BMI equal or above to 25.0 means overwheight'
  
 


  if(calc){

    return (
      <div className=' flex justify-between w-full p-4'> 
                      
          <div className='flex flex-col '><p className='text-gray-300'>Your BMI is </p> <span className='text-white text-2xl'>{calc !== NaN && calc.slice(0,4)}</span>  </div> 
  
          {calc < 24.9 ? <p className='text-gray-100 text-xs w-[50%]  pr-2'>{healthyText} </p> : <p className='text-gray-100 text-xs w-[50%]  pr-2'>{unhealtyText} </p> }
        </div>
    )
  }  
}
