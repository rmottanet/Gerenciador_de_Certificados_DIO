# Gerenciador de Certificados DIO: Automatize a Organização de Suas Conquistas

Bem-vindo ao Gerenciador de Certificados DIO! Este projeto, oferece a você uma solução sofisticada para simplificar o gerenciamento e a organização de seus certificados da DIO Innovation One. Com base na eficiente plataforma Google Apps Script, este código inteligente automatiza o processo de captura, download e armazenamento de certificados diretamente em sua conta Google Drive. Coloque um fim na busca por emails e links perdidos. Experimente o Gerenciador de Certificados DIO e traga ordem e praticidade para o seu registro de conquistas.

<div align="center">
    [![Watch the video]]([https://youtu.be/vt5fpE0bzSY](https://www.youtube.com/embed/lI3IvUamE-M))
</div>

## Instruções de Uso com CLASP

Siga estas etapas para configurar e executar o projeto usando o CLASP:

1. **Instale o CLASP:** Se você ainda não tiver o CLASP instalado, execute o seguinte comando em seu terminal:

    ```
    npm install -g @google/clasp
    ```

2. **Clone o Repositório:** Clone este repositório para sua máquina local:

    ```
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

3. **Faça Login:** No diretório do projeto, faça login na sua conta Google:

    ```
    clasp login
    ```

4. **Crie o Projeto Apps Script:** Crie um novo projeto Apps Script vinculado ao repositório:

    ```
    clasp create --type standalone
    ```

5. **Configure as Variáveis:** Abra o arquivo `src/helpers/DownloadAndSavePDF.js` e localize a linha que contém o ID da pasta do Google Drive. Substitua o ID da pasta pelo ID da pasta de destino onde deseja salvar os certificados.

    ```javascript
    const targetFolderId = 'ID_DA_SUA_PASTA_NO_GOOGLE_DRIVE';
    ```

6. **Envie o Código:** Use o comando abaixo para enviar o código para o projeto Apps Script recém-criado:

    ```
    clasp push
    ```

7. **Configure um Acionador (Opcional):** Se desejar automatizar o processo, configure um acionador no [Google Apps Script Dashboard](https://script.google.com). Configure o acionador para executar o script sempre que um email da DIO Innovation One for recebido.

Agora você está pronto para automatizar a captura e o download dos certificados da DIO Innovation One diretamente para o seu Google Drive usando o Certificado Automator. Lembre-se de sempre manter suas credenciais e informações sensíveis protegidas.



