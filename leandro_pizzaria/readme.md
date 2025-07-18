# Explicação do Código HTML - Pizzaria Boca Cheia

Análise linha por linha do código HTML:

```html
<!DOCTYPE html>
```

- Define o tipo de documento como HTML5, informando ao navegador qual versão do HTML está sendo usada.

```html
<html lang="pt-br"></html>
```

- Elemento raiz do documento HTML com atributo de idioma definido como português do Brasil.

```html
<head></head>
```

- Inicia a seção de cabeçalho do documento, que contém metadados e links para recursos externos.

```html
<meta charset="UTF-8" />
```

- Define a codificação de caracteres do documento como UTF-8, permitindo a exibição correta de caracteres especiais e acentos.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- Configura a visualização responsiva para dispositivos móveis, ajustando a largura da página à largura do dispositivo e definindo o nível de zoom inicial.

```html
<title>Menu de Pizzas Deliciosas</title>
```

- Define o título da página que aparece na aba do navegador.

```html
<link rel="stylesheet" href="style.css" />
```

- Vincula o arquivo CSS externo (style.css) para estilizar a página.

```html
</head>
```

- Fecha a seção de cabeçalho.

```html
<body></body>
```

- Inicia o corpo do documento, onde todo o conteúdo visível da página é colocado.

```html
<header></header>
```

- Define a seção de cabeçalho da página, geralmente contendo título e informações introdutórias.

```html
<h1>🍕 Pizzaria Boca Cheia 🍕</h1>
```

- Título principal da página com emojis de pizza decorativos.

```html
<p>😉 Pizzas que dão Água na Boca 😉</p>
```

- Parágrafo com o slogan da pizzaria, decorado com emojis.

```html
    </header>
```

- Fecha a seção de cabeçalho.

```html
<main></main>
```

- Inicia a seção principal do conteúdo da página.

```html
<div class="container"></div>
```

- Cria um contêiner para organizar o layout principal, usando flexbox conforme definido no CSS.

```html
<aside class="sidebar"></aside>
```

- Define uma seção lateral (barra lateral) para filtros e opções de busca.

```html
<h3>Filtrar por Categoria</h3>
```

- Título para a seção de filtro por categoria.

```html
<select id="category-filter"></select>
```

- Cria um menu suspenso (dropdown) para filtrar pizzas por categoria, com ID para manipulação via JavaScript.

```html
<option value="">Todas as categorias</option>
```

- Opção padrão do dropdown que mostra todas as categorias (valor vazio).

```html
<option value="pizza tradicional">Pizza Tradicional</option>
```

- Opção para filtrar apenas pizzas tradicionais.

```html
<option value="Pizza Doce">Pizza Doce</option>
```

- Opção para filtrar apenas pizzas doces.

```html
<option value="Pizza Vegetariana">Pizza Vegetariana</option>
```

- Opção para filtrar apenas pizzas vegetarianas.

```html
                </select>
```

- Fecha o elemento de seleção.

```html
<h3>Buscar por Ingrediente</h3>
```

- Título para a seção de busca por ingrediente.

```html
<input
  type="text"
  id="ingredient-search"
  placeholder="Ex: mussarela, tomate..."
/>
```

- Campo de texto para buscar pizzas por ingrediente, com texto de exemplo no placeholder.

```html
<div></div>
```

- Contêiner para a opção de busca apenas por nome.

```html
<input type="checkbox" id="search-by-name-only" />
```

- Caixa de seleção que permite buscar apenas pelo nome da pizza, ignorando a descrição.

```html
<label for="search-by-name-only">Buscar somente por nome</label>
```

- Rótulo descritivo para a caixa de seleção, associado pelo atributo "for".

```html
                </div>
```

- Fecha o contêiner da opção de busca.

```html
<img src="pizzaiolo.JPG" alt="Pizza deliciosa" class="sidebar-image" />
```

- Imagem decorativa na barra lateral, mostrando um pizzaiolo (chef de pizza).

```html
            </aside>
```

- Fecha a seção da barra lateral.

```html
<section class="menu"></section>
```

- Define a seção principal do menu de pizzas.

```html
<h2>Nosso Cardápio</h2>
```

- Título da seção do cardápio.

```html
<div id="pizza-list" class="pizza-grid"></div>
```

- Contêiner vazio que será preenchido dinamicamente com as pizzas via JavaScript, usando layout de grade.

```html
                </div>
```

- Fecha o contêiner da lista de pizzas.

```html
            </section>
```

- Fecha a seção do menu.

```html
        </div>
```

- Fecha o contêiner principal.

```html
    </main>
```

- Fecha a seção principal do conteúdo.

```html
<footer></footer>
```

- Inicia a seção de rodapé da página.

```html
<p>
  &copy; 2025 Pizzaria Boca Cheia. Todos os direitos reservados para o
  Guilherme.
</p>
```

- Texto de copyright no rodapé com o símbolo © e informações de direitos autorais.

```html
    </footer>
```

- Fecha a seção de rodapé.

```html
<script src="pizza.js"></script>
```

- Vincula o arquivo JavaScript externo (pizza.js) que contém a lógica para exibir e filtrar as pizzas.

```html
</body>
```

- Fecha o corpo do documento.

```html
</html>
```

- Fecha o elemento raiz HTML, finalizando o documento.
