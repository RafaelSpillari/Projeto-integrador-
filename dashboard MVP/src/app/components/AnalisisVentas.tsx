import { AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users, Package } from 'lucide-react';

const ventasMensuales = [
  { mes: 'Ene', ventas: 245000, unidades: 1200, ordenes: 450 },
  { mes: 'Feb', ventas: 289000, unidades: 1450, ordenes: 520 },
  { mes: 'Mar', ventas: 312000, unidades: 1580, ordenes: 580 },
  { mes: 'Abr', ventas: 278000, unidades: 1380, ordenes: 495 },
  { mes: 'May', ventas: 335000, unidades: 1720, ordenes: 640 },
  { mes: 'Jun', ventas: 398000, unidades: 2050, ordenes: 750 },
  { mes: 'Jul', ventas: 425000, unidades: 2180, ordenes: 820 },
  { mes: 'Ago', ventas: 412000, unidades: 2100, ordenes: 790 },
  { mes: 'Sep', ventas: 385000, unidades: 1950, ordenes: 720 },
  { mes: 'Oct', ventas: 445000, unidades: 2280, ordenes: 860 },
  { mes: 'Nov', ventas: 478000, unidades: 2450, ordenes: 920 },
  { mes: 'Dic', ventas: 520000, unidades: 2680, ordenes: 1000 },
];

const productosPorCategoria = [
  { nombre: 'Bicicletas', valor: 1850000, porcentaje: 42 },
  { nombre: 'Componentes', valor: 980000, porcentaje: 22 },
  { nombre: 'Accesorios', valor: 720000, porcentaje: 16 },
  { nombre: 'Ropa', valor: 890000, porcentaje: 20 },
];

const topProductos = [
  { producto: 'Road-150 Red', ventas: 285000 },
  { producto: 'Mountain-200 Black', ventas: 245000 },
  { producto: 'Road-350-W Yellow', ventas: 198000 },
  { producto: 'Mountain-300 Silver', ventas: 165000 },
  { producto: 'Road-550-W Yellow', ventas: 142000 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function AnalisisVentas() {
  return (
    <div className="h-full p-6 overflow-auto bg-[#1a1a2e]">
      {/* KPIs */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-[#16213e] to-[#0f3460] p-6 rounded-lg border border-[#2a2a4e] shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-sm">Ventas Totales</span>
            <DollarSign className="text-[#00d4ff]" size={20} />
          </div>
          <div className="text-3xl text-white mb-1">$4.52M</div>
          <div className="flex items-center text-sm text-emerald-400">
            <TrendingUp size={16} className="mr-1" />
            +12.5% vs año anterior
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#16213e] to-[#0f3460] p-6 rounded-lg border border-[#2a2a4e] shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-sm">Total Unidades</span>
            <Package className="text-[#7b61ff]" size={20} />
          </div>
          <div className="text-3xl text-white mb-1">23,020</div>
          <div className="flex items-center text-sm text-emerald-400">
            <TrendingUp size={16} className="mr-1" />
            +8.3% vs año anterior
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#16213e] to-[#0f3460] p-6 rounded-lg border border-[#2a2a4e] shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-sm">Órdenes</span>
            <ShoppingCart className="text-[#ff6b9d]" size={20} />
          </div>
          <div className="text-3xl text-white mb-1">8,545</div>
          <div className="flex items-center text-sm text-emerald-400">
            <TrendingUp size={16} className="mr-1" />
            +15.2% vs año anterior
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#16213e] to-[#0f3460] p-6 rounded-lg border border-[#2a2a4e] shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-sm">Ticket Promedio</span>
            <Users className="text-[#ffc234]" size={20} />
          </div>
          <div className="text-3xl text-white mb-1">$529</div>
          <div className="flex items-center text-sm text-rose-400">
            <TrendingDown size={16} className="mr-1" />
            -2.1% vs año anterior
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Ventas Mensuales */}
        <div className="bg-gradient-to-br from-[#16213e] to-[#0f3460] p-6 rounded-lg border border-[#2a2a4e] shadow-xl">
          <h3 className="text-lg text-white mb-4">Tendencia de Ventas Mensuales</h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={ventasMensuales}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a4e" />
              <XAxis dataKey="mes" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip
                contentStyle={{ backgroundColor: '#16213e', border: '1px solid #2a2a4e', borderRadius: '8px' }}
                labelStyle={{ color: '#fff' }}
                itemStyle={{ color: '#fff' }}
                formatter={(value: number) => `$${value.toLocaleString()}`}
              />
              <Area type="monotone" dataKey="ventas" stroke="#00d4ff" fill="#00d4ff" fillOpacity={0.3} strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Categorías de Productos */}
        <div className="bg-gradient-to-br from-[#16213e] to-[#0f3460] p-6 rounded-lg border border-[#2a2a4e] shadow-xl">
          <h3 className="text-lg text-white mb-4">Ventas por Categoría de Producto</h3>
          <div className="flex items-center">
            <ResponsiveContainer width="50%" height={280}>
              <PieChart>
                <Pie
                  data={productosPorCategoria}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="valor"
                >
                  {productosPorCategoria.map((entry, index) => (
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
            <div className="flex-1 pl-4">
              {productosPorCategoria.map((item, index) => (
                <div key={index} className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="text-sm text-gray-300">{item.nombre}</span>
                  </div>
                  <span className="text-sm text-white">{item.porcentaje}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Charts */}
      <div className="grid grid-cols-2 gap-6">
        {/* Top Productos */}
        <div className="bg-gradient-to-br from-[#16213e] to-[#0f3460] p-6 rounded-lg border border-[#2a2a4e] shadow-xl">
          <h3 className="text-lg text-white mb-4">Top 5 Productos por Ventas</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={topProductos} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a4e" />
              <XAxis type="number" stroke="#888" />
              <YAxis dataKey="producto" type="category" width={150} stroke="#888" />
              <Tooltip
                contentStyle={{ backgroundColor: '#16213e', border: '1px solid #2a2a4e', borderRadius: '8px' }}
                labelStyle={{ color: '#fff' }}
                itemStyle={{ color: '#fff' }}
                formatter={(value: number) => `$${value.toLocaleString()}`}
              />
              <Bar dataKey="ventas" fill="#7b61ff" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Unidades y Órdenes */}
        <div className="bg-gradient-to-br from-[#16213e] to-[#0f3460] p-6 rounded-lg border border-[#2a2a4e] shadow-xl">
          <h3 className="text-lg text-white mb-4">Unidades Vendidas vs Órdenes</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={ventasMensuales}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a4e" />
              <XAxis dataKey="mes" stroke="#888" />
              <YAxis yAxisId="left" stroke="#888" />
              <YAxis yAxisId="right" orientation="right" stroke="#888" />
              <Tooltip
                contentStyle={{ backgroundColor: '#16213e', border: '1px solid #2a2a4e', borderRadius: '8px' }}
                labelStyle={{ color: '#fff' }}
                itemStyle={{ color: '#fff' }}
              />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="unidades" stroke="#00d4ff" strokeWidth={2} name="Unidades" />
              <Line yAxisId="right" type="monotone" dataKey="ordenes" stroke="#ff6b9d" strokeWidth={2} name="Órdenes" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
