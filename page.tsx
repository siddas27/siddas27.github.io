import Image from 'next/image'
import { Github, Linkedin, FileText, Play, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1e1e1e]">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-[#007acc]/20">
            <Image
              src="https://sjc.microlink.io/fKSbXw3W-KJxX35hGWunSUIQ1KbwDwPL5smKCiGSHWMv466C8nJS8pBR8PReg0ljVU6HvLhVFRdyspaCETbzdQ.jpeg"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Siddharth Das
            </h1>
            <p className="text-xl text-[#d4d4d4] mb-6">
              Computer Vision & Perception Engineer
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Button asChild variant="outline" className="bg-[#3e3e42] text-white hover:bg-[#007acc] hover:text-white">
                <a href="https://github.com/siddas27" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline" className="bg-[#3e3e42] text-white hover:bg-[#007acc] hover:text-white">
                <a href="https://www.linkedin.com/in/siddharthdas8/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" className="bg-[#3e3e42] text-white hover:bg-[#007acc] hover:text-white">
                <a href="https://medium.com/@sidereal" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  Blog
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
        <div className="bg-[#2d2d30] rounded-lg p-6 text-[#d4d4d4]">
          <p className="mb-4">
            I'm a Computer Vision and Perception Engineer with a Master's degree in Robotics and AI. 
            My work focuses on developing cutting-edge solutions in computer vision, machine learning, 
            and robotic perception systems.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Computer Vision', 'Machine Learning', 'Robotics', 'AI', 'Python', 'C++', 'Deep Learning'].map((skill) => (
              <Badge key={skill} variant="secondary" className="bg-[#3e3e42] text-[#d4d4d4] hover:bg-[#007acc]">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-[#252526] border-[#3e3e42]">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Preprocessor</h3>
              <p className="text-[#d4d4d4] mb-4">
                Elegant and Easy Tweet Preprocessing in Python. A comprehensive toolkit for 
                processing and analyzing social media data.
              </p>
              <Badge className="bg-[#3e3e42] text-[#d4d4d4] hover:bg-[#007acc]">Python</Badge>
            </CardContent>
          </Card>
          <Card className="bg-[#252526] border-[#3e3e42]">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">CoreMLDemo</h3>
              <p className="text-[#d4d4d4] mb-4">
                CoreML Framework Demo App showcasing implementation of machine learning 
                models on iOS devices.
              </p>
              <Badge className="bg-[#3e3e42] text-[#d4d4d4] hover:bg-[#007acc]">Swift</Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Project Demo Videos */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Project Demos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((index) => (
            <div key={index} className="relative group">
              <Image
                src={`/placeholder.svg?height=200&width=300`}
                alt={`Project Demo ${index}`}
                width={300}
                height={200}
                className="rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                <Play className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mt-2">Project Demo {index}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Publications</h2>
        <div className="space-y-6">
          {[
            {
              title: "Advanced Computer Vision Techniques for Autonomous Vehicles",
              journal: "Journal of Robotics and Automation",
              year: 2023,
              link: "#"
            },
            {
              title: "Deep Learning Approaches in Medical Image Analysis",
              journal: "IEEE Transactions on Medical Imaging",
              year: 2022,
              link: "#"
            },
            {
              title: "Real-time Object Detection and Tracking for Industrial Applications",
              journal: "International Conference on Computer Vision and Pattern Recognition",
              year: 2021,
              link: "#"
            }
          ].map((pub, index) => (
            <Card key={index} className="bg-[#252526] border-[#3e3e42]">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  <a href={pub.link} className="hover:text-[#007acc]">{pub.title}</a>
                </h3>
                <p className="text-[#d4d4d4]">{pub.journal}, {pub.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Career Timeline */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Career Timeline</h2>
        <div className="relative border-l-2 border-[#3e3e42] pl-8 ml-4">
          {[
            {
              year: "2023 - Present",
              title: "Senior Computer Vision Engineer",
              company: "AI Innovations Inc."
            },
            {
              year: "2020 - 2023",
              title: "Computer Vision Researcher",
              company: "Tech University"
            },
            {
              year: "2018 - 2020",
              title: "Machine Learning Engineer",
              company: "StartUp Vision"
            }
          ].map((job, index) => (
            <div key={index} className="mb-8 relative">
              <div className="absolute -left-14 mt-1.5 w-6 h-6 bg-[#007acc] rounded-full border-4 border-[#1e1e1e]" />
              <Card className="bg-[#252526] border-[#3e3e42]">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{job.title}</h3>
                  <p className="text-[#d4d4d4] mb-1">{job.company}</p>
                  <p className="text-[#007acc] flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {job.year}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Publications & Blog Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-[#252526] border-[#3e3e42]">
            <CardContent className="p-6">
              <a href="https://medium.com/@sidereal" className="block hover:opacity-80 transition-opacity">
                <h3 className="text-xl font-bold text-white mb-2">Medium Blog</h3>
                <p className="text-[#d4d4d4]">
                  Check out my latest articles and insights on computer vision, 
                  robotics, and artificial intelligence.
                </p>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-[#d4d4d4] border-t border-[#3e3e42]">
        <p>© {new Date().getFullYear()} Siddharth Das. All rights reserved.</p>
      </footer>
    </div>
  )
}

