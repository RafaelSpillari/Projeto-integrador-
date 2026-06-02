import sys
import os
import pandas as pd
import pyreadstat

# ══════════════════════════════════════════════════════════════════════════════
# CONFIGURAÇÃO
# ══════════════════════════════════════════════════════════════════════════════

INPUT_FILE      = "Procrastination_survey_data_Jan2022_24Aug2024.sav"
OUTPUT_CSV      = "procrastination_clean.csv"
OUTPUT_EXCEL    = "procrastination_clean.xlsx"
OUTPUT_CODEBOOK = "codebook.csv"

# Colunas REMOVIDAS do dataset final e o motivo de cada uma:
COLUNAS_REMOVIDAS = {
    "condition",          # Redundante com as flags individuais de condição.
    "dysclcula",          # Constante: valor "No" em todos os 155 registros.
    "other_condition",    # Campo aberto preenchido por apenas 9% dos respondentes.
    "what_should_do",     # Meta-cognição/Autorregulação (fora do foco de fuga).
    "plan_what_should_do",# Meta-cognição/Autorregulação.
    "brand_analysis",     # Específica de design industrial britânico.
    "ergonomic_evaluation",# Específica de design industrial britânico.
    "technology_review",  # Específica de design industrial britânico.
}

# Colunas RENOMEADAS para organização semântica em português.
COLUNAS_RENOMEADAS = {
    "gender":                             "genero",
    "age":                                "faixa_etaria",
    "no_condition":                       "sem_condicao_saude",
    "dyslexia":                           "dislexia",
    "dyspraxia":                          "dispraxia",
    "adhd":                               "tdah",
    "anxiety":                            "ansiedade",
    "depression":                         "depressao",
    "other":                              "outra_condicao",
    "current_role":                       "papel_atual",
    "years_experience":                   "anos_experiencia",
    "literature_review":                  "tarefa_revisao_literatura",
    "ideation":                           "tarefa_ideacao",
    "design_decision_making":             "tarefa_decisao_design",
    "digital_prototyping":                "tarefa_prototipagem_digital",
    "physical_prototyping":               "tarefa_prototipagem_fisica",
    "report_writing":                     "tarefa_escrita_relatorio",
    "completing_documents":               "tarefa_completar_documentos",
    "do_nothing":                         "fuga_nao_faz_nada",
    "bed":                                "fuga_dormir",
    "tv_film":                            "fuga_tv_filmes",
    "eat_drink":                          "fuga_comer_beber",
    "talk_friends":                       "fuga_conversar_amigos",
    "socialise":                          "fuga_socializar",
    "walk_exercise":                      "fuga_caminhar_exercitar",
    "tidy_room":                          "fuga_arrumar_quarto",
    "other_less_important_task":          "fuga_outra_tarefa_menos_importante",
    "distracted_tv_friends_social_media": "gatilho_distracao_tv_amigos_redes",
    "distracted_new_projects":            "gatilho_distracao_novos_projetos",
    "importance_of_task":                 "gatilho_importancia_tarefa",
    "impending_deadline":                 "gatilho_prazo_iminente",
    "too_many_tasks":                     "gatilho_muitas_tarefas",
    "dislike_task":                       "gatilho_nao_gosta_tarefa",
    "boring_no_interest":                 "gatilho_tedio_sem_interesse",
    "do_not_understand_why":              "gatilho_nao_entende_motivo",
    "task_difficult_slow":                "gatilho_tarefa_dificil_lenta",
    "no_confidence_can_complete_task":    "gatilho_falta_confianca",
    "procrastination_score":              "score_procrastinacao",
}

# Dicionários de mapeamento para a TRADUÇÃO e LIMPEZA das respostas textuais
DICIONARIOS_TRADUCAO = {
    "genero": {
        "Female": "Feminino",
        "Male": "Masculino",
        "Non gender specific": "Não-binário/Outro"
    },
    "papel_atual": {
        "Student": "Estudante",
        "Staff": "Pessoal Acadêmico/Técnico"
    },
    "sem_condicao_saude": {"Yes": "Sim", "No": "Não"},
    "dislexia": {"Yes": "Sim", "No": "Não"},
    "dispraxia": {"Yes": "Sim", "No": "Não"},
    "tdah": {"Yes": "Sim", "No": "Não"},
    "ansiedade": {"Yes": "Sim", "No": "Não"},
    "depressao": {"Yes": "Sim", "No": "Não"},
    "outra_condicao": {"Yes": "Sim", "No": "Não"}
}

# ══════════════════════════════════════════════════════════════════════════════
# FUNÇÕES DO ETL
# ══════════════════════════════════════════════════════════════════════════════

def load_sav(filepath: str):
    """ ETAPA 1 — EXTRAÇÃO (Extract) """
    print(f"\n[1/5] Lendo arquivo SPSS: {filepath}")
    if not os.path.exists(filepath):
        print(f"  ERRO: arquivo '{filepath}' não encontrado.")
        sys.exit(1)
    
    df, meta = pyreadstat.read_sav(filepath, dates_as_pandas_datetime=True)
    print(f"  Carregados: {len(df)} respondentes | {len(df.columns)} variáveis")
    return df, meta


def apply_value_labels(df: pd.DataFrame, meta) -> pd.DataFrame:
    """ ETAPA 2 — APLICAÇÃO DE RÓTULOS ORIGINAIS (Transform — parte 1) """
    print("[2/5] Aplicando rótulos originais do SPSS...")
    colunas_rotuladas = 0
    for nome_col, mapa_rotulos in meta.variable_value_labels.items():
        if nome_col not in df.columns or not mapa_rotulos:
            continue
        df[nome_col] = df[nome_col].map(mapa_rotulos).fillna(df[nome_col])
        colunas_rotuladas += 1
    print(f"  Rótulos aplicados em {colunas_rotuladas} colunas.")
    return df


def build_codebook(meta) -> pd.DataFrame:
    """ ETAPA 3 — GERAÇÃO DO CODEBOOK (Transform — parte 2) """
    print("[3/5] Gerando codebook de referência...")
    linhas = []
    for col in meta.column_names:
        idx = meta.column_names.index(col)
        rotulo = meta.column_labels[idx] if meta.column_labels else ""
        mapa_valores = meta.variable_value_labels.get(col, {})
        linhas.append({
            "variavel":          col,
            "rotulo":            rotulo,
            "valores_possiveis": str(mapa_valores) if mapa_valores else "numérico/texto livre",
        })
    return pd.DataFrame(linhas)


def clean_and_curate(df: pd.DataFrame) -> pd.DataFrame:
    """ ETAPA 4 — LIMPEZA, CURADORIA E TRADUÇÃO DE TEXTO (Transform — parte 3) """
    print("[4/5] Executando limpeza, curadoria e tradução de dados textuais...")
    
    # ── 4a. Limpeza básica estrutural ──
    df = df.dropna(how="all")
    df = df.dropna(axis=1, how="all")
    df.columns = (
        df.columns.str.strip().str.lower()
        .str.replace(r"[\s\-\/]+", "_", regex=True)
        .str.replace(r"[^\w]", "", regex=True)
    )

    # ── 4b. Remoção de colunas desnecessárias (Curadoria) ──
    nomes_para_remover = {c.strip().lower().replace(" ", "_") for c in COLUNAS_REMOVIDAS}
    existentes = [c for c in nomes_para_remover if c in df.columns]
    df = df.drop(columns=existentes)

    # ── 4c. Renomeação para português ──
    mapa_normalizado = {k.strip().lower().replace(" ", "_"): v for k, v in COLUNAS_RENOMEADAS.items()}
    mapa_aplicavel = {k: v for k, v in mapa_normalizado.items() if k in df.columns}
    df = df.rename(columns=mapa_aplicavel)

    # ── 4d. NOVO: Tratamento de Conteúdo, Tradução e Filtros de Qualidade ──
    # 1. Tradução explícita de categorias textuais mapeadas
    for coluna, mapa_traducao in DICIONARIOS_TRADUCAO.items():
        if coluna in df.columns:
            df[coluna] = df[coluna].astype(str).str.strip()
            df[coluna] = df[coluna].replace(mapa_traducao)
    
    # 2. Tratamento genérico de strings para colunas de frequência/gatilhos restantes
    # Substitui termos em inglês comuns que restaram nas escalas ordinais do SPSS
    substituicoes_gerais = {
        "Never": "Nunca", "Rarely": "Raramente", "Sometimes": "Às vezes", 
        "Often": "Frequentemente", "Always": "Sempre",
        "Not at all": "De forma nenhuma", "Slightly": "Pouco", 
        "Moderately": "Moderadamente", "Very": "Muito", "Extremely": "Extremamente",
        "nan": None, "None": None
    }
    
    for col in df.columns:
        if df[col].dtype == 'object':
            df[col] = df[col].astype(str).str.strip().replace(substituicoes_gerais)
            # Remove sufixos indesejados como ".0" decorrentes de conversões numéricas antigas
            df[col] = df[col].str.replace(r"\.0$", "", regex=True)

    # 3. Tratamento de Qualidade para o Dashboard: Filtragem de Registros Incompletos
    # Remove respondentes que não possuem o score final calculado (essencial para não distorcer gráficos)
    df = df.dropna(subset=['score_procrastinacao'])

    print(f"  Filtro de integridade: Mantidos apenas registros com score de procrastinação válido.")
    print(f"  Dataset final higienizado: {len(df)} linhas | {len(df.columns)} colunas.")
    return df


def export(df: pd.DataFrame, codebook: pd.DataFrame):
    """ ETAPA 5 — EXPORTAÇÃO (Load) """
    print(f"\n[5/5] Exportando arquivos de saída...")
    
    # CSV estruturado para Power BI (UTF-8 com BOM para preservar acentuações no Windows)
    df.to_csv(OUTPUT_CSV, index=False, encoding="utf-8-sig")
    
    # Planilha Excel unificada com largura automatizada
    with pd.ExcelWriter(OUTPUT_EXCEL, engine="openpyxl") as writer:
        df.to_excel(writer, sheet_name="Dados_Tratados", index=False)
        codebook.to_excel(writer, sheet_name="Codebook_Original", index=False)
        
        for nome_aba in writer.sheets:
            ws = writer.sheets[nome_aba]
            for celulas_col in ws.columns:
                largura_max = max(len(str(celula.value)) if celula.value else 0 for celula in celulas_col)
                ws.column_dimensions[celulas_col[0].column_letter].width = min(largura_max + 4, 50)

    codebook.to_csv(OUTPUT_CODEBOOK, index=False, encoding="utf-8-sig")
    print("  Todos os arquivos gerados com sucesso!")


def summary(df: pd.DataFrame):
    print("\n" + "=" * 60)
    print("  VALIDAÇÃO DOS DADOS HIGIENIZADOS")
    print("=" * 60)
    print(f"  Respondentes válidos: {len(df)} | Variáveis: {len(df.columns)}")
    print(f"  Exemplos de valores únicos traduzidos em 'genero': {df['genero'].unique()}")
    print(f"  Exemplos de valores únicos em 'sem_condicao_saude': {df['sem_condicao_saude'].unique()}")
    print("=" * 60 + "\n")


if __name__ == "__main__":
    if len(sys.argv) > 1:
        INPUT_FILE = sys.argv[1]

    df, meta  = load_sav(INPUT_FILE)
    df        = apply_value_labels(df, meta)
    codebook  = build_codebook(meta)
    df_final  = clean_and_curate(df)
    summary(df_final)
    export(df_final, codebook)
    print("Pipeline ETL FlowUP executado com sucesso!\n")