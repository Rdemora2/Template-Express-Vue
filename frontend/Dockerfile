# Use a imagem Node.js LTS como base
FROM node:lts as builder

# Defina o diretório de trabalho como /app
WORKDIR /app

# Copie os arquivos de package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todos os arquivos do diretório atual para o diretório de trabalho
COPY . .

# Execute o comando de build para criar os artefatos do aplicativo
RUN npm run build

# Use a imagem Node.js LTS para servir o aplicativo (ou qualquer outra imagem Node.js)
FROM node:lts

# Defina o diretório de trabalho como /app
WORKDIR /app

# Copie apenas os artefatos de build do diretório de trabalho do estágio anterior
COPY --from=builder /app/dist /app

# Instale o serve globalmente para servir o aplicativo
RUN npm install -g serve

# Exponha a porta 5000 para que o aplicativo possa ser acessado
EXPOSE 5000

# O comando CMD executa o servidor 'serve' ao iniciar o contêiner
CMD ["serve", "-s", ".", "-l", "5000"]