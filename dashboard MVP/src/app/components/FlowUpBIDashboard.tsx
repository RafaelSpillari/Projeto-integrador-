import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FlowUpBIDashboard = () => {
  // Dados dos KPIs
  const kpiCards = [
    {
      title: 'Prevalência Universitária',
      value: '80% - 95%',
      subtitle: 'dos estudantes relatam procrastinar',
      icon: 'education',
      alert: false
    },
    {
      title: 'Procrastinadores Crônicos (Adultos)',
      value: '25%',
      subtitle: 'da população adulta',
      icon: 'time',
      alert: false
    },
    {
      title: 'Impacto no Desempenho',
      value: '-30%',
      subtitle: 'redução na produtividade',
      icon: 'alert',
      alert: true
    }
  ];

  // Dados para gráfico de barras - Fatores Determinantes
  const factorsData = [
    { fator: 'Sensação de Sobrecarga', percentual: 85 },
    { fator: 'Medo de Falhar', percentual: 70 }
  ];

  // Dados para gráfico de rosca - Uso de Dispositivos Digitais
  const deviceUsageData = [
    { name: 'Tempo Perdido', value: 2, color: '#F97316' },
    { name: 'Tempo Produtivo', value: 6, color: '#0F172A' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      {/* Cabeçalho */}
      <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-6 px-8 shadow-lg border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <div className="flex items-center mb-2">
              <div className="bg-orange-500 text-white px-4 py-1 rounded text-sm mr-3">
                FLOWUP
              </div>
              <span className="text-slate-400 text-sm">Projeto Integrador 2026</span>
            </div>
            <h1 className="text-2xl">Painel de Evidências: O Fenômeno da Procrastinação</h1>
            <p className="text-slate-300 text-sm mt-1">FLOW UP: Diagnóstico Quantitativo da Procrastinação</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-8">
        {/* Cartões de KPI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {kpiCards.map((card, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md p-6 border-t-4 ${
                card.alert ? 'border-orange-500' : 'border-slate-700'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-slate-600 text-sm">{card.title}</h3>
                {card.icon === 'education' && (
                  <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                )}
                {card.icon === 'time' && (
                  <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {card.icon === 'alert' && (
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                )}
              </div>
              <p className={`text-4xl mb-2 ${card.alert ? 'text-orange-500' : 'text-slate-800'}`}>
                {card.value}
              </p>
              <p className="text-slate-500 text-xs">{card.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Gráfico de Barras - Fatores Determinantes */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-1 h-6 bg-orange-500 mr-3"></div>
              <h2 className="text-lg text-slate-800">Fatores Determinantes</h2>
            </div>
            <p className="text-sm text-slate-600 mb-4">Principais causas identificadas na amostra (N=150)</p>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={factorsData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 150, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" domain={[0, 100]} stroke="#475569" />
                <YAxis dataKey="fator" type="category" stroke="#475569" width={140} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                  formatter={(value) => [`${value}%`, 'Prevalência']}
                />
                <Bar dataKey="percentual" fill="#0F172A" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Gráfico de Rosca - Uso de Dispositivos Digitais */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-1 h-6 bg-orange-500 mr-3"></div>
              <h2 className="text-lg text-slate-800">Uso de Dispositivos Digitais</h2>
            </div>
            <p className="text-sm text-slate-600 mb-4">Tempo médio diário (8h de estudo)</p>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={deviceUsageData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {deviceUsageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                  formatter={(value) => [`${value}h`, 'Tempo']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 text-center">
              <p className="text-3xl text-orange-500 mb-1">2 horas</p>
              <p className="text-xs text-slate-600">diárias perdidas em distrações digitais</p>
            </div>
          </div>
        </div>

        {/* Indicador de Risco e Painel de Conclusão */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Impacto na Saúde Mental */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-1 h-6 bg-orange-500 mr-3"></div>
              <h2 className="text-lg text-slate-800">Impacto na Saúde Mental</h2>
            </div>
            <p className="text-sm text-slate-600 mb-6">Correlação com distúrbios psicológicos</p>

            <div className="grid grid-cols-2 gap-6">
              {/* Indicador de Risco - Ansiedade */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border-l-4 border-orange-500">
                <div className="flex items-center mb-3">
                  <svg className="w-8 h-8 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-slate-700">Ansiedade</h3>
                </div>
                <p className="text-5xl text-orange-500 mb-2">2.5x</p>
                <p className="text-sm text-slate-600">maior probabilidade em procrastinadores</p>
              </div>

              {/* Indicador de Risco - Depressão */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-6 border-l-4 border-slate-700">
                <div className="flex items-center mb-3">
                  <svg className="w-8 h-8 text-slate-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <h3 className="text-slate-700">Depressão</h3>
                </div>
                <p className="text-5xl text-slate-700 mb-2">1.8x</p>
                <p className="text-sm text-slate-600">maior prevalência identificada</p>
              </div>
            </div>

            {/* Barra de Progresso de Risco */}
            <div className="mt-6 bg-slate-100 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-slate-700">Índice de Risco Composto</span>
                <span className="text-sm text-orange-500">Alto</span>
              </div>
              <div className="w-full bg-slate-300 rounded-full h-3">
                <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-3 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>

          {/* Painel de Conclusão */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-md p-6 text-white">
            <div className="flex items-center mb-4">
              <div className="w-1 h-6 bg-orange-500 mr-3"></div>
              <h2 className="text-lg">Conclusão</h2>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                Fenômeno complexo com implicações diretas no desempenho e bem-estar.
              </p>

              <div className="border-t border-slate-700 pt-4">
                <h3 className="text-sm text-orange-400 mb-2">Principais Achados:</h3>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">▸</span>
                    <span>85% dos casos associados à sobrecarga cognitiva</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">▸</span>
                    <span>Redução de 30% na produtividade acadêmica</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">▸</span>
                    <span>Correlação significativa com ansiedade (2.5x)</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-slate-700 pt-4">
                <h3 className="text-sm text-orange-400 mb-2">Recomendações:</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Implementação de sistemas de suporte automatizados para divisão de tarefas e monitoramento de padrões comportamentais.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé com Metodologia */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6 border-l-4 border-slate-700">
          <h3 className="text-slate-800 mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Metodologia e Fontes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-slate-600">Amostra:</span>
              <p className="text-slate-800">N = 150 estudantes</p>
            </div>
            <div>
              <span className="text-slate-600">Método:</span>
              <p className="text-slate-800">Análise Quantitativa</p>
            </div>
            <div>
              <span className="text-slate-600">Período:</span>
              <p className="text-slate-800">Março 2026</p>
            </div>
            <div>
              <span className="text-slate-600">Confiabilidade:</span>
              <p className="text-slate-800">95% (α = 0.05)</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FlowUpBIDashboard;
