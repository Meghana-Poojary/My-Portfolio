import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-6 mt-10">

      {/* GitHub */}
      <a
        href="https://github.com/Meghana-Poojary"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full border border-gray-300 dark:border-gray-700
                   hover:bg-gray-100 dark:hover:bg-gray-800 transition 
                   hover:scale-110"
      >
        <FaGithub className="w-6 h-6 text-gray-900 dark:text-gray-100" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/meghana-poojary-78636930a"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full border border-gray-300 dark:border-gray-700
                   hover:bg-gray-100 dark:hover:bg-gray-800 transition 
                   hover:scale-110"
      >
        <FaLinkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      </a>

      {/* LeetCode */}
      <a
        href="https://leetcode.com/u/MeghanaVP789"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full border border-gray-300 dark:border-gray-700
                   hover:bg-gray-100 dark:hover:bg-gray-800 transition 
                   hover:scale-110"
      >
        <SiLeetcode className="w-6 h-6 text-orange-500" />
      </a>

    </div>
  );
}
