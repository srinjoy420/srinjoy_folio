import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
    const skillSection = [
        {
            title: "Frontend",
            skills: ["HTML", "CSS", "JS", "React", "Redux", "Tailwind", "Bootstrap", "shad cn Ui"]
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
                    <div  className="text-center mb-16">
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
                                    <GraduationCap className="h-5 w-5 text-primary"/>
                                    <span>Btech computer Science enginner </span>
                                </div>
                                <div  className="flex items-center gap-3 text-muted-foreground">
                                    <Calendar className="h-5 w-5 text-primary"/>
                                    <span>2 years of professional experience</span>
                                </div>
                                <p className="text-foreground mt-6 leading-relaxed">
                                    I'm a fullstack developer with a passion for creating beautiful, functional web experiences with modern technologies and clean code.
                                </p>
                            </CardContent>
                        </CardHeader>
                    </Card>

                </div>

            </div>
        </div>
    )
}

export default About