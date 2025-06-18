import { motion } from "framer-motion"
import ArrowRight from "./svg/ArrowRight"
import Logo from "./svg/Logo"
import { animationStart, reveal } from "../utils/animation"

const NavBar = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: animationStart, duration: 0.5 }}>
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{
          ease: "easeIn",
          type: "tween",
          staggerChildren: 0.1,
          duration: 0.5,
          delayChildren: animationStart + 0.5,
        }}
        className="w-full h-20 flex items-center justify-around fixed top-0 bg-white z-100"
      >
        <motion.div variants={reveal}>
          <Logo />
        </motion.div>
        <div className="flex gap-5 items-center max-md:hidden">
            <motion.span variants={reveal} className="cursor-pointer">solutions.</motion.span>
            <motion.span variants={reveal} className="cursor-pointer">courses.</motion.span>
            <motion.span variants={reveal} className="cursor-pointer">resources.</motion.span>
            <motion.span variants={reveal} className="cursor-pointer">about.</motion.span>
        </div>
        <motion.div variants={reveal} className="flex gap-1 items-center font-bold cursor-pointer">
            <span className="mb-0.5">sign in</span>
            <ArrowRight />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default NavBar