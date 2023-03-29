import AutoTyping, { BlinkCursor } from 'react-auto-typing'

export function IntroductionText(this: any){
    return(
    <header className="flex justify-center h-screen">
    <div className="flex flex-col z-30 mt-20 text-white drop-shadow-sm">
    <AutoTyping
      className = "text-3xl text-center font-mono z-10 md:text-8xl"
      active 
      textRef='Hello!'
      writeSpeed={2000}
      deleteSpeed={0}
      delayToWrite={2000}
      delayToDelete={1000000}
    />
    <AutoTyping
      className = "text-2xl text-center font-mono z-10 md:text-6xl hover:text-blue-400"
      active
      textRef='My name is Karen Tihhomirov' 
      writeSpeed={2000} 
      deleteSpeed={0} 
      delayToWrite={4000} 
      delayToDelete={100000000}
    />
    <AutoTyping
      className = "text-2xl text-center font-mono z-10 md:text-6xl"
      active 
      textRef='I am novice Front end developer who is studying in the 2nd year of 
      computer science. Has a basic knowledge of programming languages 
      and a desire to continue learning and develop in the field of programming.'
      writeSpeed={2000} 
      deleteSpeed={0} 
      delayToWrite={6000} 
      delayToDelete={2000000000} 
    />
    </div>
        <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
    <source
      src="src\assets\background.mp4"
      type="video/mp4"
    />
    </video>
        </header> 
    )
}