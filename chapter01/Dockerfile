# docker build -t my-node .
FROM node:lts 

ARG APP=app
ARG HOME=/home/node

RUN mkdir -p $HOME/app && chown -R node:node /$HOME/app
USER root
# RUN useradd app -u 5000
# RUN chown app /app
WORKDIR $HOME/app
CMD [ "yarn" ]