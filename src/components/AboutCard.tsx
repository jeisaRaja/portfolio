import {motion} from 'framer-motion'
import { animationDuration, customEase } from '../static-data/animation-data'
function AboutCard() {
  return (
    <motion.main
    initial={{ y: 40, opacity: 0.2 }}
    animate={{ y: 0, opacity: 1}}
    transition={{ duration: animationDuration, ease: customEase }}
    >
      <div className='ml-[15rem]'>AboutCard</div>
    </motion.main>
  )
}

export default AboutCard
