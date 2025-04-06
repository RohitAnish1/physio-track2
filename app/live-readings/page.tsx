import Link from "next/link"
import { ArrowRight, LineChart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { EMGChart } from "@/components/emg-chart"

// This would be replaced with actual Firebase integration in a real app
const fetchEMGDataFromFirebase = () => {
  // Simulating Firebase data fetch
  return Math.floor(Math.random() * 41) + 10 // Random value between 10-50
}

export default function LiveReadingsPage() {
  // In a real app, this would use Firebase data
  const currentEMG = fetchEMGDataFromFirebase()

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Live EMG Readings</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Monitor your finger muscle activity in real-time during bilateral training exercises.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <EMGChart
            title="Finger EMG Readings"
            description="Real-time muscle activity data for fingers"
            className="md:col-span-2"
          />

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Current Session</CardTitle>
              <CardDescription>Current EMG reading from Firebase</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <div className="space-y-1 text-center">
                  <p className="text-sm text-muted-foreground">Current EMG Reading</p>
                  <p className="text-5xl font-bold">{currentEMG} μV</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center gap-4">
          <Link href="/progress-tracker">
            <Button variant="outline" className="gap-2">
              <LineChart className="h-4 w-4" />
              View Progress History
            </Button>
          </Link>
          <Link href="/rehabilitation-exercises">
            <Button className="gap-2">
              Recommended Exercises
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

