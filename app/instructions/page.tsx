import Link from "next/link"
import { ArrowRight, Hand, HandMetal, Activity } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function InstructionsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How to Use the Device</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Follow these simple steps to properly use the robotic glove for bilateral training.
          </p>
        </div>

        <div className="aspect-video overflow-hidden rounded-xl border bg-muted">
          <div className="flex h-full items-center justify-center">
            <div className="flex flex-col items-center gap-2 p-4 text-center">
              <Image
                             src="/hand-1.jpeg"
                             width={900}
                             height={900}
                             alt="Robotic Glove Device"
                             className="mx-auto overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                             style={{ width: '100%', height: 'auto' }}
                           />
              <p className="text-sm text-muted-foreground">Demonstration Video</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Hand className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <CardTitle>Step 1</CardTitle>
                <CardDescription>Hold your hand steady</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Place your arm on a flat, stable surface. Keep your hand relaxed but steady to ensure accurate readings
                during calibration.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <HandMetal className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <CardTitle>Step 2</CardTitle>
                <CardDescription>Do not move your hands too much</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Excessive movement can interfere with the sensor readings. Try to minimize unnecessary movements during
                the measurement process.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <CardTitle>Step 3</CardTitle>
                <CardDescription>Slowly fold your unaffected hand</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                During the exercise, slowly fold your unaffected hand to allow the robotic glove to replicate the
                movement on your affected hand.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4 rounded-xl border p-6">
          <h2 className="text-2xl font-bold">Detailed Instructions</h2>
          <ol className="ml-6 list-decimal space-y-4">
            <li className="text-base">
              <span className="font-medium">Put on the glove:</span> Place the robotic glove on your affected hand,
              ensuring it fits comfortably.
            </li>
            <li className="text-base">
              <span className="font-medium">Calibration:</span> Keep both hands steady during the initial calibration
              process.
            </li>
            <li className="text-base">
              <span className="font-medium">Begin training:</span> Once calibrated, slowly move your unaffected hand and
              observe the mirrored movement in the glove.
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

