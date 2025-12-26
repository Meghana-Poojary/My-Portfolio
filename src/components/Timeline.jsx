import React from 'react';
import { FaGraduationCap, FaBriefcase, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

// --- 1. Data Structure (remains the same) ---
const timelineData = [
  {
    id: 1,
    title: 'Full Stack Developer',
    subtitle: 'Sowntra',
    date: 'Nov 2025 - December 2025',
    description: 'Worked on frontend, backend and debugging of the main website. Improved performance by through code optimization and implemented new features based on user feedback.',
    icon: <FaBriefcase className="w-5 h-5" />,
    iconBg: 'bg-blue-500', // blue-500
    arrowColor: 'border-blue-500',
  },
  {
    id: 2,
    title: 'Summer Intern',
    subtitle: "Vivekanad Education Society's Institute of Technology",
    date: 'May 2025 - Jul 2025',
    description: 'Built Feedback Catalyst, a full-stack platform that automated feedback analysis with branch-wise insights, visual charts, and PDF reports.',
    icon: <FaBriefcase className="w-5 h-5" />,
    iconBg: 'bg-emerald-500', // emerald-500
    arrowColor: 'border-emerald-500',
  },
];

const timelineElementVariants = {
  hidden: { opacity: 0, scale: 0.8 }, // Smaller scale for a nice "pop-in"
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 70, damping: 10 } },
};

const TimelineElement = ({ element, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className="relative mb-12 w-full"
      variants={timelineElementVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="flex items-start gap-4 md:gap-0">
        
        {/* LEFT SECTION (left item content or right item date - DESKTOP ONLY) */}
        <div className={`hidden md:flex md:w-[calc(50%-40px)] flex-col ${isLeft ? 'justify-end pr-4' : 'justify-start items-end pr-4'}`}>
          {isLeft && (
            // Desktop Content for Left-aligned items
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border border-gray-200 dark:border-gray-700 w-full">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{element.title}</h3>
              <h4 className="text-base text-blue-600 dark:text-blue-400 font-medium mb-2">{element.subtitle}</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{element.description}</p>
            </div>
          )}
          {!isLeft && (
            // Desktop Date for Right-aligned items
            <p className="text-xs text-gray-500 dark:text-gray-400 italic whitespace-nowrap mb-2">{element.date}</p>
          )}
        </div>

        {/* CENTER SECTION (Icon + Vertical Line) - Unchanged */}
        <div className="flex flex-col items-center md:w-20">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white z-20 flex-shrink-0 ${element.iconBg} shadow-lg`}>
            {element.icon}
          </div>
          {/* Vertical line is hidden on mobile */}
          <div className="hidden md:block w-0.5 h-20 bg-gray-400 dark:bg-gray-600 mt-2 mb-2"></div>
        </div>

        {/* RIGHT SECTION (right item content or left item date) */}
        <div className={`w-full md:w-[calc(50%-40px)] flex flex-col ${!isLeft ? 'md:pl-4' : 'md:pl-4'}`}>
          
          {/* 1. DESKTOP CONTENT/DATE (Shown only on md screens and up) */}
          {/* The content that appears here is for the right side of the desktop timeline */}
          <div className='hidden md:block'>
            {!isLeft && (
              // Desktop Content for Right-aligned items
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{element.title}</h3>
                <h4 className="text-base text-blue-600 dark:text-blue-400 font-medium mb-2">{element.subtitle}</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{element.description}</p>
              </div>
            )}
            {isLeft && (
              // Desktop Date for Left-aligned items
              <p className="text-xs text-gray-500 dark:text-gray-400 italic whitespace-nowrap mb-2">{element.date}</p>
            )}
          </div>
          
          {/* 2. MOBILE DATE & CONTENT (Shown only below md screens) */}
          {/* This unified section ensures content is rendered only ONCE on mobile, regardless of isLeft state */}
          <div className="md:hidden">
            <p className="text-xs text-gray-500 dark:text-gray-400 italic mb-2">{element.date}</p>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{element.title}</h3>
              <h4 className="text-base text-blue-600 dark:text-blue-400 font-medium mb-2">{element.subtitle}</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{element.description}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <section className="relative py-2 px-4 bg-gray-50 dark:bg-indigo-950">
      <div className="container mx-auto max-w-4xl">

        {/* Vertical Timeline Line (Desktop only) */}
        <div className="hidden md:block absolute left-1/2 top-32 bottom-0 -translate-x-1/2 w-1 bg-gray-300 dark:bg-gray-600"></div>

        {/* Timeline Items Container */}
        <div className="relative space-y-12 md:space-y-16">
          {timelineData.map((element, index) => (
            <TimelineElement key={element.id} element={element} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
