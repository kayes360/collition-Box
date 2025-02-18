  
import Box from './Box'
 const colors:string[]=[
    "bg-red-500",
    // "bg-blue-500",
    // "bg-green-500",
    // "bg-yellow-500",
    // "bg-purple-500",
    // "bg-pink-500",
    // "bg-cyan-500",
 ]
   
export default function BoxContainer() { 

  return ( 
        <div className='w-20 h-[760px] bg-amber-100  outline-8 outline-neutral-800'>

        {colors.map((color, index) => (
          <Box key={index} color={color} index={index}  />
        ))} 

        </div> 
  )
}
