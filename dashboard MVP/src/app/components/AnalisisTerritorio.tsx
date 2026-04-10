import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, Area } from 'recharts';
import { MapPin, Globe, Building2, TrendingUp } from 'lucide-react';

const ventasPorTerritorio = [
  { territorio: 'Northwest', ventas: 1250000, crecimiento: 15.2, vendedores: 12, clientes: 450 },
  { territorio: 'Northeast', ventas: 980000, crecimiento: 8.5, vendedores: 10, clientes: 380 },
  { territorio: 'Central', ventas: 875000, crecimiento: 12.1, vendedores: 9, clientes: 320 },
  { territorio: 'Southwest', ventas: 720000, crecimiento: 6.8, vendedores: 8, clientes: 290 },
  { territorio: 'Southeast', ventas: 695000, crecimiento: 10.3, vendedores: 7, clientes: 265 },
];

const ventasPorPais = [
  { pais: 'United States', ventas: 2850000, porcentaje: 63 },
  { pais: 'Canada', ventas: 980000, porcentaje: 22 },
  { pais: 'France', ventas: 420000, porcentaje: 9 },
  { pais: 'Germany', ventas: 270000, porcentaje: 6 },
];

const tendenciaTerritorial = [
  { mes: 'Ene', northwest: 95000, northeast: 78000, central: 68000, southwest: 58000, southeast: 52000 },
  { mes: 'Feb', northwest: 102000, northeast: 82000, central: 72000, southwest: 61000, southeast: 55000 },
  { mes: 'Mar', northwest: 108000, northeast: 85000, central: 75000, southwest: 63000, southeast: 58000 },
  { mes: 'Abr', northwest: 98000, northeast: 79000, central: 71000, southwest: 59000, southeast: 54000 },
  { mes: 'May', northwest: 115000, northeast: 89000, central: 78000, southwest: 65000, southeast: 61000 },
  { mes: 'Jun', northwest: 128000, northeast: 98000, central: 86000, southwest: 72000, southeast: 68000 },
];

const performanceVendedores = [
  { vendedor: 'J. Smith', territorio: 'Northwest', ventas: 385000, cuota: 92 },
  { vendedor: 'M. Johnson', territorio: 'Northeast', ventas: 342000, cuota: 88 },
  { vendedor: 'R. Williams', territorio: 'Central', ventas: 298000, cuota: 95 },
  { vendedor: 'L. Davis', territorio: 'Northwest', ventas: 275000, cuota: 85 },
  { vendedor: 'K. Martinez', territorio: 'Southwest', ventas: 252000, cuota: 90 },
];

export default function AnalisisTerritorio() {
  return (
    <div className="h-full p-6 overflow-auto bg-[#1a1a2e]">
      {/* KPIs Territoriales */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-[#16213e] to-[#0f3460] p-6 rounded-lg border border-[#2a2a4e] shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-sm">Territorios Activos</span>
            <MapPin className="text-[#00d4ff]" size={20} />
          </div>
          <div className="text-3xl text-white mb-1">5</div>
          <div className="text-sm text-gray-400">Cobertura completa</div>
        </div>

        <div className="bg-gradient-to-br from-[#16213e] to-[#0f3460] p-6 rounded-lg border border-[#2a2a4e] shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-sm">Países</span>
            <Globe className="text-[#7b61ff]" size={20} />
          </div>
          <div className="text-3xl text-white mb-1">4</div>
          <div className="text-sm text-gray-400">Presencia internacional</div>
        </div>

        <div className="bg-gradient-to-br from-[#16213e] to-[#0f3460] p-6 rounded-lg border border-[#2a2a4e] shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-sm">Total Vendedores</span>
            <Building2 className="text-[#ff6b9d]" size={20} />
          </div>
          <div className="text-3xl text-white mb-1">46</div>
          <div className="text-sm text-gray-400">Equipo de ventas</div>
        </div>

        <div className="bg-gradient-to-br from-[#16213e] to-[#0f3460] p-6 rounded-lg border border-[#2a2a4e] shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-sm">Mejor Territorio</span>
            <TrendingUp className="text-[#ffc234]" size={20} />
          </div>
          <div className="text-3xl text-white mb-1">NW</div>
          <div className="text-sm text-gray-400">+15.2% crecimiento</div>
        </div>
      </div>

      {/* Tabla de Territorios */}
      <div className="bg-gradient-to-br from-[#16213e] to-[#0f3460] p-6 rounded-lg border border-[#2a2a4e] shadow-xl mb-6">
        <h3 className="text-lg text-white mb-4">Desempeño por Territorio</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#2a2a4e]">
                <th className="text-left py-3 px-4 text-sm text-gray-400">Territorio</th>
                <th className="text-right py-3 px-4 text-sm text-gray-400">Ventas</th>
                <th className="text-right py-3 px-4 text-sm text-gray-400">Crecimiento</th>
                <th className="text-right py-3 px-4 text-sm text-gray-400">Vendedores</th>
                <th className="text-right py-3 px-4 text-sm text-gray-400">Clientes</th>
                <th className="text-right py-3 px-4 text-sm text-gray-400">Venta/Vendedor</th>
              </tr>
            </thead>
            <tbody>
              {ventasPorTerritorio.map((item, index) => (
                <tr key={index} className="border-b border-[#2a2a4e] hover:bg-[#1a1a2e]">
                  <td className="py-3 px-4 text-white">{item.territorio}</td>
                  <td className="py-3 px-4 text-right text-white">
                    ${(item.ventas / 1000).toFixed(0)}K
                  </td>
                  <td className="py-3 px-4 text-right">
                    <span className={`${item.crecimiento > 10 ? 'text-emerald-400' : 'text-gray-400'}`}>
                      +{item.crecimiento}%
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right text-white">{item.vendedores}</td>
                  <td className="py-3 px-4 text-right text-white">{item.clientes}</td>
                  <td className="py-3 px-4 text-right text-white">
                    ${(item.ventas / item.vendedores / 1000).toFixed(0)}K
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Comparación Territorios */}
        <div className="bg-gradient-to-br from-[#16213e] to-[#0f3460] p-6 rounded-lg border border-[#2a2a4e] shadow-xl">
          <h3 className="text-lg text-white mb-4">Comparación de Ventas por Territorio</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={ventasPorTerritorio}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a4e" />
              <XAxis dataKey="territorio" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip
                contentStyle={{ backgroundColor: '#16213e', border: '1px solid #2a2a4e', borderRadius: '8px' }}
                labelStyle={{ color: '#fff' }}
                itemStyle={{ color: '#fff' }}
                formatter={(value: number) => `$${value.toLocaleString()}`}
              />
              <Bar dataKey="ventas" fill="#00d4ff" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Ventas por País */}
        <div className="bg-gradient-to-br from-[#16213e] to-[#0f3460] p-6 rounded-lg border border-[#2a2a4e] shadow-xl">
          <h3 className="text-lg text-white mb-4">Distribución por País</h3>
          <div className="space-y-4 mt-8">
            {ventasPorPais.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">{item.pais}</span>
                  <span className="text-sm text-white">
                    ${(item.ventas / 1000).toFixed(0)}K ({item.porcentaje}%)
                  </span>
                </div>
                <div className="w-full bg-[#2a2a4e] rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-[#00d4ff] to-[#7b61ff] h-2 rounded-full transition-all"
                    style={{ width: `${item.porcentaje}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Charts */}
      <div className="grid grid-cols-2 gap-6">
        {/* Tendencia Territorial */}
        <div className="bg-gradient-to-br from-[#16213e] to-[#0f3460] p-6 rounded-lg border border-[#2a2a4e] shadow-xl">
          <h3 className="text-lg text-white mb-4">Tendencia Mensual por Territorio</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={tendenciaTerritorial}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a4e" />
              <XAxis dataKey="mes" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip
                contentStyle={{ backgroundColor: '#16213e', border: '1px solid #2a2a4e', borderRadius: '8px' }}
                labelStyle={{ color: '#fff' }}
                itemStyle={{ color: '#fff' }}
              />
              <Legend />
              <Line type="monotone" dataKey="northwest" stroke="#00d4ff" strokeWidth={2} name="Northwest" />
              <Line type="monotone" dataKey="northeast" stroke="#7b61ff" strokeWidth={2} name="Northeast" />
              <Line type="monotone" dataKey="central" stroke="#ff6b9d" strokeWidth={2} name="Central" />
              <Line type="monotone" dataKey="southwest" stroke="#ffc234" strokeWidth={2} name="Southwest" />
              <Line type="monotone" dataKey="southeast" stroke="#00ff88" strokeWidth={2} name="Southeast" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Performance Vendedores */}
        <div className="bg-gradient-to-br from-[#16213e] to-[#0f3460] p-6 rounded-lg border border-[#2a2a4e] shadow-xl">
          <h3 className="text-lg text-white mb-4">Top 5 Vendedores por Territorio</h3>
          <ResponsiveContainer width="100%" height={280}>
            <ComposedChart data={performanceVendedores} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a4e" />
              <XAxis type="number" stroke="#888" />
              <YAxis dataKey="vendedor" type="category" width={100} stroke="#888" />
              <Tooltip
                contentStyle={{ backgroundColor: '#16213e', border: '1px solid #2a2a4e', borderRadius: '8px' }}
                labelStyle={{ color: '#fff' }}
                itemStyle={{ color: '#fff' }}
              />
              <Legend />
              <Bar dataKey="ventas" fill="#7b61ff" name="Ventas ($)" />
              <Line dataKey="cuota" stroke="#ffc234" strokeWidth={2} name="% Cuota" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
