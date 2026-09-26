# Auditoria de acessibilidade do site Shark UI

**Data:** 2026-09-25  
**Referência técnica:** EN 301 549 v3.2.1 / WCAG 2.1 AA, com verificações adicionais relevantes de WCAG 2.2 AA.  
**Escopo:** site público servido por esta aplicação: página inicial, shell de documentação, páginas MDX, página de temas, previews de templates e previews de componentes.

Esta revisão avaliou o código compartilhado que renderiza o site, os tokens globais e páginas representativas no navegador. A inspeção do navegador incluiu a árvore de acessibilidade; não foi usado leitor de tela. Este relatório não é uma certificação legal do EAA, nem uma auditoria manual exaustiva de cada combinação de componente, estado e viewport.

## Cobertura realizada

- Inspeção no navegador das 141 rotas únicas vinculadas no catálogo de documentação; todas abriram após uma segunda tentativa nas quatro rotas que expiraram inicialmente. A árvore de acessibilidade foi lida em cada rota, no estado inicial renderizado.
- Inspeção adicional da página inicial, `/themes` e dos seis templates Chat, Mail, Music, Tasks, Dashboard e Components, incluindo screenshots e checagens em viewport de 320 CSS px.
- Verificação por teclado do skip link, navegação, seletor de preset e um diálogo. No seletor, foi possível abrir, escolher Marlim e restaurar Default. No diálogo, Escape fecha e devolve foco ao acionador; porém, a abertura deixa o foco no `body` até o próximo Tab.
- Reuso dos cálculos completos dos nove presets nos modos claro e escuro descritos em [theme-presets-audit.md](theme-presets-audit.md).
- Inventário no repositório: 154 páginas MDX, 119 componentes React e 130 diretórios de exemplos. As 141 rotas foram abertas, mas isso não exercita cada exemplo oculto, estado condicional ou fluxo completo de interação.

## Achados

### P1 — Limites de inputs não distinguem suficientemente os controles

Os tokens globais `--border` e `--input` têm contraste aproximado de **1,19–1,25:1** no claro e **1,15–1,24:1** no escuro nos nove presets. Quando a borda é necessária para reconhecer um campo, fica abaixo de 3:1. Como esses tokens são compartilhados, o problema se estende às páginas e previews que usam os campos.

**Critério:** WCAG 1.4.11, Non-text Contrast.  
**Proposta:** manter um token de borda decorativa discreto e criar/ajustar um token de limite de controle com contraste adequado. Conferir o resultado sobre cada superfície real.

Evidência: [globals.css](../../styles/globals.css) · [themes.css](../../styles/themes.css) · [medições dos nove presets](theme-presets-audit.md#contrast-results)

### P1 — Ações do editor de temas têm botões sem nome acessível

Na árvore de acessibilidade de `/themes`, Randomize e View code são expostos como botões sem nome. O botão Reset, ao lado, tem rótulo. Tooltip visual não substitui o nome acessível do controle.

**Critério:** WCAG 4.1.2, Name, Role, Value.  
**Proposta:** incluir nomes acessíveis concisos ou rótulos visíveis e conferir o nome exposto pela árvore de acessibilidade.

Evidência: [theme-selector.tsx](../../app/%28app%29/themes/_components/theme-selector/theme-selector.tsx) · [árvore de acessibilidade de Themes](theme-presets-audit.md#p1--randomize-and-view-code-controls-lack-accessible-names)

### P1 — O template Dashboard também tem um botão de busca sem nome

No template `/templates/dashboard`, a árvore de acessibilidade mostra um botão sem nome na barra lateral. O código mostra que é o botão só com ícone de busca; o botão “Toggle Sidebar” separado tem nome.

**Critério:** WCAG 4.1.2.  
**Proposta:** nomear a ação (“Search”) e verificar os outros botões de ícone na galeria e nos templates.

Evidência: [dashboard-sidebar.tsx](../../app/templates/dashboard/_components/dashboard-sidebar.tsx)

### P1 — O preview “Icon only” do Button publica um botão sem nome

A documentação orienta o consumidor a adicionar `aria-label`, mas o próprio preview renderizado não o inclui. Na página `/docs/components/button`, o botão do preview apareceu sem nome na árvore de acessibilidade.

**Critério:** WCAG 4.1.2.  
**Proposta:** tornar o preview acessível e manter a explicação mostrando como passar o rótulo. Um exemplo que demonstra uma falha deve identificá-la de forma acessível ou apresentar a versão corrigida.

Evidência: [example-icon.tsx](../../registry/react/examples/button/example-icon.tsx) · [button.mdx](../../content/docs/components/button.mdx)

### P1 — Os exemplos básicos de Input e Slider omitem o nome do controle

Na página `/docs/components/input`, o exemplo padrão e alguns exemplos de variação aparecem como campos sem nome na árvore. O placeholder “Enter your message” não funciona como substituto confiável de um rótulo associado. A galeria `/templates/components` inclui também um campo de mensagem sem nome acessível. Na página `/docs/components/slider`, o Slider padrão aparece sem nome acessível. A página Clipboard também expõe campos de URL com valor, mas sem nome acessível na árvore.

**Critério:** WCAG 1.3.1, Info and Relationships, e 4.1.2; para instruções/identificação de campos, também WCAG 3.3.2, Labels or Instructions.  
**Proposta:** usar `Field`/`FieldLabel` ou `aria-label` nos previews isolados. Em exemplos que ensinam composição de campos, demonstrar o label junto do campo por padrão.

Evidência: [example-default.tsx de Input](../../registry/react/examples/input/example-default.tsx) · [ChatCardExample](../../components/examples/chat-card-example.tsx) · [example-default.tsx de Slider](../../registry/react/examples/slider/example-default.tsx) · [example-default.tsx de Clipboard](../../registry/react/examples/clipboard/example-default.tsx)

### P1 — O Slider publica referências de rótulo quebradas

Na rota `/docs/components/slider`, os thumbs expõem `aria-labelledby` apontando para IDs `slider:*:label` inexistentes em vários exemplos. Quando `SliderLabel` é usado dentro de `Field`, o label recebe um ID `field:*:label`, que não coincide com o ID referenciado pelo thumb. A inspeção do DOM encontrou 16 thumbs sem referência válida nessa página. Assim, até exemplos que parecem rotulados visualmente podem ser anunciados sem nome.

**Critério:** WCAG 4.1.2, Name, Role, Value.
**Proposta:** alinhar o ID referenciado pelo thumb com o elemento de rótulo renderizado e garantir que exemplos sem `SliderLabel` não apresentem controles sem nome.

Evidência: [slider.tsx](../../registry/react/components/slider.tsx) · [exemplos de Slider](../../registry/react/examples/slider)

### P1 — Há mais controles sem nome nas galerias de exemplos

Na árvore de acessibilidade, `/docs/components/button` apresentou seis botões sem nome e `/docs/components/button-group` apresentou 12. Também foram encontrados botões sem nome em páginas de Avatar, Circular Progress, Context Menu, Drawer, Float, Item, Progress e Timer. A checagem é dos controles renderizados, não uma inferência baseada apenas na presença de ícones no código.

**Critério:** WCAG 4.1.2.
**Proposta:** nomear botões de ícone e ações de demonstração; para controles decorativos ou não interativos, evitar expô-los como botões. Repetir a verificação nas variantes de cada galeria após correção.

Evidência: árvores de acessibilidade das rotas `/docs/components/button`, `/docs/components/button-group`, `/docs/components/avatar`, `/docs/components/circular-progress`, `/docs/components/context-menu`, `/docs/components/drawer`, `/docs/components/float`, `/docs/components/item`, `/docs/components/progress` e `/docs/components/timer`.

### P1 — Os sliders de progresso e volume do template Music não têm nome

Na árvore de acessibilidade de `/templates/music`, os dois sliders interativos são anunciados apenas com seus valores, sem uma descrição que identifique sua função. O slider de progresso permite alterar a posição da faixa; o vertical altera volume.

**Critério:** WCAG 4.1.2.  
**Proposta:** associar nomes como “Position in track” e “Volume” usando as propriedades de nome aceitas pelo Slider e confirmar a exposição correta no navegador.

Evidência: [music-transport.tsx](../../app/templates/music/_components/music-transport.tsx) · [music-player-extras.tsx](../../app/templates/music/_components/music-player-extras.tsx)

### P2 — O foco visual precisa de validação site-wide

O guia de estilo define um padrão comum com `border-ring/64` e `ring-ring/24`. O foco foi visualmente observado numa amostra da página de temas em análise anterior, mas não foi medido em todos os componentes, combinações de tema, fundos, bordas recortadas e estados. A opacidade do anel pode reduzir o contraste final.

**Critérios:** WCAG 2.4.7, Focus Visible; WCAG 1.4.11; verificações de WCAG 2.2 2.4.11, Focus Not Obscured (Minimum), e 2.5.8, Target Size (Minimum).  
**Proposta:** percorrer com teclado os controles de navegação, busca, diálogos, campos, seletores, tabs, sliders e previews nos modos claro/escuro. Medir foco contra as cores compostas adjacentes e verificar recorte/oclusão.

Na amostra de navegador, o primeiro Tab em páginas de documentação chega ao skip link e o foco no link “Docs” ficou visível. O seletor de preset foi operável por teclado. Isso confirma esses pontos isolados, mas não valida todos os controles nem contraste/oclusão em cada tema.

**Próxima ação:** percorrer componentes interativos representativos nos dois temas e verificar indicador composto, recorte e oclusão; testar também cores forçadas e zoom de 400%.

Evidência: [CODE_STYLE.md](../../CODE_STYLE.md) · [relatório dos presets](theme-presets-audit.md#p2--focus-indicator-needs-full-keyboard-state-verification)

### P2 — O diálogo não move o foco para dentro ao abrir

Ao abrir pelo teclado o diálogo de exemplo em `/docs/components/dialog`, `document.activeElement` permaneceu no `body`. Um Tab leva ao primeiro campo; a sequência fica contida no diálogo, Escape fecha e restaura o foco ao botão acionador. A contenção e restauração funcionaram, mas a posição inicial pode desorientar usuários de teclado e tecnologia assistiva.

**Critério relacionado:** WCAG 2.4.3, Focus Order; confirmar impacto com leitor de tela e padrão de diálogo adotado.
**Proposta:** mover foco para um alvo apropriado dentro do diálogo no momento da abertura e validar abertura, ciclo de Tab, Escape e retorno ao acionador.

Evidência: rota `/docs/components/dialog`, diálogo “My Project”, verificação via teclado no navegador.

### P1 — Reflow insuficiente nos previews Mail e Chat a 320 CSS px

Em `/templates/mail`, a lista de mensagens, navegação e painel de conteúdo comprimem-se em colunas extremamente estreitas; os alvos da lista chegam a cerca de 10–14 CSS px de largura e o texto quebra quase caractere por caractere. Em `/templates/chat`, os cartões/etapas ficam em colunas tão estreitas que rótulos também quebram caractere por caractere. Embora o documento não tenha overflow horizontal, as capturas mostram perda prática de legibilidade e uso nessa largura.

**Critério:** WCAG 1.4.10, Reflow.
**Proposta:** em telas estreitas, reorganizar painéis em fluxo vertical, permitir recolher áreas secundárias e manter cada região principal utilizável sem colunas comprimidas.

Evidência: inspeção visual do navegador em viewport 320 × 800 CSS px nas rotas `/templates/mail` e `/templates/chat`.

### P2 — Hierarquia de títulos dos templates precisa de uma decisão explícita

As páginas standalone de Chat, Mail e Music apresentam títulos de seção de nível 2 na árvore de acessibilidade e não expõem um título de nível 1. Os títulos de página no metadata não substituem um título estrutural no conteúdo. A estrutura não foi considerada uma falha automática, mas piora a orientação por navegação de títulos.

**Proposta:** incluir um título principal apropriado para cada preview, visível ou visualmente oculto conforme a composição, e revisar a ordem dos headings nos templates restantes.

Evidência: [Chat](../../app/templates/chat/page.tsx) · [Mail](../../app/templates/mail/page.tsx) · [Music](../../app/templates/music/page.tsx)

### P2 — Gráficos personalizados exigem uma alternativa além do desenho

A documentação do Chart instrui a passar `accessibilityLayer`, e os exemplos Chart examinados incluem essa propriedade. Isso dá suporte à navegação e à leitura do gráfico, mas não garante por si só que o conjunto de dados seja compreensível sem percepção visual em todo uso. O contrato atual permite cores customizadas e composição arbitrária.

**Critério:** WCAG 1.1.1, Non-text Content, e 1.3.1; WCAG 1.4.11 para marcas necessárias.  
**Proposta:** orientar consumidores a fornecer título/contexto e alternativa textual ou tabular apropriada quando o gráfico comunica dados essenciais; verificar contraste entre marcas e fundo e evitar codificar série somente por cor.

Evidência: [documentação de Chart](../../content/docs/components/chart.mdx) · [componente Chart](../../registry/react/components/chart.tsx)

## Aspectos confirmados como positivos

- O shell principal expõe um skip link, navegação, busca com nome e alternador de tema identificado na árvore de acessibilidade.
- No catálogo de componentes, o primeiro Tab alcança o skip link antes da navegação global.
- No Calendar, navegação de mês e dias são expostos com nomes de data/ação, e a data selecionada tem estado anunciado na árvore de acessibilidade.
- A página inicial tem um único H1 e suas ações principais são nomeadas.
- O catálogo de componentes e a navegação lateral de documentação expõem links identificados por texto.
- Nos templates Tasks e Mail inspecionados, ações da tabela e da mensagem expõem nomes úteis; o template Chat identifica o campo de mensagem e ações principais.
- As tabs do preview de temas e vários controles dos templates Mail e Chat expõem nome/estado na árvore.
- Os exemplos Chart inspecionados incluem `accessibilityLayer`; a documentação alerta consumidores para seu uso.
- Os nove presets passam nos pares calculados de texto de corpo e foreground de botão primário em claro/escuro, conforme a ressalva de escopo em [theme-presets-audit.md](theme-presets-audit.md).

## Itens restantes para uma avaliação de conformidade mais completa

1. Corrigir e revalidar os nomes acessíveis e a associação de labels nos exemplos e controles listados acima.
2. Corrigir o reflow de Mail e Chat em telas estreitas; verificar zoom de 400% nas rotas e fluxos representativos.
3. Medir foco composto nos dois temas e verificar oclusão, modo de cores forçadas e tamanho/espacamento de alvos em amostras mais amplas.
4. Fazer avaliação com leitor de tela (ao menos VoiceOver ou NVDA, conforme ambiente) nos fluxos de formulário, navegação, overlay, dados/gráficos e componentes de IA; conferir anúncios dinâmicos.
5. Executar uma ferramenta automatizada de acessibilidade sobre rotas representativas e triagem manual dos resultados; ferramenta automatizada não substitui avaliação manual.
6. Revalidar em produção e registrar ambiente, versões, estados e evidências após as correções.

## Limitações

Não foram executados axe/Lighthouse nem leitor de tela. A árvore de acessibilidade foi examinada nas 141 rotas documentadas e nos estados iniciais apresentados, mas não em todos os estados ocultos/condicionais de cada exemplo. Houve inspeção visual de reflow a 320 CSS px em páginas representativas; zoom de 400%, cores forçadas e anúncios com leitor de tela continuam pendentes. Os achados confirmados e essa cobertura limitada estão registrados aqui; a auditoria não declara que cada combinação de página e estado foi validada.

Avaliar o site não equivale a certificar conformidade do EAA. O resultado não substitui revisão de critérios aplicáveis, tecnologia assistiva, ambiente de produção e avaliação jurídica.
