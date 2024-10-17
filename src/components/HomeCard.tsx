import {motion} from 'framer-motion'
import { animationDuration, customEase } from '../static-data/animation-data'
import FeaturedProjects from './FeaturedProjects'
import HomeHeader from './HomeHeader'

function HomeCard() {
  return (
    <motion.main
    initial={{ y: 40, opacity: 0.2 }}
    animate={{ y: 0, opacity: 1}}
    transition={{ duration: animationDuration, ease: customEase }}
    >
      <div className='w-[100%] ml-[0rem] md:ml-[15rem] md:w-[75%] flex flex-col'>
        <HomeHeader/>
        <hr className='hidden md:block mt-4 border-zinc-700'></hr>
        <FeaturedProjects/>
        <div>
          
        </div>
        </div>
    </motion.main>
  )
}

export default HomeCard
