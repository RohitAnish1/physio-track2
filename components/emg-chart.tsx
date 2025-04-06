"use client"

import { useEffect, useState } from "react"
import { Activity } from "lucide-react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data generator for EMG readings - in a real app, this would be replaced with Firebase data
const generateMockData = (length: number, min: number, max: number) => {
  return Array.from({ length }, (_, i) => ({
    time: i,
    value: Math.floor(Math.random() * (max - min + 1)) + min,
  }))
}

// This would be replaced with actual Firebase integration in a real app
const fetchEMGDataFromFirebase = () => {
  // Simulating Firebase data fetch
  return generateMockData(1, 10, 50)[0].value
}

interface EMGChartProps {
  title?: string
  description?: string
  className?: string
}

export function EMGChart({
  title = "Finger EMG Readings",
  description = "Real-time muscle activity data",
  className,
}: EMGChartProps) {
  const [data, setData] = useState(generateMockData(20, 10, 50))
  const [improvement, setImprovement] = useState<"improved" | "same" | "initial">("initial")
  const [previousAvg, setPreviousAvg] = useState(0)
  const [currentEMG, setCurrentEMG] = useState(0)

  // Simulate real-time data updates from Firebase
  useEffect(() => {
    const interval = setInterval(() => {
      // In a real app, this would fetch from Firebase
      const newValue = fetchEMGDataFromFirebase()
      setCurrentEMG(newValue)

      // Add a new data point and remove the oldest one
      const newData = [...data.slice(1), { time: data[data.length - 1].time + 1, value: newValue }]
      setData(newData)

      // Calculate current average
      const currentAvg = newData.reduce((sum, item) => sum + item.value, 0) / newData.length

      // Determine if there's improvement
      if (previousAvg === 0) {
        setPreviousAvg(currentAvg)
        setImprovement("initial")
      } else if (currentAvg > previousAvg + 2) {
        setImprovement("improved")
        setPreviousAvg(currentAvg)
      } else {
        setImprovement("same")
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [data, previousAvg])

  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base font-medium">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="time" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
              <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} domain={[0, 60]} />
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">Value</span>
                            <span className="font-bold text-muted-foreground">{payload[0].value}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">Time</span>
                            <span className="font-bold text-muted-foreground">{payload[0].payload.time}s</span>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Area type="monotone" dataKey="value" stroke="#06b6d4" fillOpacity={1} fill="url(#colorValue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 rounded-lg bg-muted p-4">
          {improvement === "improved" ? (
            <p className="text-center font-medium text-green-600">There is improvement! Keep going!</p>
          ) : improvement === "same" ? (
            <p className="text-center font-medium text-amber-600">Keep practicing! Progress takes time.</p>
          ) : (
            <p className="text-center font-medium text-muted-foreground">Starting to monitor your muscle activity...</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

