import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  Home,
  BarChart3,
  Target,
  Settings,
  TrendingUp,
  Clock,
  AlertTriangle,
  Activity,
  ChevronRight,
  User,
} from "lucide-react";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Dados fictícios para tendência de produtividade
const produtividadeData = [
  { dia: "Seg", produtividade: 72, procrastinacao: 28 },
  { dia: "Ter", produtividade: 65, procrastinacao: 35 },
  { dia: "Qua", produtividade: 80, procrastinacao: 20 },
  { dia: "Qui", produtividade: 78, procrastinacao: 22 },
  { dia: "Sex", produtividade: 68, procrastinacao: 32 },
  { dia: "Sáb", produtividade: 55, procrastinacao: 45 },
  { dia: "Dom", produtividade: 45, procrastinacao: 55 },
];

// Dados fictícios para causas de distração
const distracaoData = [
  { name: "Redes Sociais", value: 45, color: "#3b82f6" },
  { name: "Medo de Falhar", value: 30, color: "#6366f1" },
  { name: "Complexidade da Tarefa", value: 25, color: "#8b5cf6" },
];

const menuItems = [
  { icon: Home, label: "Início", active: true },
  { icon: BarChart3, label: "Análises" },
  { icon: Target, label: "Metas" },
  { icon: Activity, label: "Sessões Flow" },
  { icon: Settings, label: "Configurações" },
];

export function FlowUpDashboardPT() {
  return (
    <div className="flex h-screen bg-slate-900">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-800 border-r border-slate-700 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-400 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              FLOW UP
            </h1>
          </div>
        </div>

        {/* User Profile */}
        <div className="p-4 border-b border-slate-700">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/50">
            <div className="w-10 h-10 bg-teal-400 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-slate-900" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">Marina Silva</p>
              <p className="text-xs text-slate-400">Engenharia de Software</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    item.active
                      ? "bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg"
                      : "text-slate-400 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.active && <ChevronRight className="w-4 h-4" />}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-700">
          <div className="p-3 bg-blue-900/30 rounded-lg border border-blue-800">
            <p className="text-xs font-medium text-blue-300 mb-1">
              💡 Dica do Dia
            </p>
            <p className="text-xs text-slate-300">
              Use a técnica Pomodoro para manter o foco!
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Dashboard de Produtividade
            </h2>
            <p className="text-slate-400">
              Última atualização: 10 de Abril de 2026, 14:30
            </p>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Índice de Foco */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-slate-400 text-sm mb-1">Índice de Foco</p>
                  <p className="text-4xl font-bold text-white">75%</p>
                </div>
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-teal-400" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-teal-500 to-teal-400 h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <p className="text-xs text-teal-400 mt-3 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                +8% em relação à semana passada
              </p>
            </Card>

            {/* Horas Recuperadas */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-slate-400 text-sm mb-1">
                    Horas Recuperadas
                  </p>
                  <p className="text-4xl font-bold text-white">12h</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <p className="text-sm text-slate-400">Esta semana</p>
              <p className="text-xs text-blue-400 mt-3 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                +3h em relação à meta
              </p>
            </Card>

            {/* Tarefas em Risco */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-slate-400 text-sm mb-1">Tarefas em Risco</p>
                  <p className="text-4xl font-bold text-white">3</p>
                </div>
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-amber-400" />
                </div>
              </div>
              <p className="text-sm text-slate-400">Precisam de atenção urgente</p>
              <p className="text-xs text-amber-400 mt-3">
                2 com deadline em 24h
              </p>
            </Card>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Line Chart - Produtividade */}
            <Card className="lg:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-6">
                Tendência de Produtividade vs. Procrastinação
              </h3>
              <ResponsiveContainer width="100%" height={320}>
                <LineChart data={produtividadeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis
                    dataKey="dia"
                    tick={{ fill: "#94a3b8", fontSize: 12 }}
                    stroke="#475569"
                  />
                  <YAxis
                    tick={{ fill: "#94a3b8", fontSize: 12 }}
                    stroke="#475569"
                    label={{
                      value: "Percentual (%)",
                      angle: -90,
                      position: "insideLeft",
                      fill: "#94a3b8",
                    }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1e293b",
                      border: "1px solid #334155",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                  />
                  <Legend
                    wrapperStyle={{ fontSize: "12px", color: "#94a3b8" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="produtividade"
                    stroke="#14b8a6"
                    strokeWidth={3}
                    dot={{ fill: "#14b8a6", r: 5 }}
                    name="Produtividade"
                  />
                  <Line
                    type="monotone"
                    dataKey="procrastinacao"
                    stroke="#f59e0b"
                    strokeWidth={3}
                    dot={{ fill: "#f59e0b", r: 5 }}
                    name="Procrastinação"
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-4 p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                <p className="text-xs text-slate-300">
                  <span className="font-semibold text-teal-400">Insight:</span>{" "}
                  Sua produtividade atingiu o pico na quarta-feira (80%). Finais de
                  semana mostram queda significativa - considere agendar tarefas
                  leves para esses dias.
                </p>
              </div>
            </Card>

            {/* Pie Chart - Causas de Distração */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-6">
                Causas de Distração
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={distracaoData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {distracaoData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1e293b",
                      border: "1px solid #334155",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-3">
                {distracaoData.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm text-slate-300 flex-1">
                      {item.name}
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {item.value}%
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-3 bg-blue-900/30 rounded-lg border border-blue-800">
                <p className="text-xs text-blue-300">
                  💡 Bloqueie redes sociais durante sessões Flow
                </p>
              </div>
            </Card>
          </div>

          {/* Bottom Section - Recent Activity */}
          <Card className="mt-6 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Atividades Recentes
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-4 p-3 bg-slate-700/30 rounded-lg">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-white font-medium">
                    Sessão Flow: Desenvolvimento de API REST
                  </p>
                  <p className="text-xs text-slate-400">
                    Concluída • 2h 15min • Hoje às 10:00
                  </p>
                </div>
                <span className="text-xs bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full">
                  Completada
                </span>
              </div>
              <div className="flex items-center gap-4 p-3 bg-slate-700/30 rounded-lg">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-white font-medium">
                    Tarefa: Estudar algoritmos de ordenação
                  </p>
                  <p className="text-xs text-slate-400">
                    Em andamento • 45min • Hoje às 13:30
                  </p>
                </div>
                <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                  Ativa
                </span>
              </div>
              <div className="flex items-center gap-4 p-3 bg-slate-700/30 rounded-lg">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-white font-medium">
                    Tarefa: Preparar apresentação de projeto
                  </p>
                  <p className="text-xs text-slate-400">
                    Pendente • Deadline: Amanhã às 14:00
                  </p>
                </div>
                <span className="text-xs bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full">
                  Urgente
                </span>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
