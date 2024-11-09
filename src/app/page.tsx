




export default function Home() {
  
  return (
    <main>
       <div className='container pt-8'>
     <div className='flex justify-between items-left'>
     <div className='text-xl font-medium text-white'>Logo</div>
       <ul className='gap-10 lg:gap-16 hidden md:flex text-white'>
        <li className='menuLink'><a href='#hero'>Home</a></li>
        <li className='menuLink'><a href="#about"> About</a></li>

                
            
        
        
         <li className='menuLink'><a href='#contact'>Contact</a></li>
        </ul> 
        
         </div>
    </div>
    
    <div id="hero" className='min-h-screen bg-[url(/pp.jpeg)] bg-cover   '
    
    
    style={{backgroundSize: "80%", backgroundPosition: "center 100px "}}
      >
        
        <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
          <div className='hidden lg:block'></div>
          <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-end items-baseline'>
            
          </div>
          <div>
            <h1 className="text-4xl mg:3xl text-right font-serif text-black ">New World</h1>
             <p className='text-right text-2xl font-semibold text-black'  ><i>Enjoy the world with some music</i></p>
            </div>
            
        </div>
    </div>
    
            
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl'>Get in touch</h2>
                
                
                 

            

                </div>
            </div>
            
                
        
                    
                
                
    </div>
    <div id='about' className='container pt-32'>
        <h2 className='text-4xl mg:5xl'>About Me</h2>
        <p className='text-gray-500 pt-4'> I am student at GIAIC , pursuing a curse in Artficial intelligence,Web 3.0, & Metaverse.Passionate about technology and constantly learing new skills to stay up to-date with the latest innovation.</p>
        
      
    </div>
    <div className="text-center">
                <button className="bg-blue-900 p-2 px-4 text-center font-semibold"> Join Now</button>
            </div>
    <div className='mt-16 py-6 text-center bg-accent font-semibold'>
      &copy;   Ayesha | ALL rights reserved 2024.      
    </div>
  
      
      
      
    </main>
  )
}


    

