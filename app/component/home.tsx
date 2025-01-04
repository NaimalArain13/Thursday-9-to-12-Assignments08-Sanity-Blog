"use client";
import Link from "next/link";
import PunchCard from "./punchCard";
import HomeCard from "./homeCard";

const cardData = [
  {
    title:"Discover",
    description:"Explore a diverse range of blog posts written by talented authors from around the world."
  },
  {
    title:"Create",
    description:"Share your thoughts and experiences with our easy-to-use blogging tools."
  },
  {
    title:"Engage",
    description:"Connect with a community of readers and writers who value meaningful conversations."
  },
  {
    title:"Grow",
    description:"Build your audience and establish your presence in the blogging world."
  },
 
]
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header Section */}
      <header className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Blogist.co</h1>
        <p className="text-lg font-light max-w-3xl mx-auto">
          Your ultimate platform for discovering and sharing insightful blog posts.
        </p>
      </header>

      {/* Highlights Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
         {cardData.map((item, index)=>(
          <HomeCard key={index} {...item}/>
         ))}
        </div>
      </section>
      <div className="justify-center flex">
      <PunchCard />
      </div>
    

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Join Blogist.co Today</h2>
          <p className="text-lg font-light max-w-3xl mx-auto mb-6">
            Whether you're a reader, writer, or both, Blogist.co is your gateway to an inspiring world of content.
          </p>
          <Link
            href="/blogs"
            className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

    </div>
  );
}
