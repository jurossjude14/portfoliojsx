
import { MonitorSmartphone, Blocks } from "lucide-react"
import { Button } from "@/components/ui/button"
import Drawerinfo from "../drawerinfo"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Progress } from "@/components/ui/progress"


const Skills = () => {
    return (
        <>
            <Card x-chunk="dashboard-01-chunk-1" className="custom-intro-col-2">
                <span className="childcol first">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="content-skills-info">
                        <span className="icon-feat"><Blocks className="mr-2 h-10 w-10" /></span>
                        <span className="icon-content">
                            <div className="text-2xl font-bold heading">Web Development</div>
                            <p className="text-xs text-muted-foreground">
                                 My expertise encompasses theme development, customization, and optimization, ensuring that each website meets the unique needs of clients and delivers an exceptional user experience.
                            </p>
                        </span>
                    </CardContent>
                    <CardContent className="content-skills-info">
                        <span className="icon-feat"><MonitorSmartphone className="mr-2 h-10 w-10" /></span>
                        <span className="icon-content">
                            <div className="text-2xl font-bold heading">Responsive First</div>
                            <p className="text-xs text-muted-foreground">
                                I prioritize a "Responsive First" approach to web development. This methodology ensures that websites deliver an optimal user experience across all devices, starting with mobile and scaling up to larger screens. 
                            </p>
                            <Drawerinfo />
                        </span>
                    </CardContent>
                </span>

                <span className="childcol second">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="content-skills-bars">
                        <span className="icon-content-bar">
                            <div className="text-2xl font-bold heading">My Expertise</div>
                            <Progress value={95} className="w-[100%] h-[12px]" />
                            <p className="text-xs text-muted-foreground">
                                 Wordpress - 95%
                            </p>
                            <Progress value={80} className="w-[100%] h-[12px]" />
                            <p className="text-xs text-muted-foreground">
                                PHP - 80%
                            </p>
                            <Progress value={85} className="w-[100%] h-[12px]" />
                            <p className="text-xs text-muted-foreground">
                            Javascript - 85%
                            </p>
                            <Progress value={80} className="w-[100%] h-[12px]" />
                            <p className="text-xs text-muted-foreground">
                            Reactjs | Nextjs - 80%
                            </p>
                            <Progress value={90} className="w-[100%] h-[12px]" />
                            <p className="text-xs text-muted-foreground">
                            CSS | CSS3 - 90%
                            </p>
                            <Progress value={90} className="w-[100%] h-[12px]" />
                            <p className="text-xs text-muted-foreground">
                            HTML| HTML5 - 90%
                            </p>
                        </span>
                    </CardContent>
                </span>

            </Card>
        </>
    )
}

export default Skills
