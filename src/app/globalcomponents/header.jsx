
import Link from "next/link"
import {
    PackagePlus,
    Menu,
    Package2,
    SquareDashedBottomCode
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"




const Header = () => {
    return (
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <div className="content-width-full">
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link
                        href="#"
                        className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <SquareDashedBottomCode className="h-7 w-7" />
                    </Link>
                    <Link
                        href="/"
                        className="text-foreground transition-colors hover:text-foreground"
                    >
                        Home
                    </Link>
                    <Link
                        href="https://juross14.github.io/myprofile/juross-resume.pdf"
                        target="_blank"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Resume
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/juross-jude-madrid/"
                        target="_blank"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Linkedin
                    </Link>
                    <Link
                        href="https://github.com/jurossjude14"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                        target="_blank"
                    >
                        Github
                    </Link>
                    <Link
                        href="/blog/"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Blog
                    </Link>
                    <Link
                        href="/contact/"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Contact
                    </Link>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="grid gap-6 text-lg font-medium">
                            <Link
                                href="/"
                                className="flex items-center gap-2 text-lg font-semibold"
                            >
                                <SquareDashedBottomCode className="h-7 w-7" />
                            </Link>
                            <Link href="/" className="hover:text-foreground">
                                Home
                            </Link>
                            <Link
                                href="https://juross14.github.io/myprofile/juross-resume.pdf"
                                target="_blank"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                My Resume
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/juross-jude-madrid/"
                                className="text-muted-foreground hover:text-foreground"
                                target="_blank"
                            >
                                Linkedin
                            </Link>
                            <Link
                                href="https://github.com/jurossjude14"
                                target="_blank"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Github
                            </Link>
                            <Link
                                href="https://nxtshowapp.vercel.app/"
                                target="_blank"
                                className="text-muted-foreground transition-colors hover:text-foreground"
                            >
                                MiniApp
                            </Link>
                            <Link
                                href="/contact/"
                                className="text-muted-foreground transition-colors hover:text-foreground"
                            >
                                Contact
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <div className="ml-auto flex-1 sm:flex-initial">
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <PackagePlus className="h-5 w-5" />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Add Portfolio</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}

export default Header
