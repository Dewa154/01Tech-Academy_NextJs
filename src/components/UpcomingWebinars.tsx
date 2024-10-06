"use client"
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";


function UpcomingWebinars() {

 const featuredWebinars = [
        {
          "title": "AI Fundamentals",
          "description": "Explore the basics of artificial intelligence and its applications in various industries.",
          "link": "https://example.com/ai-fundamentals",
          "isFeatured": true
        },
        {
          "title": "Data Science 101",
          "description": "Learn essential data science techniques for analyzing and interpreting complex datasets.",
          "link": "https://example.com/data-science-101",
          "isFeatured": false
        },
        {
          "title": "Cloud Computing Essentials",
          "description": "Discover cloud computing principles and how they transform business operations today.",
          "link": "https://example.com/cloud-computing",
          "isFeatured": true
        },
        {
          "title": "Cybersecurity Basics",
          "description": "Understand the fundamentals of cybersecurity and best practices for protecting digital assets.",
          "link": "https://example.com/cybersecurity-basics",
          "isFeatured": false
        },
        {
          "title": "Blockchain Insights",
          "description": "Dive into blockchain technology and its potential impact on various industries.",
          "link": "https://example.com/blockchain-insights",
          "isFeatured": true
        },
        {
          "title": "Agile Methodologies",
          "description": "Explore agile methodologies to improve project management and team collaboration effectively.",
          "link": "https://example.com/agile-methodologies",
          "isFeatured": false
        }
  ]
  

  return (
    <div className="p-12 bg-gray-900">
       <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Tech Mastery, Journey Ahead</p>
        </div>

        <div className="mt-10">
          <HoverEffect 
            items={featuredWebinars.map(webinar => (
                {
                    title: webinar.title,
                    description: webinar.description,
                    link: webinar.link
                }
            ))} 
          />
        </div>

        <div className="mt-10 text-center">
            <Link href={"/"}
             className="px-2 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            >
                View All Webinars
            </Link>
        </div>
       </div>
    </div>
  )
}

export default UpcomingWebinars
