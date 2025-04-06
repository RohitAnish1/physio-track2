"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { CalendarIcon, Check, Clock } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

export default function SchedulePage() {
  const [date, setDate] = useState<Date>()
  const [timeSlot, setTimeSlot] = useState<string>()
  const [doctor, setDoctor] = useState<string>()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (date && timeSlot && doctor) {
      setSubmitted(true)
    }
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Schedule a Doctor's Call</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Book a virtual consultation with a healthcare professional to discuss your rehabilitation progress.
          </p>
        </div>

        {submitted ? (
          <Card className="border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                  <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Appointment Confirmed</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Your appointment has been scheduled successfully.</p>
              <div className="rounded-lg bg-background p-4">
                <div className="grid gap-2">
                  <div className="grid grid-cols-2">
                    <p className="text-sm font-medium text-muted-foreground">Date:</p>
                    <p className="text-sm">{date ? format(date, "PPP") : ""}</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p className="text-sm font-medium text-muted-foreground">Time:</p>
                    <p className="text-sm">{timeSlot}</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p className="text-sm font-medium text-muted-foreground">Doctor:</p>
                    <p className="text-sm">{doctor}</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                You will receive a confirmation email with details on how to join the video call.
              </p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => setSubmitted(false)} variant="outline" className="w-full">
                Schedule Another Appointment
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Book Your Appointment</CardTitle>
              <CardDescription>Select your preferred date, time, and doctor for the consultation.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="date"
                        variant="outline"
                        className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Select a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) =>
                          date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 2))
                        }
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time">Time Slot</Label>
                  <RadioGroup defaultValue={timeSlot} onValueChange={setTimeSlot} className="grid grid-cols-2 gap-2">
                    <Label
                      htmlFor="morning"
                      className="flex cursor-pointer items-center justify-between rounded-md border p-3 [&:has(:checked)]:bg-primary/10"
                    >
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>9:00 AM</span>
                      </div>
                      <RadioGroupItem value="9:00 AM" id="morning" />
                    </Label>
                    <Label
                      htmlFor="midday"
                      className="flex cursor-pointer items-center justify-between rounded-md border p-3 [&:has(:checked)]:bg-primary/10"
                    >
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>11:00 AM</span>
                      </div>
                      <RadioGroupItem value="11:00 AM" id="midday" />
                    </Label>
                    <Label
                      htmlFor="afternoon"
                      className="flex cursor-pointer items-center justify-between rounded-md border p-3 [&:has(:checked)]:bg-primary/10"
                    >
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>2:00 PM</span>
                      </div>
                      <RadioGroupItem value="2:00 PM" id="afternoon" />
                    </Label>
                    <Label
                      htmlFor="evening"
                      className="flex cursor-pointer items-center justify-between rounded-md border p-3 [&:has(:checked)]:bg-primary/10"
                    >
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>4:00 PM</span>
                      </div>
                      <RadioGroupItem value="4:00 PM" id="evening" />
                    </Label>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="doctor">Select Doctor</Label>
                  <Select onValueChange={setDoctor}>
                    <SelectTrigger id="doctor">
                      <SelectValue placeholder="Select a doctor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Dr. Sarah Johnson">Dr. Sarah Johnson - Physiotherapist</SelectItem>
                      <SelectItem value="Dr. Michael Chen">Dr. Michael Chen - Rehabilitation Specialist</SelectItem>
                      <SelectItem value="Dr. Emily Rodriguez">Dr. Emily Rodriguez - Neurologist</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes (Optional)</Label>
                  <Input id="notes" placeholder="Any specific concerns or questions for the doctor?" />
                </div>

                <Button type="submit" className="w-full" disabled={!date || !timeSlot || !doctor}>
                  Confirm Booking
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        <div className="flex justify-center">
          <Link href="/rehabilitation-exercises">
            <Button variant="outline">Return to Rehabilitation Exercises</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

