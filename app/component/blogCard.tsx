
"use client";

import Link from "next/link";
import Image from "next/image";

export interface BlogCardProps {
  [x: string]: unknown;
  title: string;
  author: string;
  categories: string[];
  image: string;
  imageAlt: string;
  description: string;
  slug:string;
  publishedAt: string;
}

export default function BlogCard({
  title,
  author,
  categories,
  image,
  imageAlt,
  description,
  slug,
  publishedAt,
}: BlogCardProps) {
  return (
    <div className="flex flex-col md:flex-row items-start bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      {/* Left Icons Section */}
      <div className="hidden md:flex flex-col items-center justify-center w-16 h-full bg-gray-100 p-4">
        <div className="mb-4">
          <span className="text-gray-500">🔗</span>
        </div>
        <div className="mb-4">
          <span className="text-gray-500">❤️</span>
        </div>
        <div>
          <span className="text-gray-500">📖</span>
        </div>
      </div>

      {/* Blog Image */}
      <div className="relative w-full md:w-1/3 h-48">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>

      {/* Blog Details */}
      <div className="flex-1 p-4">
        <Link href={`/blogs/${slug}`}>
          <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600">
            {title}
          </h3>
        
        <p className="text-sm text-gray-600 mt-2">
          By <span className="font-medium text-gray-700">{author}</span> | {" "}
          {new Date(publishedAt).toDateString()}
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Category: {categories.join(", ")}
        </p>
        <p className="text-gray-700 mt-3 line-clamp-3">
          {description}
        </p>
        </Link>
      </div>
      {/* Left Icons Section */}
      <div className="md:hidden gap-5 flex flex-row md:flex-col items-center justify-center md:w-16 md:h-full bg-gray-100 w-full p-4">
        <div className="md:mb-4">
          <span className="text-gray-500">🔗</span>
        </div>
        <div className="md:mb-4">
          <span className="text-gray-500">❤️</span>
        </div>
        <div>
          <span className="text-gray-500">📖</span>
        </div>
      </div>

    </div>
  );
}
