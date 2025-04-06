import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play, Clock, Dumbbell } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function RehabilitationExercisesPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Rehabilitation Exercises</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Follow these guided exercises to improve your finger strength and mobility during recovery.
          </p>
        </div>

        <Tabs defaultValue="beginner" className="w-full">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="beginner">Beginner</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="beginner" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src="/placeholder.svg?height=200&width=350"
                    alt="Finger Spread Exercise"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <Button size="icon" variant="secondary" className="h-12 w-12 rounded-full">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Finger Spread</CardTitle>
                    <Badge>Beginner</Badge>
                  </div>
                  <CardDescription>Strengthen finger extensors and improve dexterity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>5 mins</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Dumbbell className="h-4 w-4" />
                      <span>Resistance band</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Exercise
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src="/placeholder.svg?height=200&width=350"
                    alt="Finger Pinch Exercise"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <Button size="icon" variant="secondary" className="h-12 w-12 rounded-full">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Finger Pinch</CardTitle>
                    <Badge>Beginner</Badge>
                  </div>
                  <CardDescription>Improve finger strength and precision</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>3 mins</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Dumbbell className="h-4 w-4" />
                      <span>Therapy putty</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Exercise
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src="/placeholder.svg?height=200&width=350"
                    alt="Finger Tapping Exercise"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <Button size="icon" variant="secondary" className="h-12 w-12 rounded-full">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Finger Tapping</CardTitle>
                    <Badge>Beginner</Badge>
                  </div>
                  <CardDescription>Improve finger coordination and speed</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>4 mins</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Dumbbell className="h-4 w-4" />
                      <span>No equipment</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Exercise
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="intermediate" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src="/placeholder.svg?height=200&width=350"
                    alt="Finger Web Expansion Exercise"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <Button size="icon" variant="secondary" className="h-12 w-12 rounded-full">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Finger Web Expansion</CardTitle>
                    <Badge>Intermediate</Badge>
                  </div>
                  <CardDescription>Strengthen the muscles between fingers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>6 mins</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Dumbbell className="h-4 w-4" />
                      <span>Resistance band</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Exercise
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src="/placeholder.svg?height=200&width=350"
                    alt="Finger Isolation Exercise"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <Button size="icon" variant="secondary" className="h-12 w-12 rounded-full">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Finger Isolation</CardTitle>
                    <Badge>Advanced</Badge>
                  </div>
                  <CardDescription>Improve individual finger control and strength</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>8 mins</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Dumbbell className="h-4 w-4" />
                      <span>Finger weights</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Exercise
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center gap-4">
          <Link href="/progress-tracker">
            <Button variant="outline">Return to Progress Tracker</Button>
          </Link>
          <Link href="/schedule">
            <Button className="gap-2">
              Schedule a Doctor's Call
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

