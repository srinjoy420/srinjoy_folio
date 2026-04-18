
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Eye } from 'lucide-react';
import { GitBranch as Github } from 'lucide-react'

const Projects = () => {
    const navigate = useNavigate();
    const [seletedFilter, setSelectedFilter] = useState("All");
    const projects = [
        {
            id: 1,
            title: "Bookstore",
            description: "A book store Web aplication",
            image: "/project1.png",
            technology: ["React", "Tailwind", "Node", "Express", "MongoDB"],
            catagory: "Fullstack",
            githubURl: "https://github.com/srinjoy420/bookbackend"
        },
        {
            id: 2,
            title: "Leet Lab",
            description: "A leet code practice Web aplication",
            image: "/project1.png",
            technology: ["React", "Tailwind", "Node", "Express", "postgress", "prisma", "judge0"],
            catagory: "Fullstack",
            githubURl: "https://github.com/srinjoy420/leetlab"
        }, {
            id: 3,
            title: "Vo clone",
            description: "V0 clone Web aplication",
            image: "/project1.png",
            technology: ["node", "expresss", "betterauth", "Typescript", "drizzel"],
            catagory: "backend",
            githubURl: "https://github.com/srinjoy420/v0_clone"
        }
    ]
    const catagories = ["All", "Fullstack", "Backend", "Frontend"]
    const filteredProjects = seletedFilter === "All" ? projects : projects.filter(project => project.catagory === seletedFilter)
    //  function to handel details project
    const handelViewProject = (projectId) => {
        navigate(`/project/${projectId}`)
    }
    return (
        <div className="min-h-screen bg-background py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">My Projects</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Here are some of the projects i have worked on</p>
                </div>
            </div>
            {/* filter buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {catagories.map((catagory) => (
                    <Button key={catagory} onClick={() => setSelectedFilter(catagory)} variant={seletedFilter === catagory ? "default" : "outline"}
                        className={seletedFilter === catagory ? "bg-primary text-primary-foreground" : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"}
                    >
                        {catagory}
                    </Button>
                ))}
            </div>
            {/* projett grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                    <Card
                        key={project.id}
                        className="bg-background border-border hover:shadow-lg transition-all duration-300 group"
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Button variant="secondary" onClick={() => handelViewProject(project.id)} className="bg-white/90 text-black hover:bg-white">
                                    <Eye className="h-4 w-4 mr-2" />
                                    view Details
                                </Button>
                            </div>

                        </div>
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                                    {project.title}
                                </CardTitle>
                                <Badge className="text-xl text-foreground group-hover:text-primary transition-colors" variant="secondary">
                                    {project.catagory}
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                            {/* project technologies */}
                            <div className="flex flex-wrap gap-2">
                                {project.technology.map((tech, index) => (
                                    <Badge key={index} className="text-xs border-primary/20 text-primary/80" variant="outline">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                            {/* github buttons */}
                            <div className="flex gap-3 pt-4">
                                <Button onClick={() => window.open(project.githubURl, "_blank")}
                                    variant="outline"
                                    size="sm"
                                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                                    code
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* no project */}
            {filteredProjects.length===0 && (
                <div className="text-center mt-12">
                    <p className="text-2xl text-muted-foreground">No projects found</p>
                </div>
            )} 
        </div>
    )



};

export default Projects;