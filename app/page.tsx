import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Bilateral Training for Monoplegic Patients
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Track your arm rehabilitation progress with our innovative soft robotic glove.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/instructions">
                    <Button className="w-full min-[400px]:w-auto">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/live-readings">
                    <Button variant="outline" className="w-full min-[400px]:w-auto">
                      View Live Readings
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="/hand.jpeg"
                width={900}
                height={900}
                alt="Robotic Glove Device"
                className="mx-auto overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why Track Muscle Activity</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tracking muscle activity through EMG sensors provides real-time feedback on your rehabilitation
                  progress. This data helps identify patterns of improvement, guides exercise adjustments, and motivates
                  continued effort by visualizing your recovery journey.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/instructions">
                <Button size="lg" className="w-full sm:w-auto">
                  Learn How to Use the Device
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

