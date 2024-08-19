'use client';

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ExternalLinkIcon } from "lucide-react"

import { ScrollArea } from "@/components/ui/scroll-area"

import QRCode from "qrcode"
import { useState } from "react"

import Image from "next/image"

const Popupdata = ({ data }) => {

  const [src, setSrc] = useState('');
  const [filename, setFilename] = useState('QR Gen Image');

  const generatecode = (genOne) => {
    const opts = {
      errorCorrectionLevel: 'H',
      type: 'image/jpeg',
      quality: 0.3,
      width: 320,
      margin: 1,
    }
    QRCode.toDataURL(genOne, opts).then(setSrc);
    setFilename(data.title);
  }


  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">More Info</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] md:max-w-[1000px] lg:max-w-[1300px] popupdata-view">

          <DialogHeader>
            <DialogTitle>
              <span className="title-box">
                {data.title} * {data.year} <a href={data.url} className="iconlink" target="_blank"><ExternalLinkIcon className="mr-2 h-5 w-5" title="Visit Website" /></a>
              </span>
              <span className="data-type">{data.work}</span>
            </DialogTitle>
            <ScrollArea className="h-[480px]">
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-2">
              <AspectRatio ratio={19 / 13} className="bg-muted-dis">
                <Image
                  src={data.imgdeviceurl}
                  alt="Portfolior"
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <div className="popcontent">

                <DialogDescription className="desc-div">
                </DialogDescription>
                <Tabs defaultValue="account" className="this-is">
                  <TabsList>
                    <TabsTrigger value="account">Details</TabsTrigger>
                    <TabsTrigger value="password" onClick={() => generatecode(data.url)}>Generate QR</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account">
                    <DialogTitle className="mt-4 mb-3 cs-heading-popup">Website Description</DialogTitle>
                    <p className="text-sm text-muted-foreground mt-2 mb-2">{data.desc}</p>
                    {data?.platform.map((item, index) => (
                      <Badge key={index} variant="outline" className="mr-1">{item.title}</Badge>
                    ))}
                    <DialogTitle className="mt-5 mb-3 cs-heading-popup">Key Tasks</DialogTitle>
                    <ul className="list-none featurelist grid gap-1 md:grid-cols-2 md:gap-1 lg:grid-cols-2">
                      {data.job?.map((item, index) => (
                        <li className="text-sm text-muted-foreground" key={index}><span>✔</span> {item.task}</li>
                      ))}
                    </ul>

                  </TabsContent>
                  <TabsContent value="password">
                    <DialogTitle className="mt-5 mb-3 cs-heading-popup">Mobile Viewing</DialogTitle>
                    <p className="text-sm text-muted-foreground mt-2 mb-2 max-w-[95%]">Open your phone's camera and scan the code. This will take you to a website that you can open in your mobile browser.</p>
                    <div className="mt-4 text-sm qr-cont">
                      {src ? (
                        <a href={src} download={filename}><img src={src} width="200px" /></a>
                      ) : (
                        <span className="placeimage">
                          <span className="placecontent">
                            QR PREVIEW HERE
                            <span className="imgicon">
                              🎲
                            </span>
                          </span>
                        </span>
                      )}

                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            </ScrollArea>
          </DialogHeader>

        </DialogContent>
      </Dialog>

    </>
  )
}

export default Popupdata
