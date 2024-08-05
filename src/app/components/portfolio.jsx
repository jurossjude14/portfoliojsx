import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import Popupdata from "./popupdata"
import { dummydata } from "../data/db"
import { ExternalLinkIcon } from "lucide-react"


const Portfolio = () => {

    return (
        <>
            <ScrollArea className="h-[auto] w-[100%]">
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 parent-port">
                    {dummydata?.map((data, index) => (
                        <span className="port-child" key={index}>
                            <a href={data.url} className="iconlink" target="_blank">
                            <AspectRatio ratio={16 / 9} className="bg-muted">
                                <Image
                                    src={data.imgurl}
                                    alt="Portfolior"
                                    fill
                                    className="rounded-md object-cover custom-filter-img"
                                />
                            </AspectRatio>
                            </a>
                            <span className="title-flex">
                                <span className="title-child">
                                    <h4 className="title-port">{data.title}</h4>
                                    <a href={data.url} className="iconlink" target="_blank"><ExternalLinkIcon className="mr-2 h-5 w-5" title="Visit Website"/></a>
                                </span>
                                <span className="work-child">
                                    <span className="work-type">{data.work} | {data.year}</span>
                                </span>
                            </span>
                            <span className="builtby">
                                {data?.platform.map((item, index) => (
                                    <Badge key={index} variant="secondary">{item.title}</Badge>
                                ))}
                            </span>
                            <span className="port-desc">
                                <p className="text-xs text-muted-foreground">
                                    {data.desc}
                                </p>
                            </span>
                            <span className="btn-div">
                                <Popupdata data={data} />
                            </span>
                        </span>
                    ))}
                </div>
            </ScrollArea>
        </>
    )
}

export default Portfolio
