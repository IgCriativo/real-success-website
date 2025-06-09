
# REAL Consultoria - Site Completo HTML/CSS/JS

Este diretório contém o site completo da REAL Consultoria convertido para HTML puro com CSS e JavaScript inline, pronto para incorporação via embed code.

## Arquivos Incluídos

- `index.html` - Página principal completa
- `sobre.html` - Página sobre a empresa
- `contato.html` - Página de contato com formulário
- `README.md` - Este arquivo de instruções

## Características

### Design e Layout
- Design responsivo que funciona em todos os dispositivos
- Paleta de cores profissional (preto, dourado, cinza)
- Tipografia premium (Playfair Display + Montserrat)
- Animações suaves e efeitos visuais
- Cards com efeito glass e gradientes

### Funcionalidades JavaScript
- Carrossel automático no hero da página principal
- Scroll suave entre seções
- Efeitos de animação ao rolar a página
- Formulário de contato integrado com WhatsApp
- Validação de formulário
- Formatação automática de telefone
- Header com efeito de transparência no scroll

### Componentes Principais
- Header fixo com navegação
- Hero section com carrossel de imagens
- Seções de diferenciais com cards animados
- Área de serviços com imagens e descrições
- Processo de trabalho em 3 etapas
- Seção de depoimentos
- Blog com artigos de insights
- Call-to-action final
- Footer completo com informações de contato
- Botão flutuante do WhatsApp

### Integração WhatsApp
- Botão flutuante sempre visível
- Links diretos para cada sócio
- Formulário que gera mensagem automática
- CTAs direcionam para WhatsApp

## Como Usar

### Para Incorporação Direta
1. Copie o código HTML completo de qualquer arquivo
2. Cole diretamente no seu editor (WordPress, Elementor, etc.)
3. O CSS e JavaScript estão inline - não precisa de arquivos externos
4. Apenas certifique-se de que as fontes Google estão carregadas

### Para Personalização
1. As cores da marca estão definidas em CSS variables no :root
2. Altere as variáveis para mudar toda a paleta:
   ```css
   :root {
       --brand-black: #000000;
       --brand-gold: #C5A56A;
       --brand-gold-light: #EADCA6;
       --brand-white: #F5F5F5;
       --brand-gray: #333333;
   }
   ```

### Para Editar Conteúdo
- Textos, imagens e informações podem ser editados diretamente no HTML
- URLs do WhatsApp estão espalhadas pelo código - pesquise por "wa.me"
- Imagens usam URLs do Unsplash - substitua por suas próprias imagens

## Recursos Externos Necessários

### Fontes (já incluídas)
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Imagens
Todas as imagens usam URLs do Unsplash. Para produção, baixe e hospede as imagens em seu servidor.

## Compatibilidade
- ✅ Chrome, Firefox, Safari, Edge (versões modernas)
- ✅ Dispositivos móveis e tablets
- ✅ WordPress, Elementor, e outros page builders
- ✅ Qualquer CMS que aceite HTML personalizado

## Performance
- CSS e JS inline para reduzir requisições
- Imagens otimizadas para web
- Animações com CSS3 para melhor performance
- Lazy loading pode ser adicionado se necessário

## Suporte
Este código é auto-contido e não requer bibliotecas externas além das fontes Google. Todas as funcionalidades são implementadas com JavaScript vanilla.

## Personalização Avançada
Para modificações mais complexas:
1. Identifique a seção no HTML
2. Modifique o CSS inline correspondente
3. Ajuste o JavaScript se necessário
4. Teste em diferentes dispositivos

O código está bem organizado e comentado para facilitar modificações futuras.
