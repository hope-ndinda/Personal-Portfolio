"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";

// Project data
const projects = [
  {
    id: 1,
    title: "Cars finder backend",
    description: "A scalable backend for a car-finder app, providing fast search, robust CRUD for listings, user authentication, and secure APIs.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1583&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Java", "Postgres", "Postman","render","Docker"],
    liveUrl: "https://carsbackend-buik.onrender.com/swagger-ui/index.html",
    githubUrl: "https://github.com/hope-ndinda/cars-backend",
    featured: true,
  },
  {
    id: 2,
    title: "Library Management System App",
    description: "A full-stack Library Management System that supports cataloging, borrowing, and returning books, plus user management and overdue notifications. Built with a scalable backend, responsive UI, and secure data access.",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React", "JavaScript", "CSS", "Local Storage","Java","postman","postgre"],
    liveUrl: "https://vercel.app/",
    githubUrl: "https://github.com/hope-ndinda/library-management",
    featured: true,
  },
  {
    id: 3,
    title: "Water monitoring App",
    description: "An e-commerce product list app with cart functionality. Features a product grid, cart management, and responsive design using React and Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1441829266145-6d4bfbd38eb4?q=80&w=883&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React", "TypeScript", "Tailwind CSS","Node JS","express","Mongodb"],
    liveUrl: "https://vercel.app/",
    githubUrl: "https://github.com/hope-ndinda/water_monitor",
    featured: true,
  },
   {
  id: 4,
  title: "Weather Monitoring App",
  description: "A simple web application that receives temperature and humidity data via MQTT, stores it in SQLite, and visualizes real-time graphs.",
  image: "https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?auto=compress&cs=tinysrgb&w=800",
  tags: ["HTML", "Javascript", "Tailwind CSS"],
  liveUrl: "https://vercel.app/",
  githubUrl: "https://github.com/hope-ndinda/mqtt_weather_monitoring",
  featured: true,
},
  {
    id: 5,
    title: "Portifolio",
    description: "Personal portfolio website , showcasing skills, projects, and professional experience.",
    image: "https://plus.unsplash.com/premium_photo-1661670152522-8db946b83f81?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["NextJS", "TypeScript"],
    liveUrl: "https://vercel.app/",
    githubUrl: "https://github.com/hope-ndinda",
    featured: true,
  },
  {
    id: 6,
    title: "GitHub User Search App",
    description: "A search app to look up GitHub profiles by username. Shows user info, public repos, followers, and more with a dark/light theme toggle. Built with React and Tailwind CSS.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "Tailwind CSS", "GitHub API"],
    liveUrl: "https://vercel.app/",
    githubUrl: "https://github.com/",
    featured: true,
  },
];


export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4 mx-auto" ref={ref}>
        <SectionHeading
          title="My Projects"
          subtitle="Recent work I've done"
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="h-full"
            >
              <Card className="overflow-hidden h-full border-border/40 hover:border-border/80 transition-all duration-300 bg-card/60 backdrop-blur-sm hover:shadow-lg group">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>
                </CardContent>
                
                <CardFooter className="px-6 pb-6 pt-0 flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Github className="mr-2 h-4 w-4" /> 
                      Code
                    </a>
                  </Button>
                  
                  <Button size="sm" className="flex-1" asChild>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> 
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="group" asChild>
            <a href="https://github.com/hope-ndinda" target="_blank" rel="noopener noreferrer">
              View More Projects 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}