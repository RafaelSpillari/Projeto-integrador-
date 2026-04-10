import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { DollarSign, TrendingUp, Users, ShoppingBag, Target, Award } from 'lucide-react';

const ventasMensuales = [
  { mes: 'Ene', actual: 245000, meta: 230000 },
  { mes: 'Feb', actual: 289000, meta: 250000 },
  { mes: 'Mar', actual: 312000, meta: 270000 },
  { mes: 'Abr', actual: 278000, meta: 260000 },
  { mes: 'May', actual: 335000, meta: 290000 },
  { mes: 'Jun', actual: 398000, meta: 320000 },
  { mes: 'Jul', actual: 425000, meta: 350000 },
  { mes: 'Ago', actual: 412000, meta: 360000 },
];

const distribucionCanal = [
  { nombre: 'Online', valor: 1850000, porcentaje: 41 },
  { nombre: 'Tienda', valor: 1580000, porcentaje: 35 },
  { nombre: 'Distribuidores', valor: 890000, porcentaje: 20 },
  { nombre: 'Corporativo', valor: 200000, porcentaje: 4 },
];

const topClientes = [
  { cliente: 'Bike World', ventas: 185000 },
  { cliente: 'Metro Cycles', ventas: 162000 },
  { cliente: 'Touring Bikes', ventas: 145000 },
  { cliente: 'Sport Center', ventas: 128000 },
  { cliente: 'Urban Riders', ventas: 115000 },
];

const COLORS = ['#00d4ff', '#7b61ff', '#ff6b9d', '#ffc234'];

const GaugeChart = ({ value, max, title }: { value: number; max: number; title: string }) => {
  const percentage = (value / max) * 100;
  const angle = (percentage / 100) * 180;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-40 h-20 mb-2">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <path
            d="M 20 80 A 80 80 0 0 1 180 80"
            fill="none"
            stroke="#2a2a4e"
            strokeWidth="20"
            strokeLinecap="round"
          />
          <path
            d="M 20 80 A 80 80 0 0 1 180 80"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="20"
            strokeLinecap="round"
            strokeDasharray={`${(angle / 180) * 251.2} 251.2`}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff6b9d" />
              <stop offset="50%" stopColor="#ffc234" />
              <stop offset="100%" stopColor="#00d4ff" />
            </linearGradient>
          </defs>
          <text x="100" y="75" textAnchor="middle" fill="#fff" fontSize="24" fontWeight="bold">
            {percentage.toFixed(0)}%
          </text>
        </svg>
      </div>
      <div className="text-center">
        <div className="text-sm text-gray-400">{title}</div>
        <div className="text-lg text-white">${(value / 1000).toFixed(0)}K / ${(max / 1000).toFixed(0)}K</div>
      </div>
    </div>
  );
};

export default function DashboardEjecutivo() {
  return (
    <div className="h-full p-6 overflow-auto bg-[#1a1a2e]">
      {/* Top KPIs */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Ventas Totales */}
        <div className="bg-gradient-to-br from-[#16213e] to-[#0f3460] p-6 rounded-lg border border-[#2a2a4e] shadow-xl">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-gray-400 text-sm mb-1">Ventas Totales</div>
              <div className="text-4xl text-white mb-2">$4.52M</div>
              <div className="flex items-center text-sm text-emerald-400">
                <TrendingUp size={16} className="mr-1" />
                +12.5% vs año anterior
              </div>
            </div>
            <div className="bg-[#00d4ff] bg-opacity-20 p-3 rounded-lg">
              <DollarSign className="text-[#00d4ff]" size={24} />
            </div>
          </div>
          <div className="w-full bg-[#2a2a4e] rounded-full h-2 mt-4">
            <div className="bg-gradient-to-r from-[#00d4ff] to-[#7b61ff] h-2 rounded-full" style={{ width: '78%' }} />
          </div>
          <div className="text-xs text-gray-400 mt-2">78% de meta anual</div>
        </div>

        {/* Clientes Activos */}
        <div className="bg-gradient-to-br from-[#16213e] to-[#0f3460] p-6 rounded-lg border border-[#2a2a4e] shadow-xl">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-gray-400 text-sm mb-1">Clientes Activos</div>
              <div className="text-4xl text-white mb-2">1,847</div>
              <div className="flex items-center text-sm text-emerald-400">
                <TrendingUp size={16} className="mr-1" />
                +8.3% vs mes anterior
              </div>
            </div>
            <div className="bg-[#7b61ff] bg-opacity-20 p-3 rounded-lg">
              <Users className="text-[#7b61ff]" size={24} />
            </div>
          </div>
          <div className="w-full bg-[#2a2a4e] rounded-full h-2 mt-4">
            <div className="bg-gradient-to-r from-[#7b61ff] to-[#ff6b9d] h-2 rounded-full" style={{ width: '92%' }} />
          </div>
          <div className="text-xs text-gray-400 mt-2">92% retención</div>
        </div>

        {/* Pedidos del Mes */}
        <div className="bg-gradient-to-br from-[#16213e] to-[#0f3460] p-6 rounded-lg border border-[#2a2a4e] shadow-xl">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-gray-400 text-sm mb-1">Pedidos del Mes</div>
              <div className="text-4xl text-white mb-2">920</div>
              <div className="flex items-center text-sm text-emerald-400">
                <TrendingUp size={16} className="mr-1" />
                +15.2% vs mes anterior
              </div>
            </div>
            <div className="bg-[#ff6b9d] bg-opacity-20 p-3 rounded-lg">
              <ShoppingBag className="text-[#ff6b9d]" size={24} />
            </div>
          </div>
          <div className="w-full bg-[#2a2a4e] rounded-full h-2 mt-4">
            <div className="bg-gradient-to-r from-[#ff6b9d] to-[#ffc234] h-2 rounded-full" style={{ width: '85%' }} />
          </div>
          <div className="text-xs text-gray-400 mt-2">85% sobre meta mensual</div>
        </div>
      </div>

      {/* Gauges Row */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-gradient-to-br from-[#16213e] to-[#0f3460] p-6 rounded-lg border border-[#2a2a4e] shadow-xl">
          <GaugeChart value={2850000} max={3500000} title="Meta Trimestral" />
        </div>
        <div className="bg-gradient-to-br from-[#16213e] to-[#0f3460] p-6 rounded-lg border border-[#2a2a4e] shadow-xl">
          <GaugeChart value={1580000} max={2000000} title="Ventas Online" />
        </div>
        <div className="bg-gradient-to-br from-[#16213e] to-[#0f3460] p-6 rounded-lg border border-[#2a2a4e] shadow-xl">
          <GaugeChart value={735000} max={900000} title="Nuevos Clientes" />
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Tendencia Ventas vs Meta */}
        <div className="bg-gradient-to-br from-[#16213e] to-[#0f3460] p-6 rounded-lg border border-[#2a2a4e] shadow-xl">
          <h3 className="text-lg text-white mb-4 flex items-center gap-2">
            <Target className="text-[#00d4ff]" size={20} />
            Ventas Actuales vs Meta
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={ventasMensuales}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a4e" />
              <XAxis dataKey="mes" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip
                contentStyle={{ backgroundColor: '#16213e', border: '1px solid #2a2a4e', borderRadius: '8px' }}
                labelStyle={{ color: '#fff' }}
                itemStyle={{ color: '#fff' }}
                formatter={(value: number) => `$${value.toLocaleString()}`}
              />
              <Line type="monotone" dataKey="actual" stroke="#00d4ff" strokeWidth={3} dot={{ fill: '#00d4ff', r: 5 }} name="Actual" />
              <Line type="monotone" dataKey="meta" stroke="#ff6b9d" strokeWidth={2} strokeDasharray="5 5" dot={{ fill: '#ff6b9d', r: 4 }} name="Meta" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Distribución por Canal */}
        <div className="bg-gradient-to-br from-[#16213e] to-[#0f3460] p-6 rounded-lg border border-[#2a2a4e] shadow-xl">
          <h3 className="text-lg text-white mb-4 flex items-center gap-2">
            <Award className="text-[#7b61ff]" size={20} />
            Distribución por Canal de Venta
          </h3>
          <div className="flex items-center">
            <ResponsiveContainer width="45%" height={250}>
              <PieChart>
                <Pie
                  data={distribucionCanal}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  fill="#8884d8"
                  dataKey="valor"
                  paddingAngle={2}
                >
                  {distribucionCanal.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#16213e', border: '1px solid #2a2a4e', borderRadius: '8px' }}
                  labelStyle={{ color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                  formatter={(value: number) => `$${value.toLocaleString()}`}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 space-y-3">
              {distribucionCanal.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="text-sm text-gray-300">{item.nombre}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-white">${(item.valor / 1000).toFixed(0)}K</div>
                    <div className="text-xs text-gray-400">{item.porcentaje}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Top 5 Clientes */}
        <div className="bg-gradient-to-br from-[#16213e] to-[#0f3460] p-6 rounded-lg border border-[#2a2a4e] shadow-xl">
          <h3 className="text-lg text-white mb-4">Top 5 Clientes</h3>
          <div className="space-y-3">
            {topClientes.map((cliente, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-[#1a1a2e] rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-[#00d4ff] to-[#7b61ff] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="text-white">{cliente.cliente}</span>
                </div>
                <span className="text-[#00d4ff]">${(cliente.ventas / 1000).toFixed(0)}K</span>
              </div>
            ))}
          </div>
        </div>

        {/* Métricas Adicionales */}
        <div className="bg-gradient-to-br from-[#16213e] to-[#0f3460] p-6 rounded-lg border border-[#2a2a4e] shadow-xl">
          <h3 className="text-lg text-white mb-4">Métricas de Rendimiento</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-[#1a1a2e] rounded-lg">
              <span className="text-gray-300">Tasa de Conversión</span>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-[#2a2a4e] rounded-full h-2">
                  <div className="bg-gradient-to-r from-[#00d4ff] to-[#7b61ff] h-2 rounded-full" style={{ width: '67%' }} />
                </div>
                <span className="text-white w-12 text-right">6.7%</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#1a1a2e] rounded-lg">
              <span className="text-gray-300">Satisfacción Cliente</span>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-[#2a2a4e] rounded-full h-2">
                  <div className="bg-gradient-to-r from-[#7b61ff] to-[#ff6b9d] h-2 rounded-full" style={{ width: '94%' }} />
                </div>
                <span className="text-white w-12 text-right">94%</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#1a1a2e] rounded-lg">
              <span className="text-gray-300">Margen Promedio</span>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-[#2a2a4e] rounded-full h-2">
                  <div className="bg-gradient-to-r from-[#ff6b9d] to-[#ffc234] h-2 rounded-full" style={{ width: '42%' }} />
                </div>
                <span className="text-white w-12 text-right">42%</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#1a1a2e] rounded-lg">
              <span className="text-gray-300">Tiempo Entrega Prom.</span>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-[#2a2a4e] rounded-full h-2">
                  <div className="bg-gradient-to-r from-[#ffc234] to-[#00d4ff] h-2 rounded-full" style={{ width: '88%' }} />
                </div>
                <span className="text-white w-12 text-right">2.3d</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
