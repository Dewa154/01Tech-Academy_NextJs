"use client"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

const courseTestimonials = [
    {
        "title": "Basic Programming",
        "quote": "This course gave me a solid foundation in programming. The concepts were easy to follow, and I now feel confident to build simple applications.",
        "name": "John Carter"
    },
    {
        "title": "Web Development",
        "quote": "I learned to build dynamic websites from scratch. The hands-on projects were invaluable in helping me apply the knowledge right away. Highly recommended!",
        "name": "Sarah Lee"
    },
    {
        "title": "Data Science",
        "quote": "A comprehensive course that explained data science in a practical way. The real-world examples helped me understand how to analyze data effectively.",
        "name": "Mike Anderson"
    },
    {
        "title": "Digital Marketing",
        "quote": "This course taught me how to craft effective digital marketing campaigns. I’m already applying the techniques to grow my business online.",
        "name": "Emily Davis"
    },
    {
        "title": "Graphics Design",
        "quote": "I loved the creative freedom this course gave me. The design principles and software tutorials were easy to follow and helped me improve my skills quickly.",
        "name": "Jessica White"
    },
    {
        "title": "Cloud Computing",
        "quote": "Cloud computing was a mystery until I took this course. Now I understand how to leverage cloud services to optimize IT operations in my company.",
        "name": "Mark Taylor"
    },
    {
        "title": "Cybersecurity Essentials",
        "quote": "This course opened my eyes to the importance of cybersecurity. It provided practical tips on safeguarding digital assets and staying ahead of potential threats.",
        "name": "David Wilson"
    },
    {
        "title": "Machine Learning",
        "quote": "A fantastic introduction to machine learning! The course made complex topics understandable, and I feel ready to start experimenting with machine learning models.",
        "name": "Anna Green"
    }
]

function CourseTestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">Voices of Victory: Testimonials That Inspire</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-0">
        <div className="w-full max-w-7xl">
            <InfiniteMovingCards
            items={courseTestimonials}
            direction="right"
            speed="slow"
        />
        </div>
      </div>
    </div>
  )
}

export default CourseTestimonialCards
