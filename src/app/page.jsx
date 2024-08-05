import About from "./components/standalone/about";
import Skills from "./components/standalone/skills";
import { Boxes} from "lucide-react"
import Portfolio from "./components/portfolio";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-2">
        <About />
        <Skills />
      </div>
      <div className="grid gap-4 md:grid-cols-1 md:gap-8 lg:grid-cols-1">
        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-2xl font-bold heading block-set">
                <Boxes className="mr-2 h-10 w-10" /> Recent Portfolio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              Passionate about building custom web solutions tailored to your needs.
            </p>
          </CardContent>
          <CardContent>
              <Portfolio />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
