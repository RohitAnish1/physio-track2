"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProgressChart } from "@/components/progress-chart"

export default function ProgressTrackerPage() {
  const [period, setPeriod] = useState<"week" | "month" | "year">("month")

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Progress Tracker</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Monitor your rehabilitation journey and see how your finger strength improves over time.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full">
            <div className="mt-6 flex justify-end">
              <Tabs value={period} onValueChange={(value: string) => setPeriod(value as "week" | "month" | "year")}>
                <TabsList>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                  <TabsTrigger value="year">Year</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="mt-6">
              <div className="grid gap-6">
                <ProgressChart
                  title="Finger Muscle Activity"
                  description="Track your finger strength improvement over time"
                  period={period}
                />

                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Progress Summary</CardTitle>
                      <CardDescription>Overview of your finger rehabilitation progress</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Starting Point</p>
                          <p className="text-2xl font-bold">21.3 μV</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Current Average</p>
                          <p className="text-2xl font-bold">42.8 μV</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Improvement</p>
                          <p className="text-2xl font-bold text-green-600">+101%</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Sessions Completed</p>
                          <p className="text-2xl font-bold">24</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full gap-2">
                        <Share2 className="h-4 w-4" />
                        Share Progress with Doctor
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Therapist Notes</CardTitle>
                      <CardDescription>Feedback from your healthcare provider</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg bg-muted p-3">
                        <p className="text-xs text-muted-foreground">April 2, 2025</p>
                        <p className="text-sm">
                          Great progress in finger mobility. Continue with the current exercise regimen but increase
                          repetitions from 10 to 15 per set.
                        </p>
                      </div>
                      <div className="rounded-lg bg-muted p-3">
                        <p className="text-xs text-muted-foreground">March 26, 2025</p>
                        <p className="text-sm">
                          Finger muscle activation patterns are improving. Focus on maintaining tension at the peak of
                          each contraction for 2-3 seconds.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Link href="/live-readings">
            <Button variant="outline">Return to Live Readings</Button>
          </Link>
          <Link href="/rehabilitation-exercises">
            <Button className="gap-2">
              View Recommended Exercises
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

