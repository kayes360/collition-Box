import { useState } from "react";

 

interface BoxProps { 
  color: string;
  index: number;  

}


export default function Box({ color, index }: BoxProps) {

  const delay: number = 0.3 + index * 0.1; 
  
  const [isStarted, setIsStarted] = useState<boolean>(false)
  const [boxState, setBoxState] = useState<string>('') 
  const handleAnimationStart =():void => { 
    setIsStarted(true)
    setBoxState('started') 
   }
 
 const handleAnimationIteration =():void => { 
    setBoxState( () => boxState==='started' ? 'ended':'started') 
 }
  return (
    <div>
        <div   className={`animate-slide size-5  ${color} mb-0.5 last:mb-0`}
          style={{ animationDelay: `${delay}s` }}
          onAnimationStart={handleAnimationStart}
          onAnimationIteration={handleAnimationIteration}
          >
            {
                isStarted && `${boxState} ${index+1}`
            }
            
        </div>
    </div>
  );
}
