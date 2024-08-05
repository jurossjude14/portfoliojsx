
import { Linkedin, Github, Mail } from "lucide-react"
import Link from "next/link"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"

import { Separator } from "@/components/ui/separator"


const About = () => {
    return (
        <>
            <Card x-chunk="dashboard-01-chunk-0">
                <span className="custom-img-container">
                    <span className="image-prof"><img src="/profpic.jpg" alt="image-profile" width="100%" height="auto" /></span>
                    <span className="prof-content">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium custom-display-full">
                                <div className="text-2xl font-bold ">Juross Madrid</div>
                                Web & Wordpress Developer
                                <span className="sociallink">
                                    <div><Linkedin className="h-4 w-4" /> juross-jude-madrid</div>
                                    <div><Github className="h-4 w-4" /> jurossjude14</div>
                                </span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-xs text-muted-foreground">
                                I'm a web skilled developer with expertise in both front-end development and WordPress. I can bring your website vision to life by creating a user-friendly interface with HTML, CSS, and JavaScript, while leveraging the power of WordPress for content management and functionality.
                            </p>
                        </CardContent>
                    </span>
                </span>
                <CardFooter className="flex flex-row border-t p-4">
                    <div className="flex w-full items-center gap-2">
                        <div className="grid flex-1 auto-rows-min gap-0.5">
                            <div className="text-xs text-muted-foreground">Web Experience</div>
                            <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                                10+
                                <span className="text-sm font-normal text-muted-foreground">
                                    years
                                </span>
                            </div>
                        </div>
                        <Separator orientation="vertical" className="mx-2 h-10 w-px hide-mobile" />
                        <div className="grid flex-1 auto-rows-min gap-0.5 hide-mobile">
                            <div className="text-xs text-muted-foreground">Completed</div>
                            <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none ">
                                100 +
                                <span className="text-sm font-normal text-muted-foreground">
                                    sites
                                </span>
                            </div>
                        </div>
                        <Separator orientation="vertical" className="mx-2 h-10 w-px" />
                        <div className="grid flex-1 auto-rows-min gap-0.5">
                            <div className="text-xs text-muted-foreground">Contact</div>
                            <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                                <Button asChild className="sendme"> 
                                    <Link href="mailto:jurosswebtwopointzero@gmail.com">
                                        <Mail className="mr-2 h-4 w-4" /> Send Mail
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}

export default About
