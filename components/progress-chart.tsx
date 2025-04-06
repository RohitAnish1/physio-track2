"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for progress tracking
const generateProgressData = () => {
  const data = []
  const today = new Date()

  // Generate data for the past 30 days
  for (let i = 29; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)

    // Create a baseline value that increases over time to show improvement
    const baseValue = 20 + (29 - i) * 0.8

    // Add some randomness to make it look realistic
    const value = Math.round((baseValue + (Math.random() * 10 - 5)) * 10) / 10

    data.push({
      date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      value: value,
      average: Math.round(baseValue * 10) / 10,
    })
  }

  return data
}

interface ProgressChartProps {
  title?: string
  description?: string
  className?: string
  data?: any[]
  period?: "week" | "month" | "year"
}

export function ProgressChart({
  title = "Muscle Activity Progress",
  description = "Track your improvement over time",
  className,
  data = generateProgressData(),
  period = "month",
}: ProgressChartProps) {
  // Filter data based on period
  const filteredData = (() => {
    if (period === "week") {
      return data.slice(-7)
    } else if (period === "month") {
      return data
    } else {
      return data
    }
  })()

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={filteredData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                interval={period === "week" ? 0 : "preserveEnd"}
              />
              <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid gap-1">
                          <p className="text-sm font-medium">{label}</p>
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <p className="text-xs">Activity: {payload[0].value} μV</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-muted-foreground"></div>
                            <p className="text-xs">Average: {payload[1].value} μV</p>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                name="Activity"
                stroke="#06b6d4"
                strokeWidth={2}
                dot={{ r: 0 }}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
              <Line
                type="monotone"
                dataKey="average"
                name="Average"
                stroke="#64748b"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

