
# REAL Consultoria - Arquivos HTML para Elementor

Este diretório contém os arquivos HTML completos do site da REAL Consultoria, otimizados para implementação no WordPress através do Elementor.

## Arquivos Incluídos

- `index.html` - Página principal com hero section, carrosséis, estatísticas animadas e seções interativas
- `sobre.html` - Página sobre a empresa com história, missão e equipe
- `servicos.html` - Página de serviços detalhados
- `cases.html` - Cases de sucesso com resultados comprovados
- `contato.html` - Página de contato com formulários

## Características Técnicas

### CSS e JavaScript Inline
- Todo o CSS está embeddado no `<head>` de cada página
- JavaScript está incluído inline no final de cada página
- Fontes Google Fonts carregadas diretamente
- Não há dependências externas além das fontes

### Compatibilidade com Elementor
- Estrutura HTML semântica e limpa
- Classes CSS organizadas e bem documentadas
- Animações CSS puras (sem bibliotecas externas)
- Código responsivo para todos os dispositivos

### Funcionalidades Implementadas

#### Página Principal (index.html)
- Hero section com carousel de imagens de fundo
- Seção de diferenciais competitivos com cards animados
- Carousel de serviços com navegação
- Estatísticas animadas ativadas por scroll
- Timeline interativa da metodologia
- Seção de depoimentos com rotação automática
- Blog com grid de artigos
- CTA final com garantias

#### Funcionalidades JavaScript
- Carousel automático do hero com transições suaves
- Navegação manual nos carrosséis de serviços
- Animação das estatísticas por intersection observer
- Rotação automática de depoimentos
- Botão WhatsApp que aparece com scroll
- Header com efeito de scroll
- Menu mobile (estrutura preparada)

### SEO Otimizado
- Meta tags completas (Open Graph, Twitter Cards)
- Schema markup estruturado (JSON-LD)
- URLs semânticas e canônicas
- Descrições e keywords otimizadas
- Estrutura de headings hierárquica

### Performance
- Imagens otimizadas do Unsplash
- CSS minificado e otimizado
- Carregamento assíncrono de fontes
- Preload de recursos críticos
- Lazy loading preparado

## Como Implementar no Elementor

### Método 1: HTML Widget
1. Abra o Elementor no WordPress
2. Adicione um widget "HTML"
3. Cole o conteúdo completo de cada arquivo HTML
4. Publique a página

### Método 2: Seções Separadas
1. Divida cada arquivo HTML em seções menores
2. Use widgets HTML separados para cada seção
3. Isso permite maior controle e edição
4. Mantenha o CSS no primeiro widget da página

### Método 3: Custom Code (Recomendado)
1. Use o recurso "Custom Code" do Elementor Pro
2. Adicione o CSS completo no header
3. Use widgets HTML apenas para o conteúdo
4. Adicione o JavaScript no footer

## Personalização

### Cores da Marca
```css
:root {
    --brand-black: #000000;
    --brand-gold: #C5A56A;
    --brand-gold-light: #EADCA6;
    --brand-white: #F5F5F5;
    --brand-gray: #333333;
}
```

### Fontes Utilizadas
- **Playfair Display**: Títulos e headings
- **Montserrat**: Textos e parágrafos

### Imagens
Todas as imagens estão hospedadas no Unsplash e podem ser substituídas por imagens próprias da empresa.

## Responsividade

O código inclui breakpoints para:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (até 767px)

## Contato e Suporte

Para dúvidas sobre a implementação:
- WhatsApp: (11) 97451-7180
- E-mail: realconsultoria.e.j@gmail.com

## Licença

Este código foi desenvolvido exclusivamente para a REAL Consultoria Empresarial & Jurídica.
