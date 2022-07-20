FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /serverlessb2b
COPY  . /serverlessb2b/
RUN npm i 
EXPOSE 3000
CMD ["npm", "start"]
