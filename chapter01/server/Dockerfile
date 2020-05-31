# docker build -t my-node .
FROM node:lts 

RUN mkdir -p /var/www/app
RUN useradd app -u 5000
RUN chown app /var/www/app
USER app
WORKDIR /var/www/app
CMD ["node", "index.js"]