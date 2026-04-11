import React, { useEffect } from 'react'
import { Home, ArrowLeft } from 'lucide-react'
import { useNavigate, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card ,CardContent} from "@/components/ui/card"

const NotFound = () => {
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        console.log("404 use must lokking for diffrent path we dont have this one", location.pathname);


    }, [location.pathname])
    const goBack = () => {
        navigate(-1)
    }
    const goHome = () => {
        navigate("/")
    }
    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="max-w-md mx-auto text-center px-4">
                {/* 404 error display */}
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-primary/20 mb-4">404</h1>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-muted-foreground text-lg mb-2">
                        Oops! The page you're looking for doesn't exist.
                    </p>
                    <p className="text-muted-foreground text-sm">
                        The page at <code className="bg-muted px-2 py-1 rounded text-primary">{location.pathname}</code> could not be found.
                    </p>

                </div>
                {/* hel;pful buttons */}
                <div>
                    <Button onClick={goBack} className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    variant="outline"

                    >
                        <ArrowLeft  className="h-4 w-4 mr-2"/>
                        Go Back
                    </Button>
                    <Button onClick={goHome}
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                        <Home className="h-4 w-4 mr-2" />
                        Go Home
                    </Button>
                </div>
                {/* helpful links */}
                <div className="mt-12 pt-8 border-t border-border">
                    <p className="text-muted-foreground text-sm mb-4">
                        You might looking for
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button onClick={()=>navigate("/")}>Home</Button>
                        <Button onClick={()=>navigate("/about")} >About</Button>
                        <Button onClick={()=>navigate("/projects")}>Projects</Button>
                        <Button onClick={()=>navigate("/contact")}>Contact</Button>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default NotFound