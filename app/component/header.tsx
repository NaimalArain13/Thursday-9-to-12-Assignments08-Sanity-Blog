import Link from "next/link";
import { FaLinkedin, FaGithub , FaInstagram } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input";

export default function Header() {

  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-500 text-white py-4 shadow-md sticky top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Website Name */}
          <div className="text-2xl font-bold">
            <Link href="/">Blogist.co</Link>
          </div>
          <div className="hidden md:flex relative rounded-full items-center">
            <Input
              type="text"
              placeholder="What are you looking for?"
              className="w-[270px] bg-gray-300 rounded-full "
            />
            <IoSearchOutline
              size={24}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white"
            />
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-7">
          <Link
            href="https://www.linkedin.com/in/naimal-arain-/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            <FaLinkedin size={28} />
          </Link>
          <Link
            href="https://github.com/NaimalArain13/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            <FaGithub  size={28} />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            <FaInstagram size={28} />
          </Link>
        </div>
      </div>
    </header>
  );
}

