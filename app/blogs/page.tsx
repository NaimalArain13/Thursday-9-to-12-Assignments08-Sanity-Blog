"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import BlogCard from "@/app/component/blogCard";
import Button from "../component/button";
import Loader from "../component/loader";
import { Type } from "./[slug]/page";
import Image from "next/image"
import Link from "next/link";


const query = '*[_type == "post"]{title,description,slug,"author":author->name,"categories": categories[]->title,publishedAt,mainImage{asset->{url}, alt},body}';

export default function Blog() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Type[]>([]);

  useEffect(() => {
    const dataFetching = async () => {
      setLoading(true)
      const fetchedData = await client.fetch(query);
      setData(fetchedData);
    };
    dataFetching();
    setLoading(false)
  }, []);

  if(loading){
    return(
      <Loader />
    )
  }
  return (
    <div>
      {/* Top Header */}
      <header className="relative h-[75vh] bg-gradient-to-b from-blue-800 to-blue-500">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://i.pinimg.com/236x/eb/e9/d1/ebe9d1f3a427f27274825a4d25a60f30.jpg')" }}></div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Inspire & Share</h1>
          <p className="text-lg md:text-xl mt-4 max-w-2xl">
            A platform to share knowledge, insights, and inspiration. Explore blogs written by diverse authors.
          </p>
        </div>
      </header>

      {/* Blog List */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Latest Blogs</h2>
        <div className="flex gap-4">
        <div className="grid grid-cols-1  gap-8">
          {data.length > 0 ? (
            data.map((post) => (
              <BlogCard
                key={post.slug.current}
                title={post.title}
                author={post.author}
                categories={post.categories}
                image={post.mainImage?.asset?.url|| ""}
                imageAlt={post.mainImage?.alt || "Blog Image"}
                description={post.description}
                slug={post.slug.current } 
                publishedAt={post.publishedAt}
              />
            ))
          ) : (
            <p className="text-center text-gray-600">No blogs available</p>
          )}
        </div>
       {/* Staff Picks Sidebar */}
       <div className="hidden lg:flex w-1/3 bg-white rounded-lg shadow-md p-4 sticky top-20 h-fit">
       <div className="flex flex-col gap-2">
        <div className=" p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Staff Picks</h3>
            <ul className="space-y-7">
              <li className="flex items-center">
                <Image
                  src="https://i.pinimg.com/236x/d4/d7/e6/d4d7e692779a9be82160e31e5c0c949e.jpg"
                  alt="Medium Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-gray-500">In The Medium Blog</p>
                  <p className="text-sm font-semibold text-gray-800">
                    It happened on Medium in 2024
                  </p>
                  <p className="text-xs text-gray-400">Dec 19, 2024</p>
                </div>
              </li>
              <li className="flex items-center">
                <Image
                  src="https://i.pinimg.com/474x/44/e5/63/44e5633da0d5081ae0d21fe5d66dbf95.jpg"
                  alt="Medium Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-gray-500">In The Medium Blog</p>
                  <p className="text-sm font-semibold text-gray-800">
                    Best gifts for writers, from the Medium community
                  </p>
                  <p className="text-xs text-gray-400">Dec 9, 2024</p>
                </div>
              </li>
              <li className="flex items-center">
                <Image
                  src="https://i.pinimg.com/236x/83/a5/d4/83a5d4d329ace4b153356a1f59ad38ad.jpg"
                  alt="Medium Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-gray-500">In The Medium Blog</p>
                  <p className="text-sm font-semibold text-gray-800">
                    The most-highlighted sentences of 2024
                  </p>
                  <p className="text-xs text-gray-400">Dec 23, 2024</p>
                </div>
              </li>
            </ul>
            <div className="mt-4">
              <Link
                href="#"
                className="text-blue-500 text-sm font-medium hover:underline"
              >
                See the full list
              </Link>
            </div>
            </div>
            <div className=" p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Recommended Topic For You</h3>
              <div>
                  <MyButton />
              </div>
            </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

//will update the onclick property later
const categories = [
  {
  button:"AI",
  onclick:()=>{console.log("")}
},
  {
  button:"JS",
  onclick:()=>{console.log("")}
},
  {
  button:"TS",
  onclick:()=>{console.log("")}
},
  {
  button:"TW",
  onclick:()=>{console.log("")}
},
  {
  button:"ML",
  onclick:()=>{console.log("")}
},
  {
  button:"DL",
  onclick:()=>{console.log("")}
},
]
const MyButton = ()=>{
  return(
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 " >
      {categories.map((button, index)=>(
        <Button key={index}  {...button}/>
      ))}
      
    </div>
  )
}