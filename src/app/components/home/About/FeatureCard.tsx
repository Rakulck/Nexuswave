import React from 'react';
import { motion } from 'framer-motion';
import { ComponentType } from 'react';

interface FeatureCardProps {
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  delay?: number;
  isContact?: boolean;
  phoneNumber?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  delay = 0, 
  isContact = false,
  phoneNumber 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`flex items-center ${isContact ? 'justify-between' : 'gap-4'} p-6 bg-neutral-900/50 rounded-xl 
        border border-gray-700/50 shadow-lg hover:border-gray-500/80 hover:shadow-xl 
        transition-all duration-300 ${isContact ? 'border-2 border-gray-500/50 col-span-1 md:col-span-2 relative overflow-hidden group' : ''}`}
    >
      {isContact && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400/20 to-transparent animate-shimmer"></div>
      )}
      <div className={`flex items-center ${isContact ? 'gap-4 z-10' : 'gap-4'}`}>
        <Icon className="h-10 w-10 text-silver" />
        <span className="text-2xl font-bold text-silver">{title}</span>
      </div>
      {isContact && phoneNumber && (
        <a href={`tel:${phoneNumber}`} className="text-3xl font-bold text-silver hover:text-white transition-colors z-10">
          {phoneNumber}
        </a>
      )}
    </motion.div>
  );
};

export default FeatureCard; 