# ● Análise de Consumo de Energia (2020–2024)

Projeto desenvolvido para a disciplina **SERS – Soluções em Energias Renováveis e Sustentáveis**, no curso de **Ciência da Computação**.

Este repositório contém um **Jupyter Notebook** que analisa dados reais de demanda energética entre os anos de **2020 e 2024**, identificando padrões, sazonalidade, picos de consumo e oportunidades de economia com automação — conectando diretamente com sustentabilidade e o futuro do trabalho.


- **dados/**: contém todos os arquivos CSV utilizados na análise.  
- **analise_consumo_2020_2024.ipynb**: notebook completo com a análise, gráficos e simulação de economia energética.

---

## ● Objetivo do Projeto

O objetivo é analisar o consumo energético em alta granularidade (intervalos de 30 minutos) ao longo de cinco anos, identificando:

- padrões anuais, mensais e horários,  
- diferenças entre dias úteis e finais de semana,  
- picos de demanda,  
- oportunidades de redução de consumo via automação,  
- impacto financeiro e ambiental dessa redução.

---

## ● Dados Utilizados

Os arquivos CSV possuem medições históricas de demanda elétrica com resolução de **30 minutos**, incluindo colunas como:

- `settlement_date` ou `date`
- `settlement_period` ou `period`
- `england_wales_demand` ou variações contendo “demand”

A energia consumida por intervalo é calculada como: energy_MWh = demand_MW × 0.5


O notebook identifica automaticamente as colunas corretas, mesmo que o nome varie de um ano para outro.

---

## ● Análises Realizadas

###  Energia total anual  
Comparação do consumo total de 2020 a 2024.

###  Energia mensal por ano  
Identificação de sazonalidade e meses críticos.

###  Perfil diário por hora  
Média da demanda para cada hora do dia em cada ano.

###  Dias úteis × finais de semana  
Comparação direta entre padrões de trabalho e descanso.

###  Top 5 picos de demanda em cada ano  
Identifica momentos críticos da rede.

---

## ● Simulação de Automação

Foi realizada uma simulação aplicando **15% de redução no consumo fora do horário comercial (08h–17h)**.

Para cada ano, o notebook calcula:

| Métrica | Unidade |
|--------|---------|
| Consumo “off-hours” | MWh |
| Economia energética potencial | MWh |
| Economia financeira | R$ |
| Redução de CO₂ | toneladas |

Parâmetros ajustáveis:

- `tarifa` (R$/MWh)  
- `fator_CO2` (ton CO₂ / MWh)  
- `reducao` (percentual desejado)

---

## ● Como Executar o Notebook Via Google Colab (recomendado)

1. Faça upload do notebook `GS_SERS.ipynb`.  
2. Faça upload da pasta `dados/` com todos os CSVs.  
3. Execute as células sequencialmente.

## ● Conexão com Sustentabilidade e Futuro do Trabalho

Este projeto demonstra como:

dados, automação, eficiência energética, modelagem e tecnologias inteligentes

podem ser usados para criar ambientes de trabalho mais:

sustentáveis, eficientes, econômicos e ecologicamente responsáveis.

A análise reforça que decisões baseadas em dados e automação são parte essencial do Futuro do Trabalho.

## ● Conclusão

A análise de cinco anos de consumo energético permitiu identificar:

tendências robustas, picos previsíveis, diferenças sazonais, impacto de dias úteis vs finais de semana, e grande potencial de economia energética com automação simples.

O notebook pode servir como base para:

estudos de eficiência, integração com IoT, previsões de demanda e políticas energéticas sustentáveis.
