From node:latest
WORKDIR Sanatorium
COPY . .
ENV PORT 8080
ENV HOST 0.0.0.0
RUN npm run --prefix Sanatorium build 

CMD npm run server

