"use client";
import { client } from "@/sanity/lib/client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import CTA from "@/app/component/CTA";
import Loader from "@/app/component/loader";

export interface Type {

  title: string;
  description: string;
  slug: {
    _type: string;
    current: string;
  };
  author: string;
  categories: string[];
  publishedAt: string;
  mainImage: {
    asset: {
      url: string;
    };
    alt?: string; // Optional since not all mainImage objects may have an alt
  };
  body: Array<{
    _key: string;
    _type: string;
    style?: string; // Optional as not all blocks may have a style
    markDefs?: Array<{
      _key: string;
      _type: string;
      href?: string; // Optional since links may not always have hrefs
    }>;
    children: Array<{
      _key: string;
      _type: string;
      text: string;
      marks?: string[]; // Optional, might be empty or missing
    }>;
    listItem?: string; // Optional to handle list items (e.g., "bullet")
    level?: number; // Optional for list hierarchy
  }>;
}
const query =
  '*[_type == "post"]{title,description,slug,"author":author->name,"categories": categories[]->title,publishedAt,mainImage{asset->{url }, alt},body[]{..., _type == "image"=>{"assetUrl": asset->url}}}';

export default function BlogSlug({ params }: { params: { slug: string } }) {
  const [data, setData] = useState<Type[]>([]);
  const [loading, setLoading] = useState(true); // Set default to true

  useEffect(() => {
    const dataFetching = async () => {
      try {
        const fetchedData = await client.fetch(query);
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Ensure loading is set to false regardless of success or error
      }
    };
    dataFetching();
  }, []);

  const blogSlug = data.find((blog:Type ) => blog.slug.current === params.slug);

  if (loading || !blogSlug) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold">{blogSlug.title}</h1>
        <p className="text-lg mt-2">
          By <span className="font-semibold">{blogSlug.author}</span>
        </p>
        <p className="text-sm mt-1">{new Date(blogSlug.publishedAt).toDateString()}</p>
      </section>

      {/* Blog Content Section */}
      <section className="max-w-2xl mx-auto py-12 px-4 bg-white rounded-md shadow-lg mt-3">
        {/* Blog Image */}
        {blogSlug.mainImage?.asset?.url && (
          <div className="justify-center flex mb-8 w-full max-w-2xl">
            <Image
              src={blogSlug.mainImage.asset.url}
              alt={blogSlug.mainImage.alt || "Blog Image"}
              width={200}
              height={200}
              className="w-64 rounded-md"
            />
          </div>
        )}
        {/* Blog Details */}
        <p className="text-gray-700 text-lg mb-6">{blogSlug.description}</p>
        <p className="text-sm text-blue-600 mb-8">
          Categories: {blogSlug.categories?.join(", ")}
        </p>

        {/* Blog Body */}
        <div className="prose max-w-none">
          <PortableText
            value={blogSlug.body}
            components={{
              types: {
                image: ({ value }) => (
                  <Image
                    src={value.assetUrl}
                    alt={value.alt || "Content Image"}
                    width={200}
                    height={200}
                    className="rounded-md"
                  />
                ),
              },
              marks: {
                link: ({ children, value }) => (
                  <Link
                    href={value.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-700"
                  >
                    {children}
                  </Link>
                ),
              },
            }}
          />
        </div>
      </section>

      {/* Call to Action */}
      <CTA />
    </div>
  );
}
