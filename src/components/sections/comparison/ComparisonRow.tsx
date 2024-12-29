import { motion } from 'framer-motion';

interface Props {
  challenge: string;
  solution: string;
  index: number;
}

export const ComparisonRow = ({ challenge, solution, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="grid md:grid-cols-2 gap-4"
    >
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <p className="text-[#88A9C3]">{challenge}</p>
      </div>
      <div className="bg-[#B68D40] p-6 rounded-xl shadow-sm">
        <p className="text-[#091235] font-medium">{solution}</p>
      </div>
    </motion.div>
  );
};