"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const techCourseContent = [
    {
        "title": "Collaborative Document Editing",
        "description": "Learn how to collaborate on documents in real time with your team. This course covers the best tools and techniques for sharing ideas and streamlining your workflow for higher productivity."
    },
    {
        "title": "Real-Time Project Updates",
        "description": "Master real-time tracking and updates in project management. Learn how to view and manage changes instantly, keeping your team aligned and avoiding confusion around project versions."
    },
    {
        "title": "Version Control Systems",
        "description": "Gain expertise in managing project versions effectively. This course covers best practices in version control, ensuring seamless collaboration and minimizing errors in large-scale tech projects."
    },
    {
        "title": "Workflow Automation Techniques",
        "description": "Automate workflows and enhance team productivity. Learn key tools and methods to minimize manual effort, improve collaboration, and ensure seamless progress in real-time project environments, enabling a more efficient and streamlined workflow."
    }
  ]


function WhyChooseUs() {
  return (
    <div>
       <StickyScroll content={techCourseContent}/>
    </div>
  )
}

export default WhyChooseUs
