

## 7 days of code - HTML e CSS


Projeto de desenvolvimento da [Alura](https://7daysofcode.io/)
#7DaysOfCode


## Estrutura CSS

Separado em duas pastas, **structure** e **essentials**.
 

### Structure: 
Utilizei o padrão BEM para nomeação de classes, procurando exibir uma especificidade útil para cada elemento. Cada sessão tem um arquivo css separado para melhor organização. 

### Essentials:
Para estilização geral e utilitários, utiliza-se a pasta Essentials.  

#### Explicação
Essa foi minha tentativa de manter, no contexto deste site, uma reutilização razoável
de estilos semânticamente apropriados, enquanto mantendo versatilidade e especificidade 
ao possibilitar a mudança de elementos específicos dentro da estrutura. Talvez existam possíveis melhoras, mas este foi atualmente o trabalho que eu soube entregar no tempo que utilizei destes 7 dias.

## Metas extras
    
- (X) Estilização Mobile
    Modificações para melhor adequação para dispositivos mobile!
    O layout se altera para telas menores, comportamento "inline" do design
    passa para "block", algumas mudanças de espaçamento e tamanho quando necessárias. 

- (X) Minificação por script
    Recentemente fiz um curso de performance web para front-end e achei fascinante, queria praticar novamente a aplicação de alguma técnica. 
    [Link explicativo](https://developers.google.com/speed/docs/insights/MinifyResources?hl=pt)

    Através do arquivo dist.js, e arquivos associados dentro da pasta transformDist, 
    o conteúdo dos arquivos de html e css é lido, minificado e salvo em outro arquivo correspondente dentro da pasta "dist". Esta é a página quando em "distribuição", também podendo ser chamada de produção.

    Caso eu quisesse fazer algo mais elaborado, o interessante seria:

    1- separar o conteúdo essencial para renderização 'above-the-fold'
    2- colocar esse css dentro do próprio html
    3- carregar assíncronamente o resto do css

    Isso permitiria uma renderização inicial bem mais rápida.


    