# Auditoria de acessibilidade do site Shark UI

**Auditoria-base:** 2026-09-25 · **Relatório atualizado:** 2026-09-26

**Referência técnica:** EN 301 549 v3.2.1 / WCAG 2.1 AA, com verificações adicionais relevantes de WCAG 2.2 AA.

**Escopo:** site público servido por esta aplicação: página inicial, shell de documentação, páginas MDX, página de temas, previews de templates e previews de componentes.

Esta revisão avaliou o código compartilhado que renderiza o site, os tokens globais e páginas representativas no navegador. A inspeção incluiu a árvore de acessibilidade e varredura automatizada axe em execução local; não foi possível validar saída falada de leitor de tela. Este relatório não é uma certificação legal do EAA, nem uma auditoria manual exaustiva de cada combinação de componente, estado e viewport.

## Atualização após as correções P1/P2

As correções registradas abaixo foram aplicadas ao código, mas a validação foi amostral e varia por achado. Onde há evidência de verificação em navegador ou DOM, ela está indicada no status; correção sem essa evidência não deve ser interpretada como validação completa. Nesta rodada foram feitas checagens pontuais de teclado, viewport de 320 CSS px em 13 rotas, triagem de alvos, varredura axe e retentativas nas rotas que expiraram (detalhes e limitações abaixo). Zoom real de 400%, VoiceOver com saída falada e cores forçadas em Windows/Edge não puderam ser verificados neste ambiente. Os tokens de cor permanecem nos valores definidos nesta rodada; não houve nova auditoria nem alteração de cores. “Corrigido” neste relatório não significa certificação.

## Cobertura realizada

- Inspeção no navegador das 141 rotas únicas vinculadas no catálogo de documentação; todas abriram após uma segunda tentativa nas quatro rotas que expiraram inicialmente. A árvore de acessibilidade foi lida em cada rota, no estado inicial renderizado.
- Inspeção adicional da página inicial, `/themes` e templates representativos. Nesta rodada, checagem a 320 × 800 CSS px em 13 rotas; o documento não teve overflow horizontal nas rotas verificadas. O seletor `/themes` respondeu sem overflow, mas a captura visual disponível não permitiu avaliar a legibilidade/utilização completa da página.
- Verificação pontual por teclado no navegador in-app: Tab alcançou primeiro o skip link e depois navegação, busca, ações e tabs; setas mudaram a tab Preview → Tasks. ⌘K abriu a paleta de comandos com foco no campo; Escape fechou e restaurou foco ao acionador. No diálogo “My Project”, o foco inicial foi ao campo Name, Tab percorreu controles do diálogo, Escape fechou e devolveu foco ao botão Open. Isso não cobre o percurso completo do site, múltiplos temas, estados, recorte ou oclusão do foco.
- Navegador/ambiente: Chrome headless via Playwright para axe e viewports; CUA no navegador in-app para teclado. A tentativa de controle de aplicativos nativos Firefox/Safari foi bloqueada por permissões do ambiente; Safari não estava disponível na lista de apps. Logo, não houve teste de saída do VoiceOver. Tentativas de atalho de zoom não confirmaram zoom real de 400%.
- Varredura axe-core temporária (pacotes instalados em `/tmp`, sem alterar manifests ou lockfile) nas rotas atuais do sitemap: 156 URLs únicas (154 páginas documentadas, `/` e `/themes`), estado inicial renderizado, tags WCAG 2.0/2.1/2.2 A/AA e best-practice. Veja resultados e limitações na seção “Automação axe” abaixo.
- Varredura exploratória de dimensões de alvos em 12 rotas carregadas a 320 CSS px. Os elementos visualmente ocultos/inertes foram excluídos da triagem manual. Foram observados alvos candidatos de 16 × 16 CSS px nos checkboxes de Tasks e um thumb de 18 × 18 px no seletor de cor; a avaliação de espaçamento e exceções de 2.5.8 ainda requer inspeção manual, então esses números não são classificados isoladamente como falha confirmada.
- Reuso dos cálculos completos dos nove presets nos modos claro e escuro descritos em [theme-presets-audit.md](theme-presets-audit.md).
- Inventário no repositório: 154 páginas MDX, 119 componentes React e 130 diretórios de exemplos. As 141 rotas foram abertas, mas isso não exercita cada exemplo oculto, estado condicional ou fluxo completo de interação.

## Achados

### P1 — Limites de inputs não distinguem suficientemente os controles

Os tokens globais `--border` e `--input` foram ajustados para aumentar a separação sem escurecer excessivamente as bordas: no claro, **1,24–1,25:1** para `--border` e **1,30:1** para `--input`; no escuro, **1,22–1,24:1** e **1,29–1,32:1**, respectivamente, nos nove presets. Quando a borda é necessária para reconhecer um campo, os valores continuam abaixo de 3:1. Como esses tokens são compartilhados, o achado afeta páginas e previews que dependem deles para identificar controles.

**Critério:** WCAG 1.4.11, Non-text Contrast.  
**Decisão visual:** aumentar as receitas originais em 2 pontos percentuais, sem declarar resolvido o requisito de 3:1. Para atender WCAG 1.4.11 onde a borda identifica o controle, será necessário um tratamento de contorno mais distinto ou outro indicador visual perceptível.

Evidência: [globals.css](../../styles/globals.css) · [themes.css](../../styles/themes.css) · [medições dos nove presets](theme-presets-audit.md#contrast-results)

**Status:** decisão visual mantida: as receitas originais foram aumentadas em 2 pontos percentuais (claro: 10%/12%; escuro: 8%/10%). As medições registradas correspondem a esses valores; não foi feita nova auditoria visual. O achado WCAG 1.4.11 permanece aberto onde esses tokens são a única identificação do controle.

### P1 — Ações do editor de temas têm botões sem nome acessível

Na árvore de acessibilidade de `/themes`, Randomize e View code são expostos como botões sem nome. O botão Reset, ao lado, tem rótulo. Tooltip visual não substitui o nome acessível do controle.

**Critério:** WCAG 4.1.2, Name, Role, Value.  
**Proposta:** incluir nomes acessíveis concisos ou rótulos visíveis e conferir o nome exposto pela árvore de acessibilidade.

Evidência: [theme-selector.tsx](../../app/%28app%29/themes/_components/theme-selector/theme-selector.tsx) · [árvore de acessibilidade de Themes](theme-presets-audit.md#p1--randomize-and-view-code-controls-lack-accessible-names)

**Status:** corrigido no código e confirmado na árvore de acessibilidade de `/themes` como “Randomize theme” e “View theme code”. Não foi repetido um teste de leitor de tela.

### P1 — O template Dashboard também tem um botão de busca sem nome

No template `/templates/dashboard`, a árvore de acessibilidade mostra um botão sem nome na barra lateral. O código mostra que é o botão só com ícone de busca; o botão “Toggle Sidebar” separado tem nome.

**Critério:** WCAG 4.1.2.  
**Proposta:** nomear a ação (“Search”) e verificar os outros botões de ícone na galeria e nos templates.

Evidência: [dashboard-sidebar.tsx](../../app/templates/dashboard/_components/dashboard-sidebar.tsx)

**Status:** corrigido no código; a auditoria de rota registrou o nome acessível. Não há uma varredura automatizada de todas as variantes dos templates.

### P1 — O preview “Icon only” do Button publica um botão sem nome

A documentação orienta o consumidor a adicionar `aria-label`, mas o próprio preview renderizado não o inclui. Na página `/docs/components/button`, o botão do preview apareceu sem nome na árvore de acessibilidade.

**Critério:** WCAG 4.1.2.  
**Proposta:** tornar o preview acessível e manter a explicação mostrando como passar o rótulo. Um exemplo que demonstra uma falha deve identificá-la de forma acessível ou apresentar a versão corrigida.

Evidência: [example-icon.tsx](../../registry/react/examples/button/example-icon.tsx) · [button.mdx](../../content/docs/components/button.mdx)

**Status:** corrigido. A árvore de Button confirmou os rótulos “Add” e “Add to favorites”.

### P1 — Os exemplos básicos de Input e Slider omitem o nome do controle

Na página `/docs/components/input`, o exemplo padrão e alguns exemplos de variação aparecem como campos sem nome na árvore. O placeholder “Enter your message” não funciona como substituto confiável de um rótulo associado. A galeria `/templates/components` inclui também um campo de mensagem sem nome acessível. Na página `/docs/components/slider`, o Slider padrão aparece sem nome acessível. A página Clipboard também expõe campos de URL com valor, mas sem nome acessível na árvore.

**Critério:** WCAG 1.3.1, Info and Relationships, e 4.1.2; para instruções/identificação de campos, também WCAG 3.3.2, Labels or Instructions.  
**Proposta:** usar `Field`/`FieldLabel` ou `aria-label` nos previews isolados. Em exemplos que ensinam composição de campos, demonstrar o label junto do campo por padrão.

Evidência: [example-default.tsx de Input](../../registry/react/examples/input/example-default.tsx) · [ChatCardExample](../../components/examples/chat-card-example.tsx) · [example-default.tsx de Slider](../../registry/react/examples/slider/example-default.tsx) · [example-default.tsx de Clipboard](../../registry/react/examples/clipboard/example-default.tsx)

**Status:** corrigido nos previews apontados; exemplos de Input, Clipboard e Chat agora têm rótulo visível ou nome acessível. A confirmação de navegador foi amostral, não uma verificação de todos os estados.

### P1 — O Slider publica referências de rótulo quebradas

Na rota `/docs/components/slider`, os thumbs expõem `aria-labelledby` apontando para IDs `slider:*:label` inexistentes em vários exemplos. Quando `SliderLabel` é usado dentro de `Field`, o label recebe um ID `field:*:label`, que não coincide com o ID referenciado pelo thumb. A inspeção do DOM encontrou 16 thumbs sem referência válida nessa página. Assim, até exemplos que parecem rotulados visualmente podem ser anunciados sem nome.

**Critério:** WCAG 4.1.2, Name, Role, Value.
**Proposta:** alinhar o ID referenciado pelo thumb com o elemento de rótulo renderizado e garantir que exemplos sem `SliderLabel` não apresentem controles sem nome.

Evidência: [slider.tsx](../../registry/react/components/slider.tsx) · [exemplos de Slider](../../registry/react/examples/slider)

**Status:** corrigido. A inspeção DOM de `/docs/components/slider` encontrou 20 thumbs e todos os `aria-labelledby` referenciam elementos existentes com texto, inclusive nos ranges e no exemplo RTL.

### P1 — Há mais controles sem nome nas galerias de exemplos

Na árvore de acessibilidade, `/docs/components/button` apresentou seis botões sem nome e `/docs/components/button-group` apresentou 12. Também foram encontrados botões sem nome em páginas de Avatar, Circular Progress, Context Menu, Drawer, Float, Item, Progress e Timer. A checagem é dos controles renderizados, não uma inferência baseada apenas na presença de ícones no código.

**Critério:** WCAG 4.1.2.
**Proposta:** nomear botões de ícone e ações de demonstração; para controles decorativos ou não interativos, evitar expô-los como botões. Repetir a verificação nas variantes de cada galeria após correção.

Evidência: árvores de acessibilidade das rotas `/docs/components/button`, `/docs/components/button-group`, `/docs/components/avatar`, `/docs/components/circular-progress`, `/docs/components/context-menu`, `/docs/components/drawer`, `/docs/components/float`, `/docs/components/item`, `/docs/components/progress` e `/docs/components/timer`.

**Status:** nomes adicionados aos controles identificados e às galerias correspondentes. Button e Input Group foram reabertos no navegador e os controles observados expõem nomes. A varredura de todos os estados dos 130 diretórios de exemplos permanece pendente; por isso, esta correção é parcial em relação à cobertura total.

### P1 — Os sliders de progresso e volume do template Music não têm nome

Na árvore de acessibilidade de `/templates/music`, os dois sliders interativos são anunciados apenas com seus valores, sem uma descrição que identifique sua função. O slider de progresso permite alterar a posição da faixa; o vertical altera volume.

**Critério:** WCAG 4.1.2.  
**Proposta:** associar nomes como “Position in track” e “Volume” usando as propriedades de nome aceitas pelo Slider e confirmar a exposição correta no navegador.

Evidência: [music-transport.tsx](../../app/templates/music/_components/music-transport.tsx) · [music-player-extras.tsx](../../app/templates/music/_components/music-player-extras.tsx)

**Status:** nomes explícitos “Position in track” e “Volume” foram adicionados e confirmados na árvore de `/templates/music`; o slider “Volume” foi exposto ao abrir o controle de mute no layout desktop.

### P2 — O foco visual precisa de validação site-wide

O guia de estilo define um padrão comum com `border-ring/64` e `ring-ring/24`. O foco foi visualmente observado numa amostra da página de temas em análise anterior, mas não foi medido em todos os componentes, combinações de tema, fundos, bordas recortadas e estados. A opacidade do anel pode reduzir o contraste final.

**Critérios:** WCAG 2.4.7, Focus Visible; WCAG 1.4.11; verificações de WCAG 2.2 2.4.11, Focus Not Obscured (Minimum), e 2.5.8, Target Size (Minimum).  
**Proposta:** percorrer com teclado os controles de navegação, busca, diálogos, campos, seletores, tabs, sliders e previews nos modos claro/escuro. Medir foco contra as cores compostas adjacentes e verificar recorte/oclusão.

Na amostra de navegador, o primeiro Tab em páginas de documentação chega ao skip link e o foco no link “Docs” ficou visível. O seletor de preset foi operável por teclado. Isso confirma esses pontos isolados, mas não valida todos os controles nem contraste/oclusão em cada tema.

Evidência: [CODE_STYLE.md](../../CODE_STYLE.md) · [relatório dos presets](theme-presets-audit.md#p2--focus-indicator-needs-full-keyboard-state-verification)

**Status:** a opacidade do anel está em 24%, conforme o padrão visual mantido. Skip link, seletor de preset e um diálogo tiveram verificações pontuais de teclado; contraste composto, percurso completo, recorte e oclusão em todos os componentes/temas não foram verificados de forma abrangente. Cores forçadas e zoom de 400% também permanecem pendentes.

### P2 — O diálogo não move o foco para dentro ao abrir

Ao abrir pelo teclado o diálogo de exemplo em `/docs/components/dialog`, `document.activeElement` permaneceu no `body`. Um Tab leva ao primeiro campo; a sequência fica contida no diálogo, Escape fecha e restaura o foco ao botão acionador. A contenção e restauração funcionaram, mas a posição inicial pode desorientar usuários de teclado e tecnologia assistiva.

**Critério relacionado:** WCAG 2.4.3, Focus Order; confirmar impacto com leitor de tela e padrão de diálogo adotado.
**Proposta:** mover foco para um alvo apropriado dentro do diálogo no momento da abertura e validar abertura, ciclo de Tab, Escape e retorno ao acionador.

Evidência: rota `/docs/components/dialog`, diálogo “My Project”, verificação via teclado no navegador.

**Status:** corrigido no exemplo padrão com `initialFocusEl`; o navegador confirmou foco em “My Project”, Escape para fechar e retorno ao acionador “Open”.

### P1 — Reflow insuficiente nos previews Mail e Chat a 320 CSS px

Em `/templates/mail`, a lista de mensagens, navegação e painel de conteúdo comprimem-se em colunas extremamente estreitas; os alvos da lista chegam a cerca de 10–14 CSS px de largura e o texto quebra quase caractere por caractere. Em `/templates/chat`, os cartões/etapas ficam em colunas tão estreitas que rótulos também quebram caractere por caractere. Embora o documento não tenha overflow horizontal, as capturas mostram perda prática de legibilidade e uso nessa largura.

**Critério:** WCAG 1.4.10, Reflow.
**Proposta:** em telas estreitas, reorganizar painéis em fluxo vertical, permitir recolher áreas secundárias e manter cada região principal utilizável sem colunas comprimidas.

Evidência: inspeção visual do navegador em viewport 320 × 800 CSS px nas rotas `/templates/mail` e `/templates/chat`.

**Status:** corrigido e revisto visualmente em 320 × 800 CSS px: Mail empilha os painéis e Chat quebra os controles do compositor sem sobreposição. A verificação de zoom real de 400% e a revisão de reflow no restante do site permanecem pendentes.

### P2 — Hierarquia de títulos dos templates precisa de uma decisão explícita

As páginas standalone de Chat, Mail e Music apresentam títulos de seção de nível 2 na árvore de acessibilidade e não expõem um título de nível 1. Os títulos de página no metadata não substituem um título estrutural no conteúdo. A estrutura não foi considerada uma falha automática, mas piora a orientação por navegação de títulos.

**Proposta:** incluir um título principal apropriado para cada preview, visível ou visualmente oculto conforme a composição, e revisar a ordem dos headings nos templates restantes.

Evidência: [Chat](../../app/templates/chat/page.tsx) · [Mail](../../app/templates/mail/page.tsx) · [Music](../../app/templates/music/page.tsx)

**Status:** corrigido com H1 visualmente oculto nas páginas standalone de Chat, Mail e Music.

### P2 — Gráficos personalizados exigem uma alternativa além do desenho

A documentação do Chart instrui a passar `accessibilityLayer`, e os exemplos Chart examinados incluem essa propriedade. Isso dá suporte à navegação e à leitura do gráfico, mas não garante por si só que o conjunto de dados seja compreensível sem percepção visual em todo uso. O contrato atual permite cores customizadas e composição arbitrária.

**Critério:** WCAG 1.1.1, Non-text Content, e 1.3.1; WCAG 1.4.11 para marcas necessárias.  
**Proposta:** orientar consumidores a fornecer título/contexto e alternativa textual ou tabular apropriada quando o gráfico comunica dados essenciais; verificar contraste entre marcas e fundo e evitar codificar série somente por cor.

Evidência: [documentação de Chart](../../content/docs/components/chart.mdx) · [componente Chart](../../registry/react/components/chart.tsx)

**Status:** a documentação agora recomenda resumo textual ou tabular quando os dados forem essenciais e diferenciação que não dependa somente de cor.

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

## Resultado desta rodada — itens 2 a 6

### Teclado e foco — parcial

**Aprovado nos fluxos amostrados:** skip link, navegação principal, ativação/movimentação de tabs por setas, abertura da paleta por ⌘K, Escape e retorno do foco ao acionador; no diálogo “My Project”, foco inicial dentro do diálogo, Tab entre controles e restauração ao botão Open. **Pendente:** percorrer sistematicamente busca, formulários, menus, sliders e estados das galerias; verificar visibilidade, contraste composto, recorte e oclusão em todos os pontos de parada.

### Zoom e reflow — parcial

**Aprovado no recorte medido:** nas 12 rotas carregadas a 320 × 800 CSS px (`/`, `/docs/components`, `/docs/components/input`, `/docs/components/dialog`, `/docs/components/slider`, `/docs/forms`, `/themes`, `/templates/components`, `/templates/tasks`, `/templates/mail`, `/templates/chat`, `/templates/music`), `documentElement.scrollWidth` e `body.scrollWidth` permaneceram em 320 px. Em Music existe conteúdo/carrossel com recorte horizontal interno intencional, não overflow da página. **Sem resultado:** `/docs/components/command` e `/templates/dashboard` expiraram durante navegação. A inspeção do screenshot de `/themes` não bastou para confirmar usabilidade visual. **Pendente:** zoom real de 400% em viewport desktop e revisão de leitura/operação, não apenas largura simulada.

### Leitor de tela — bloqueado/não testado

Não foi possível controlar Safari/Firefox nativos por falta de permissão CUA; Safari tampouco apareceu como app disponível. A árvore de acessibilidade do navegador não substitui a experiência falada. VoiceOver + Safari (ou Firefox, conforme fallback planejado) deve ser executado em estação acessível e validado para nomes, papéis, estados, instruções, erros, mudanças dinâmicas, diálogos, tabs, sliders e alternativas de gráficos.

### Cores forçadas e tamanho/espaçamento de alvos — bloqueado/parcial

O host é macOS e não havia Windows/Edge disponível; não se usou emulação como aprovação. A validação de cores forçadas fica bloqueada até haver ambiente Windows/Edge. Na triagem a 320 px, checkboxes de Tasks mediram 16 × 16 CSS px e o thumb de área do seletor de cor em `/themes` e `/templates/components` mediu 18 × 18 px. São candidatos para revisão segundo WCAG 2.2 2.5.8; ainda não foi verificado o espaçamento entre alvos, sobreposição nem exceções aplicáveis. Portanto não se declara reprovação final do critério com base apenas nesses retângulos.

### Automação axe — triagem concluída para a rodada local; defeitos e pendências registrados

**Ambiente e escopo:** Chrome 154 headless, Playwright 1.63.0, axe-core 4.13.0 instalado temporariamente em `/tmp` (sem mudança em manifests/lockfile), viewport inicial 1280 × 900, tags WCAG 2.0/2.1/2.2 A/AA e best-practice. Foram enumeradas 156 URLs do sitemap. A execução em lote concluiu 148 rotas; oito tiveram erro/timeout sob carga. Todas as oito foram reabertas individualmente: sete retornaram resultado axe; `/docs/components/toc` respondeu HTTP 500 devido à remoção do contexto `TocItemPropsProvider`. O wrapper foi restaurado e a rota voltou a responder 200; uma repetição pontual deixou um alerta `landmark-unique`. Assim, há resultado de axe ou erro documentado para cada rota, mas não uma varredura integral final e simultânea das 156 URLs sobre um snapshot imutável.

A execução em lote reportou **42 pares rota/regra** em **148 rotas**, antes de algumas correções finais e verificações pontuais. Os totais não devem ser interpretados como defeitos únicos. Evidência detalhada do lote: `/tmp/shark-a11y-audit/results-current.json`; tentativas pontuais posteriores: scripts/resultados em `/tmp/shark-a11y-audit`.

| Regra | Rotas / nós no lote | Triagem e estado |
| --- | ---: | --- |
| `aria-valid-attr-value` | 1 / 4 | **Defeito confirmado:** Bottom Navigation tem tabs com `aria-controls` apontando para painéis ausentes em três previews. Corrigir a composição para renderizar painéis correspondentes ou remover a referência via API suportada pelo widget; ainda aberto. |
| `aria-required-children` | 1 / 8 | **Defeito confirmado:** Steps renderiza wrappers `StepsItem` entre `tablist` e `tab`. A semântica incompatível permanece aberta; precisa corrigir markup/composição e validar navegação de tabs antes de fechar. |
| `nested-interactive`, `role-img-alt` | 1 / 1 e 1 / 11 | **Corrigido e verificado pontualmente:** o wrapper do QR Code agora é um grupo nomeado com o valor codificado, permitindo que ações internas permaneçam interativas. `/docs/components/qr-code` passou com zero violações em nova execução axe. A checagem posterior dos exemplos Tree View e File Upload também não reproduziu os alertas de aninhamento. |
| `empty-table-header` | 1 / 2 | **Parcialmente corrigido:** foi adicionado texto acessível ao cabeçalho de ações no exemplo padrão. Nova execução de `/docs/components/data-table` ainda reporta um cabeçalho vazio em outro exemplo; localizar e corrigir esse cabeçalho permanece aberto. |
| `landmark-unique` | 10 / 12 | **Achados confirmados de estrutura/nome:** regiões duplicadas em Accordion/Carousel, toast region repetida, breadcrumb dentro de preview e nomes de navegação repetidos. Há ainda contexto de shell/iframe na Bottom Navigation e Sidebar. Corrigir nomes/roles por instância e validar a árvore composta; parcialmente aberto. A checagem final do TOC também reportou uma instância. |
| `heading-order` | 7 / 10 | **Achados confirmados de orientação**, sobretudo headings de exemplos começando em níveis 3/4. Ajustar sem pular níveis ou usar estilo visual sem semântica de heading; aberto. |
| `landmark-main-is-top-level`, `landmark-no-duplicate-main` | 1 / 2 cada | **Composição confirmada** no preview Sidebar, que insere um `main` dentro do shell e cria mais de um landmark principal. Corrigir no preview/composição; aberto. |
| `color-contrast` | 1 / 3 | Texto desabilitado de Tags Input ficou abaixo do limiar automatizado. O estado desabilitado requer triagem contextual conforme WCAG, mas os três pares foram mantidos como **pendentes de decisão**, sem recalibrar tokens globais. |
| `label` | 8 / 74 | **Misto / pendente:** inclui entradas internas ocultas do Color Picker e inputs de widgets com `aria-labelledby`; axe não resolve adequadamente todos esses padrões. Validar nomes calculados/árvore de acessibilidade. Combobox na página de Breadcrumb requer correção ou nome verificável. Não marcar todo o grupo como falha nem como falso positivo. |
| `aria-prohibited-attr` | 1 / 13 | Alerta concentrado no `aria-live` gerado pelo grupo do Carousel. **Pendente de validação** contra o DOM e o padrão Ark; não removido nem suprimido globalmente. |
| `aria-allowed-attr`, `aria-allowed-role` | 6 / 13 e 4 / 12 | **Provável falso positivo parcial:** `aria-pressed` em botões nativos do ToggleGroup é padrão válido de botão alternável; alguns roles em exemplos compostos requerem inspeção individual. As exceções justificadas não foram excluídas da varredura. |
| `region` | 2 / 2 | Skip link aparece fora de landmark para permitir navegação até o conteúdo principal; classificação depende do contexto e não foi tratada como defeito confirmado. |

Os alertas de `nested-interactive` anteriores em Tree View/File Upload foram corrigidos na origem e passaram em verificações pontuais; essa validação não equivale a uma repetição completa de todas as rotas no mesmo snapshot. Não houve supressão global de regra axe.

#### Revalidação pontual após correções

As verificações posteriores encontraram zero violações em `/themes`, `/docs/components/native-select`, `/command`, `/avatar`, `/tree-view`, `/tooltip`, `/announcement`, `/table`, `/file-upload` e `/hooks/use-async-list`. `/docs/components/toc` retornou 200 após restaurar seu provedor de contexto, mas manteve um `landmark-unique`. `/docs/components/steps`, `/bottom-navigation` e `/data-table` mantiveram os achados acima. A varredura inicial e essas verificações não são uma única execução final coerente; esses status refletem os resultados disponíveis por rota.

### Produção — pendente

Revalidar em produção após a triagem/correções, comparar diferenças de ambiente e registrar versão, navegador, rotas e estados. Esta rodada não publicou nem certificou o site.

Os nomes e labels dos casos identificados foram corrigidos conforme os status acima. Uma varredura dos estados ocultos/condicionais de todos os exemplos continua fora da cobertura atual e deve ser considerada ao ampliar a verificação automatizada/manual.

## Limitações

A axe foi executada nos estados iniciais renderizados; não cobre estados ocultos/condicionais nem substitui triagem manual. O lote não concluiu oito navegações, que foram reabertas individualmente; `/docs/components/toc` precisou de correção após responder 500 e só recebeu nova verificação pontual. Viewport de 320 CSS px não equivale a zoom real de 400%. Sem leitor de tela e sem Windows/Edge, anúncios falados e cores forçadas permanecem sem validação. As medidas de alvos são triagem geométrica e precisam considerar espaçamento/exceções de 2.5.8. Não foram feitas verificações em produção. Os percentuais de cor e medições previamente registradas foram mantidos; não houve reauditoria ou mudança de tokens globais.

Avaliar o site não equivale a certificar conformidade do EAA. O resultado não substitui revisão de critérios aplicáveis, tecnologia assistiva, ambiente de produção e avaliação jurídica.
