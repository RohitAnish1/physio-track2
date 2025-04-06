"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Activity, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Instructions",
    path: "/instructions",
  },
  {
    name: "Live Readings",
    path: "/live-readings",
  },
  {
    name: "Progress Tracker",
    path: "/progress-tracker",
  },
  {
    name: "Rehabilitation Exercises",
    path: "/rehabilitation-exercises",
  },
  {
    name: "Schedule a Doctor's Call",
    path: "/schedule",
  },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="mr-2 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <div className="px-7">
              <Link href="/" className="flex items-center gap-2 font-bold" onClick={() => setOpen(false)}>
                <Activity className="h-5 w-5" />
                <span>Bilateral Training</span>
              </Link>
            </div>
            <nav className="flex flex-col gap-4 px-2 py-4">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-2 px-5 py-2 text-lg font-medium transition-colors hover:text-primary",
                    pathname === route.path ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {route.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="mr-6 flex items-center gap-2 font-bold">
          <Activity className="h-5 w-5" />
          <span>Bilateral Training</span>
        </Link>
        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <div className="flex gap-6">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === route.path ? "text-primary" : "text-muted-foreground",
                )}
              >
                {route.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">Sign Up</Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

