"use client"
import HomeText from '@/components/home-text';
import Button from '@/ui/button';
import CountUp from '@/ui/count-up';
import DecryptedText from '@/ui/decrypted-text';
import DarkVeil from '@/ui/prism';
import TrueFocus from '@/ui/true-focus';

export default function Home() {
  const devName = 'Cynthia Abah'
  return (
     <div className="bg-white dark:bg-purple-900 ">
      {/* Hero Section */}
      <section className="w-screen h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-black dark:to-black">

      <DarkVeil />

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center top-0 absolute">
          <div className="text-center">
            
            <HomeText 
            text={devName} 
            className={'w-full flex justify-center text-4xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6'} />
            
            <div className=" text-blue-600 dark:text-blue-600 font-medium mb-8">
              <TrueFocus
              sentence="Software Engineer-Student Nurse"
              manualMode={false}
              blurAmount={5}
              borderColor="red"
              animationDuration={2}
              pauseBetweenAnimations={1}
              textClassName='lg:text-5xl text-2xl'
              />
            </div>
            
           <div className="text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed font-mono text-shadow-sm text-medium sm:text-lg">
            <DecryptedText
              text="From Technology to Healthcare, my journey is fueled by a passion for solving problems, creating meaningful experiences, and building solutions that improve lives."
              speed={250}
              animateOn="view"
              revealDirection="center"
            />
          </div>

            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl" 
              text='View My Work'
              type='link'
              href='/works'
              />
              {/* supposed to be a link to reach out to me through */}
              <Button 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-blue-600 dark:text-blue-400 bg-transparent border-2 border-blue-600 dark:border-blue-400 rounded-lg  transform hover:scale-105 transition-all duration-200 shadow-lg" 
              text='Get In Touch'
              />
              
            </div>
          </div>
        </div>
       
        
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 blur-3xl"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">
                <CountUp
                  from={0}
                  to={50}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />+
                </div>
              <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-2">
                <CountUp
                  from={0}
                  to={5}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />+
              </div>
              <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-extrabold text-emerald-600 dark:text-emerald-400 mb-2">
                <CountUp
                  from={0}
                  to={25}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />+</div>
              <div className="text-gray-600 dark:text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-extrabold text-purple-600 dark:text-purple-400 mb-2"><CountUp
                  from={0}
                  to={15}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />+</div>
              <div className="text-gray-600 dark:text-gray-300">Technologies</div>
            </div>
          </div>
        </div>
      </section>

      {/* I AM YET TO ADD SKILLS THAT I HAVE, LANGUAGES THAT I CAN WRITE */}
    </div>
  );
}
