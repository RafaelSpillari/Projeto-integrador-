import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { TrendingUp, ArrowUp, Clock, Lightbulb, Play } from "lucide-react";
import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts";

// Fictional data for productivity heatmap by hour
const hourlyProductivityData = [
  { hour: "6 AM", productivity: 45 },
  { hour: "7 AM", productivity: 62 },
  { hour: "8 AM", productivity: 78 },
  { hour: "9 AM", productivity: 85 },
  { hour: "10 AM", productivity: 92 },
  { hour: "11 AM", productivity: 88 },
  { hour: "12 PM", productivity: 65 },
  { hour: "1 PM", productivity: 42 },
  { hour: "2 PM", productivity: 38 },
  { hour: "3 PM", productivity: 55 },
  { hour: "4 PM", productivity: 72 },
  { hour: "5 PM", productivity: 68 },
  { hour: "6 PM", productivity: 52 },
  { hour: "7 PM", productivity: 35 },
];

// Fictional data for time allocation over the week
const weeklyTimeAllocation = [
  { day: "Mon", focus: 4.2, administrative: 1.8, procrastination: 2.0 },
  { day: "Tue", focus: 5.5, administrative: 1.5, procrastination: 1.0 },
  { day: "Wed", focus: 6.0, administrative: 1.2, procrastination: 0.8 },
  { day: "Thu", focus: 5.8, administrative: 1.3, procrastination: 0.9 },
  { day: "Fri", focus: 4.5, administrative: 2.0, procrastination: 1.5 },
  { day: "Sat", focus: 3.0, administrative: 0.5, procrastination: 2.5 },
  { day: "Sun", focus: 2.5, administrative: 0.8, procrastination: 3.2 },
];

// Data for Deep Work Index gauge
const deepWorkData = [
  {
    name: "Deep Work",
    value: 68,
    fill: "#3b82f6",
  },
];

export function FlowUpDashboard() {
  const studentName = "Alex Chen";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-[1600px] mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <div>
            <h1 className="text-3xl font-semibold text-slate-800">
              FLOWUP Dashboard
            </h1>
            <p className="text-slate-600 mt-1">Welcome back, {studentName}</p>
          </div>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 shadow-md"
          >
            <Play className="mr-2 h-5 w-5" />
            Start Flow Session
          </Button>
        </div>

        {/* Key Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Deep Work Index Gauge */}
          <Card className="p-6 bg-white shadow-sm border-slate-200">
            <h3 className="text-sm font-medium text-slate-600 mb-4">
              Deep Work Index
            </h3>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={200}>
                <RadialBarChart
                  cx="50%"
                  cy="50%"
                  innerRadius="70%"
                  outerRadius="90%"
                  barSize={20}
                  data={deepWorkData}
                  startAngle={180}
                  endAngle={0}
                >
                  <PolarAngleAxis
                    type="number"
                    domain={[0, 100]}
                    angleAxisId={0}
                    tick={false}
                  />
                  <RadialBar
                    background
                    dataKey="value"
                    cornerRadius={10}
                    fill="#3b82f6"
                  />
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-4xl font-bold"
                    fill="#1e293b"
                  >
                    68%
                  </text>
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-slate-500 text-center mt-2">
              Above average focus performance
            </p>
          </Card>

          {/* Tasks Completed Early */}
          <Card className="p-6 bg-white shadow-sm border-slate-200">
            <h3 className="text-sm font-medium text-slate-600 mb-4">
              Tasks Completed Early
            </h3>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-5xl font-bold text-slate-800">12</p>
                <div className="flex items-center mt-2 text-green-600">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">15%</span>
                  <span className="text-xs text-slate-500 ml-2">vs last week</span>
                </div>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              Great progress on deadline management
            </p>
          </Card>

          {/* Procrastination Cost */}
          <Card className="p-6 bg-white shadow-sm border-slate-200">
            <h3 className="text-sm font-medium text-slate-600 mb-4">
              Procrastination Cost
            </h3>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-5xl font-bold text-slate-800">4.5</p>
                <p className="text-sm text-slate-600 mt-1">hours this week</p>
              </div>
              <div className="bg-amber-100 p-3 rounded-lg">
                <Clock className="h-8 w-8 text-amber-600" />
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              Time spent on non-essential tasks
            </p>
          </Card>
        </div>

        {/* Main Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Productivity Heatmap */}
          <Card className="p-6 bg-white shadow-sm border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              Productivity Heatmap by Hour of Day
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={hourlyProductivityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis
                  dataKey="hour"
                  tick={{ fill: "#64748b", fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis
                  tick={{ fill: "#64748b", fontSize: 12 }}
                  label={{
                    value: "Focus Score",
                    angle: -90,
                    position: "insideLeft",
                    fill: "#64748b",
                  }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                  }}
                  cursor={{ fill: "#f1f5f9" }}
                />
                <Bar
                  dataKey="productivity"
                  fill="#3b82f6"
                  radius={[8, 8, 0, 0]}
                  name="Focus Score"
                />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs text-slate-500 mt-4">
              Peak focus: 9-11 AM | Slump: 1-3 PM (post-lunch)
            </p>
          </Card>

          {/* Time Allocation Stacked Area */}
          <Card className="p-6 bg-white shadow-sm border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              Time Allocation: Focus, Administrative, Procrastination
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={weeklyTimeAllocation}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="day" tick={{ fill: "#64748b", fontSize: 12 }} />
                <YAxis
                  tick={{ fill: "#64748b", fontSize: 12 }}
                  label={{
                    value: "Hours",
                    angle: -90,
                    position: "insideLeft",
                    fill: "#64748b",
                  }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                  }}
                />
                <Legend
                  wrapperStyle={{ fontSize: "12px" }}
                  iconType="circle"
                />
                <Area
                  type="monotone"
                  dataKey="focus"
                  stackId="1"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.8}
                  name="Focus"
                />
                <Area
                  type="monotone"
                  dataKey="administrative"
                  stackId="1"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.8}
                  name="Administrative"
                />
                <Area
                  type="monotone"
                  dataKey="procrastination"
                  stackId="1"
                  stroke="#f59e0b"
                  fill="#f59e0b"
                  fillOpacity={0.8}
                  name="Procrastination"
                />
              </AreaChart>
            </ResponsiveContainer>
            <p className="text-xs text-slate-500 mt-4">
              Wednesday was your most productive day!
            </p>
          </Card>
        </div>

        {/* Mentor Insights Panel */}
        <Card className="p-6 bg-gradient-to-r from-blue-50 to-green-50 border-blue-200 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
              <Lightbulb className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Mentor Insights
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">
                    <span className="font-medium text-green-700">Great job!</span>{" "}
                    Your focus is highest before 11 AM. Try scheduling complex
                    tasks like algorithm problems or system design during this
                    window.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">
                    You completed <span className="font-medium">12 tasks early</span> this week—
                    that's a 15% improvement! This shows your time estimation skills
                    are improving.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">
                    <span className="font-medium text-amber-700">Opportunity:</span>{" "}
                    You're experiencing a consistent slump between 1-3 PM. Consider
                    taking a 20-minute walk or doing light administrative work during
                    this time.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">
                    Weekend focus dropped by 40%. Try blocking one 2-hour deep work
                    session on Saturday mornings to maintain momentum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
