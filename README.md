# 🚀 Interplanetary Delivery System

Bem-vindo ao **Interplanetary Delivery System**! Este é um sistema de delivery entre planetas, especificamente entre a Terra e Marte, desenvolvido com React, TypeScript e Vite. Aqui, você pode cadastrar, editar e gerenciar endereços e pedidos interplanetários.

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para criar interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **Vite**: Ferramenta de build rápida e eficiente para projetos modernos com React.
- **Context API**: Gerenciamento de estado global da aplicação.
- **Local Storage**: Persistência de dados localmente no navegador.
- **Styled-components**: Biblioteca para estilizar componentes em React.

## 📂 Estrutura do Projeto

```
src/
├── components/
│   ├── pages/
│   │   ├── cadastro.tsx
│   │   ├── pedido.tsx
│   │   └── edicao.tsx
├── contexts/
│   ├── addressContext.tsx
│   └── deliveryContext.tsx
├── models/
│   ├── address.ts
│   └── delivery.ts
├── services/
│   └── storage.ts
├── styles/
│   ├── cadastroStyle.ts
│   ├── pedidoStyle.ts
│   └── edicaoStyles.ts
├── routes/
│   └── routes.tsx
└── App.tsx
```

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- Node.js instalado
- Gerenciador de pacotes npm ou yarn

### Passos

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/interplanetary-delivery-system.git
   cd interplanetary-delivery-system
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Rode o projeto:**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Abra no navegador:**

   Vá para `http://localhost:3000` para ver a aplicação rodando.

## 📜 Funcionalidades

### Cadastro de Endereço

- Cadastre endereços na Terra (cidade e país) ou em Marte (lote e número do lote).
- Redireciona automaticamente para a página de cadastro de pedidos após adicionar um endereço.

### Cadastro de Pedido

- Cadastre pedidos selecionando a origem e o destino dos endereços cadastrados.
- Defina o tipo de pedido, data, horário de saída e de entrega.
- Redireciona automaticamente para a página de edição após adicionar um pedido.

### Edição Geral

- Veja todos os pedidos com seus respectivos endereços de origem e destino.
- Edite ou delete pedidos e endereços.
- Redirecionamento para páginas anteriores ou próximas.

## 🎨 Estilo e UI

- **Styled-components**: Utilizado para estilizar os componentes e manter uma consistência visual.
- **Tema**: Fundo branco com texto em cores escuras para melhor legibilidade.

## 📋 Boas Práticas e Técnicas Implementadas

### KISS (Keep It Simple, Stupid)

Mantive o código o mais simples possível. Evitei complexidade desnecessária para garantir que o projeto seja fácil de entender e manter.

### DRY (Don't Repeat Yourself)

Evitei repetição de código ao máximo. Criei componentes reutilizáveis e extraí lógica comum para funções utilitárias, o que ajuda a manter o código limpo e modular.

### YAGNI (You Aren't Gonna Need It)

Implementei apenas funcionalidades que eram necessárias para o projeto atual. Isso evitou desperdício de tempo e recursos em funcionalidades que não seriam utilizadas.

### Modularização

Organizei o código em pequenos módulos e componentes bem definidos. Cada contexto, componente e estilo tem seu próprio arquivo, facilitando a manutenção e a expansão do projeto.

### Context API

Usei a Context API do React para gerenciar o estado global da aplicação. Isso permitiu compartilhar dados entre componentes de forma eficiente, sem a necessidade de prop drilling.

### Persistência de Dados

Utilizei o localStorage para persistir os dados localmente. Isso garante que os dados permaneçam disponíveis mesmo após o fechamento do navegador, melhorando a experiência do usuário.

### Estilização

Utilizei `styled-components` para criar componentes estilizados e reutilizáveis. Isso ajudou a manter a consistência visual e facilitou a manutenção do estilo da aplicação.

## 🐞 Debug e Testes

Usei extensivamente o console e as ferramentas do React Developer Tools para debugar e verificar o fluxo de dados. Assegurei que os dados estão sendo salvos e recuperados corretamente.

## 🏆 Desafio Beyond the Bytes

Este projeto foi um desafio proposto pela **Beyond the Bytes**. A proposta envolveu a criação de um sistema de delivery interplanetário, utilizando boas práticas de desenvolvimento e tecnologias modernas.

## 👨‍💻 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

1. **Fork o projeto**
2. **Crie uma branch para sua feature** (`git checkout -b feature/nova-feature`)
3. **Commit suas mudanças** (`git commit -am 'Adicionei uma nova feature'`)
4. **Push para a branch** (`git push origin feature/nova-feature`)
5. **Abra um Pull Request**

## 📄 Licença

Este projeto está licenciado sob a MIT License.

---

Espero que este README ajude a entender melhor o projeto e facilite o uso e a contribuição para ele! 🚀
