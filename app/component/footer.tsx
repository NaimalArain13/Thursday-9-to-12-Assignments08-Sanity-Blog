import Link from "next/link";

export default function Footer() {
  return (
    <header className=" text-black py-2 shadow-md ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Website Name */}
        <div className="text-2xl font-bold">
          <Link href="/">Blogist.co</Link>
        </div>

        {/* Navigation Links for Larger Screens */}
        <nav className="flex gap-4 text-lg">
          <Link href="/" className="underline underline-offset-2 hover:text-blue-300">
            Home
          </Link>
          <Link href="/about" className="underline underline-offset-2 hover:text-blue-300">
            About
          </Link>
          <Link href="/blogs" className="underline underline-offset-2 hover:text-blue-300">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
