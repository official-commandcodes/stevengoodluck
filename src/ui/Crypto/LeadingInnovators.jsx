import { motion } from "framer-motion";

import LeadingItem from "./LeadingItem";

const containerVariants = {
  hidden: { opacity: 0, y: 50 }, // Start invisible and slightly below
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 }, // Each child starts hidden and below
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const data = [
  {
    name: "Stephen Goodluck",
    description: "Stephen who has been working with exchanges since 2019 and has vast knowledge on the processes for listing on exchanges. He has experience in working Bybit, Okx, Binance, Octa Fx, Exness, Fxtm, Xm and many others.",
    image: "/steven.png",
  },
  {
    name: "Thaher Miah",
    description: "Stephen who has been working with exchanges since 2019 and has vast knowledge on the processes for listing on exchanges. He has experience in working Bybit, Okx, Binance, Octa Fx, Exness, Fxtm, Xm and many others.",
    image: "/thaher.png",
  },
];

function LeadingInnovators() {
  return (
    <motion.section
      className="p-padding-hr pb-28 flex flex-col"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Animates when 30% of the section is visible
    >
      <h2 className="text-[40px] font-[700] pb-5 text-white">Leading Crypto Innovators</h2>

      <div className="flex items-center gap-x-20">
        {data.map((person, index) => {
          return (
            <motion.div key={index} variants={itemVariants}>
              <LeadingItem url="/steven.png" image={person.image} heading={person.name}>
                {person.description}
              </LeadingItem>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

export default LeadingInnovators;
