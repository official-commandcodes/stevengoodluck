import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AnimatedText() {
  const words = ["Discover", "Bitsphere", "Consulting!"];
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the component is visible
    triggerOnce: true, // Run animation only once
  });

  // Variants for the animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between animations of each word
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref}>
      <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ textAlign: "center" }}>
        {words.map((word, index) => (
          <motion.span key={index} variants={wordVariants} className="text-[56px] font-[700] text-center leading-[4rem] pb-6" style={{ display: "inline-block", margin: "0 0.5rem" }}>
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

export default AnimatedText;
