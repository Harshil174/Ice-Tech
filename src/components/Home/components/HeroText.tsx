import { animationStart, reveal } from "../../../utils/animation"
import Compass from "../../svg/Compass"
import { motion } from "framer-motion"

const HeroText = () => {
  return (
    <motion.div
      layout
      initial={{ height: 0 }}
      animate={{ height: "unset" }}
      transition={{ delay: animationStart, duration: 1 }}
      className="flex flex-col items-center text-center"
    >
      <motion.div variants={reveal} initial="hiddenVariant" animate="revealedVariant" transition={{ delay: animationStart + 1, duration: 0.5 }} className="flex flex-col text-2xl md:text-[3vw] font-bold mb-[30px] pt-[100px]">
        <span className="flex items-center gap-2.5">delivering <Compass /> industry's</span>
        <span>top tallents work</span>
      </motion.div>
      <motion.span variants={reveal} initial="hiddenVariant" animate="revealedVariant" transition={{ delay: animationStart + 1.2, duration: 0.5 }} className="mb-[30px] w-1/2 md:w-1/3 lg:w-1/4 text-sm leading-tight">
        vr headset warable network effect. hypergrowth activist investor. substack blogging thiel fellow dropout. alexis ohanian overhyped ed-tech series.
      </motion.span>
    </motion.div>
  )
}

export default HeroText