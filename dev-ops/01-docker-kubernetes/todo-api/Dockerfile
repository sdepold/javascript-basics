FROM node:12 
EXPOSE 5000
WORKDIR /srv/todo-api
ADD . /srv/todo-api
RUN yarn
ENV NODE_ENV production
CMD ["yarn", "start:db"]