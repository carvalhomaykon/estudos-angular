# Notas Principais sobre Angular

## Estrutura Básica de um Componente

Um componente Angular é a unidade fundamental de uma aplicação. Ele consiste em um arquivo TypeScript (`.ts`), um template HTML (`.html`) e um arquivo de estilos (`.css`).

**Template (HTML):** É onde você define a interface do usuário. Você pode usar a sintaxe de templates do Angular para exibir dados e manipular o DOM.

  * **Interpolação (`{{ }}`):** Permite exibir o valor de uma propriedade da sua classe TypeScript no template.

    ```html
    <p>Olá, {{ nome }}!</p>
    ```

  * **Vinculação de Propriedades (`[ ]`):** Usada para vincular uma propriedade do DOM a uma propriedade do componente.

    ```html
    <img [src]="caminhoDaImagem">
    ```

  * **Vinculação de Eventos (`( )`):** Permite executar um método do seu componente em resposta a um evento do DOM, como um clique.

    ```html
    <button (click)="enviarDados()">Enviar</button>
    ```

### Exemplo Prático

Abaixo está um exemplo que combina interpolação e vinculação de eventos, mostrando uma saudação personalizada e um botão.

```html
<p> Maykon mandou um oi {{ name }} </p><button (click)="submit()">Click</button>
```

-----

## Controle de Fluxo

Angular oferece diretivas de controle de fluxo integradas para manipular a renderização de elementos no template.

### `@if`, `@else if`, `@else`

Estas diretivas controlam a exibição condicional de elementos. Elas são a forma moderna e mais legível de substituir as antigas diretivas `*ngIf`.

```html
@if (deveMostrarTitulo) {
  <h1>Meu título</h1>
} @else if (name === "Maykon") {
  <h1>Meu título para o Maykon</h1>
} @else {
  <h1>Não foi verdadeiro</h1>
}
```

Neste exemplo:

  * Se `deveMostrarTitulo` for **true**, o primeiro `<h1>` é exibido.
  * Caso contrário, se a propriedade `name` for exatamente igual a `"Maykon"`, o segundo `<h1>` é exibido.
  * Se nenhuma das condições anteriores for atendida, o último `<h1>` é exibido.

-----

## Renderização de Listas

### `@for`

A diretiva `@for` é usada para iterar sobre uma coleção de dados (como um array) e renderizar um bloco de HTML para cada item. Ela substitui a diretiva `*ngFor` e oferece melhor performance e sintaxe.

```html
@for (item of listItems; track $index) {
  <p>{{ item }}</p>
}
```

  * **`item of listItems`:** Define a iteração, onde `item` é a variável para cada elemento do array `listItems`.
  * **`track $index`:** A cláusula `track` é **obrigatória** e ajuda o Angular a otimizar a renderização, identificando de forma única cada item da lista. Usar `$index` é uma opção simples, mas é recomendado usar uma propriedade única do item (como um `id`) se disponível, para garantir a melhor performance em listas que mudam de ordem ou tamanho.

-----

## Componentes Decorators

**`@Component`:** Este é o decorator principal. Ele marca uma classe como um componente Angular e fornece metadados essenciais, como:

  * **`selector`:** A tag HTML personalizada que será usada para instanciar o componente no template de outros componentes (ex: `<app-minha-componente>`).
  * **`templateUrl`** ou **`template`:** O caminho para o arquivo HTML do template ou o próprio template embutido.
  * **`styleUrls`** ou **`styles`:** O caminho para o arquivo CSS de estilos ou os estilos embutidos.

**`@Input()`:** Usado para passar dados de um componente pai para um componente filho.

**`@Output()`:** Usado para emitir eventos de um componente filho para o componente pai. Geralmente, ele é usado em conjunto com `EventEmitter`.