FROM node:22-alpine
ENV NODE_ENV=production
WORKDIR /app
RUN npm install --global pnpm
COPY package.json pnpm-lock.yaml .
RUN pnpm install
COPY index.html tsconfig.json vite.config.ts .
COPY src src
ARG API_URL
ENV VITE_API_URL=$API_URL
RUN pnpm run build
EXPOSE 4173
CMD ["pnpm", "preview", "--host"]