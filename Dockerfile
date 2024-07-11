# 使用官方 Node.js 14 镜像作为基础镜像
FROM node:14

# 设置工作目录
WORKDIR /app

# 将本地的 package.json 和 package-lock.json 文件复制到工作目录
COPY package*.json ./

# 安装依赖
RUN npm install

# 将当前目录下的所有文件复制到工作目录
COPY . .

# 暴露容器的端口，确保与您的 API 服务器端口一致
EXPOSE 5601

# 定义启动命令，这里假设您的 Node.js 应用入口文件为 server.js
CMD ["node", "server.js"]

