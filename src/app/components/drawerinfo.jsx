'use client';

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { ScrollArea } from "@/components/ui/scroll-area"

import { Mail, Send, Globe, LaptopMinimal, DatabaseZap } from "lucide-react"
import Link from "next/link"

const Drawerinfo = () => {
    return (
        <>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" className="viewmore-btn">View More</Button>
                </SheetTrigger>
                <SheetContent className="sheet-width">
                    <SheetHeader className="sheet-top-title">
                        <SheetTitle>My Services for You</SheetTitle>
                        <SheetDescription>
                            Crafting custom web solutions tailored to your needs.
                        </SheetDescription>
                    </SheetHeader>

                    <ScrollArea className="h-[470px]">
                    <SheetHeader className="sheet-service-content">
                        <SheetTitle> <LaptopMinimal className="mr-2 h-5 w-5" /> As Web/WP Developer</SheetTitle>
                        <SheetDescription>
                            <span className="task-list">
                                <span>Customizing existing Premium themes or building a well known page builder such as divi, elementor, wpbakery and more.</span>
                                <span>Optimizing website performance and user experience.</span>
                                <span>Creating custom WordPress themes to meet client and requirements.</span>
                                <span>Transforming a web design(PSD,Figma or Invision) into a functional WordPress website</span>
                                <span>Implementing security measures to protect websites from vulnerabilities.</span>
                                <span>Integrating external APIs to enhance website functionality.</span>
                                <span>Troubleshooting website issues and providing technical support</span>
                            </span>
                        </SheetDescription>
                    </SheetHeader>

                    <SheetHeader className="sheet-service-content">
                        <SheetTitle><DatabaseZap className="mr-2 h-5 w-5" />As Web Administrator</SheetTitle>
                        <SheetDescription>
                            <span className="task-list">
                                <span>Checking website uptime, performance, and security.</span>
                                <span>Creating and maintaining regular website backups.</span>
                                <span>Implementing and maintaining website security measures like SSL and DNS Proxy (cloudflare).</span>
                                <span>Configure DNS records (A, CNAME, MX, NS, etc.)</span>
                                <span>Manage domain name registration and configuration through providers like DreamIT, Namecheap, VentraIP, and others.</span>
                                <span>Manage cPanel and WHM hosting services offered by DreamIT, Namecheap, VentraIP, and others.</span>
                            </span>
                        </SheetDescription>
                    </SheetHeader>
                    </ScrollArea>

                    <div className="footer-btn">
                        <Button asChild className="sendme-ds" variant="secondary">
                            <Link href="mailto:jurosswebtwopointzero@gmail.com">
                                <Send className="mr-2 h-4 w-4" /> Send Mail
                            </Link>
                        </Button>
                        <Button asChild className="sendme-ds" variant="outline">
                            <Link href="/contact/">
                                <Mail className="mr-2 h-4 w-4" /> Contact
                            </Link>
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}

export default Drawerinfo
