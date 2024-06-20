"use client"
import {motion, AnimatePresence} from "framer-motion"
const AnimationWrapper = ({children}:
    {children: React.ReactNode;}) => {
  return (
    <div>
        <AnimatePresence>
            <motion.div
            initial={{opacity: 0, y: 15}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 15}}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    </div>
  )
}

export default AnimationWrapper