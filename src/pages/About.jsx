import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
    const skillSection = [
        {
            title: "Frontend",
            skills: ["HTML", "CSS", "JS", "React", "Redux", "Tailwind", "Bootstrap", "shad cn Ui", "zoostand"]
        },
        {
            title: "backend",
            skills: ["Node", "Express", "websockets", "docker"]
        },
        {
            title: "Database",
            skills: ["mongodb", "mysql", "redis", "postgresql"]
        },
        {
            title: "Version Control",
            skills: ["git", "github", "gitlab"]
        }
    ]
    const Experience = [
        {
            title: "MERN stack intern",
            company: "Topstack",
            period: "2022-2023",
            description: "Working on a MERN stack project with a team of 4 handel database and write REST apis",
        }

    ]
    return (
        <div>
            <div className="min-h-screen bg-background py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* the header section */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                            About me
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            I'm a fullstack developer with a passion for creating beautiful, functional web experiences with modern technologies and clean code.
                        </p>
                    </div>
                    {/* personal info */}
                    <Card className="mb-12 bg-background border-border">
                        <CardHeader className="text-2xl text-foreground">
                            <CardTitle className="text-2xl text-foreground">My Journey</CardTitle>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <MapPin className="h-5 w-5 text-primary" />
                                    <span>Based in Hooghly, West Bengal</span>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <GraduationCap className="h-5 w-5 text-primary" />
                                    <span>Btech computer Science enginner </span>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <Calendar className="h-5 w-5 text-primary" />
                                    <span>2 years of professional experience</span>
                                </div>
                                <p className="text-foreground mt-6 leading-relaxed">
                                    I'm a fullstack developer with a passion for creating beautiful, functional web experiences with modern technologies and clean code.
                                </p>
                            </CardContent>
                        </CardHeader>
                    </Card>
                    {/* skill section */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                            Technical skills
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {skillSection.map((catagoty, index) => (
                                <Card key={index} className="bg-background border-border">
                                    <CardHeader className="text-xl text-foreground">
                                        <CardTitle className="text-xl text-foreground">{catagoty.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {catagoty.skills.map((skill, skillIndex) => (

                                                <Badge key={skillIndex}
                                                    variant="secondary"
                                                    className="bg-primary/10 text-primary hover:bg-primary/20">
                                                    {skill}

                                                </Badge>))}
                                        </div>
                                    </CardContent>

                                </Card>
                            ))}
                        </div>
                    </div>
                    {/* the experience */}
                    <div >
                        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                            experience
                        </h2>
                        <div lassName="space-y-6">
                            {Experience.map((exp, index) => (
                                <Card key={index}  className="bg-background border-border">
                                    <CardContent className="p-6">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                            <div>
                                                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                                                    <Briefcase  className="h-5 w-5 text-primary">{exp.title}</Briefcase>
                                                </h3>
                                                <p className="text-primary font-medium">{exp.company}</p>
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground mt-2 sm:mt-0">
                                                <Calendar />
                                                <span ame="text-sm">{exp.period}</span>
                                            </div>

                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default About