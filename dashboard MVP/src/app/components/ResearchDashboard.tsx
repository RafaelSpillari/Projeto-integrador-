import React from 'react';
import { BarChart, Bar, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const ResearchDashboard = () => {
  // Dados dos cartões de resumo
  const summaryCards = [
    { title: 'Total de Entrevistados', value: '150', subtitle: 'estudantes universitários' },
    { title: '% que Procrastina Diariamente', value: '85%', subtitle: 'frequência alta' },
    { title: 'Média de Horas Perdidas/Dia', value: '3.5h', subtitle: 'tempo desperdiçado' }
  ];

  // Dados para gráfico de barras horizontais - Principais Gatilhos
  const triggersData = [
    { gatilho: 'Medo de Falhar', valor: 68 },
    { gatilho: 'Redes Sociais', valor: 82 },
    { gatilho: 'Tarefas Complexas', valor: 55 },
    { gatilho: 'Falta de Energia', valor: 47 }
  ];

  // Dados para scatter plot - Ano do Curso vs Nível de Estresse
  const scatterData = [
    { ano: 1, estresse: 6.2 },
    { ano: 1, estresse: 5.8 },
    { ano: 1, estresse: 7.1 },
    { ano: 1, estresse: 6.5 },
    { ano: 1, estresse: 5.3 },
    { ano: 2, estresse: 7.3 },
    { ano: 2, estresse: 6.9 },
    { ano: 2, estresse: 8.1 },
    { ano: 2, estresse: 7.5 },
    { ano: 2, estresse: 6.8 },
    { ano: 3, estresse: 8.5 },
    { ano: 3, estresse: 8.9 },
    { ano: 3, estresse: 8.2 },
    { ano: 3, estresse: 9.1 },
    { ano: 3, estresse: 7.8 },
    { ano: 4, estresse: 9.3 },
    { ano: 4, estresse: 8.7 },
    { ano: 4, estresse: 9.5 },
    { ano: 4, estresse: 8.9 },
    { ano: 4, estresse: 9.0 }
  ];

  const testimonial = {
    text: "Eu sempre achei que estava no controle, mas quando parei pra pensar, percebi que passava mais de 4 horas por dia rolando o feed das redes sociais ao invés de estudar. É assustador como a procrastinação se disfarça de 'descanso'.",
    author: "Lucas M., 3º ano - Ciência da Computação"
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Cabeçalho */}
      <header className="bg-slate-800 text-white py-6 px-8 shadow-md">
        <h1 className="text-2xl mb-1">Resultados da Pesquisa de Campo</h1>
        <p className="text-slate-300 text-sm">Projeto Integrador - Análise de Procrastinação Acadêmica</p>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-8">
        {/* Cartões de Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {summaryCards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <h3 className="text-slate-600 text-sm mb-2">{card.title}</h3>
              <p className="text-3xl text-slate-800 mb-1">{card.value}</p>
              <p className="text-slate-500 text-xs">{card.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Gráficos em Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Gráfico de Barras Horizontais - Principais Gatilhos */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <h2 className="text-lg text-slate-800 mb-4">Principais Gatilhos Identificados</h2>
            <p className="text-sm text-slate-600 mb-4">Percentual de estudantes que relataram cada gatilho</p>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={triggersData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" domain={[0, 100]} stroke="#64748b" />
                <YAxis dataKey="gatilho" type="category" stroke="#64748b" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px'
                  }}
                  formatter={(value) => [`${value}%`, 'Prevalência']}
                />
                <Bar dataKey="valor" fill="#0f766e" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Scatter Plot - Ano do Curso vs Nível de Estresse */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <h2 className="text-lg text-slate-800 mb-4">Ano do Curso vs Nível de Estresse</h2>
            <p className="text-sm text-slate-600 mb-4">Correlação entre período acadêmico e estresse (escala 0-10)</p>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis
                  type="number"
                  dataKey="ano"
                  name="Ano do Curso"
                  domain={[0, 5]}
                  ticks={[1, 2, 3, 4]}
                  stroke="#64748b"
                />
                <YAxis
                  type="number"
                  dataKey="estresse"
                  name="Nível de Estresse"
                  domain={[0, 10]}
                  stroke="#64748b"
                />
                <Tooltip
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px'
                  }}
                  formatter={(value, name) => {
                    if (name === 'Ano do Curso') return [`${value}º ano`, name];
                    return [value, name];
                  }}
                />
                <Scatter name="Estudantes" data={scatterData} fill="#0f766e" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Citação em Destaque */}
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg shadow-md p-8 border-l-4 border-teal-600">
          <div className="flex items-start">
            <svg className="w-10 h-10 text-teal-500 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <div>
              <p className="text-white text-lg italic mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="text-teal-300 text-sm">— {testimonial.author}</p>
            </div>
          </div>
        </div>

        {/* Rodapé com informações metodológicas */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-slate-800 mb-3">Metodologia da Pesquisa</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600">
            <div>
              <span className="text-slate-800">Período:</span> Março 2026
            </div>
            <div>
              <span className="text-slate-800">Método:</span> Entrevistas Estruturadas
            </div>
            <div>
              <span className="text-slate-800">Amostra:</span> Aleatória Estratificada
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResearchDashboard;
