FROM node:12 
EXPOSE 3000
WORKDIR /srv/todo-app
ADD . /srv/todo-app
RUN yarn
ENV NODE_ENV production
CMD ["yarn", "start"]