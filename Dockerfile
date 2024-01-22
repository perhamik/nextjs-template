# syntax=docker/dockerfile:1
ARG NODE_TAG=21.5.0-alpine3.19

FROM node:${NODE_TAG} as builder
RUN npm install pnpm@latest -g
WORKDIR /app

COPY package.json yarn.* package-* pnpm-lock.* ./
RUN pnpm install
COPY ./app ./app
COPY ./public ./public
COPY ./src ./src
COPY .env index.d.ts middleware.ts next-env.d.ts next.config.js tsconfig.json tsconfig.web.json ./
RUN pnpm build

FROM node:${NODE_TAG} as runner
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

RUN npm install pm2@5.3.0 -g

WORKDIR /app

COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/yarn.* /app/package-* /app/pnpm-lock.* .
COPY --from=builder --chown=nextjs:nodejs /app/package.json /app/.env /app/next.config.js .
USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=5m --timeout=3s \
CMD node server.js
CMD ["pm2-runtime", "node server.js"] 