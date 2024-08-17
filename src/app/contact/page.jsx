import React from 'react'
import { Mail } from "lucide-react"
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import dynamic from 'next/dynamic';
import { AspectRatio } from "@/components/ui/aspect-ratio"
const Portform = dynamic(() => import('../components/portform'), {
    ssr: false,
});

const Contact = () => {
    return (
        <div className="grid gap-4 md:grid-cols-1 md:gap-8 lg:grid-cols-1">
            <Card x-chunk="dashboard-01-chunk-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-2xl font-bold heading block-set">
                        <Mail className="mr-2 h-10 w-10" /> Contact Us
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-xs text-muted-foreground">
                        Passionate about building custom web solutions tailored to your needs.
                    </p>
                </CardContent>
                <CardContent>
                    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-2">
                        <Portform />
                        <AspectRatio ratio={16 / 12} className="bg-muted">
                            <Image
                                src="/webdevimg.jpg"
                                alt="webdev"
                                priority={false}
                                fill
                                className="object-cover custom-filter-img contact"
                            />
                        </AspectRatio>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Contact
