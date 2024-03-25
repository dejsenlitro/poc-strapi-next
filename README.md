```bash

npx create-next-app@latest poc-planet-app

npx create-strapi-app@latest backend

nvm use 20.11.1
```

- node 20.11.1 is the newest node version that is supported by strapi

<br/>

To host static next js files instal http-server

```bash

npm run build

cd ..

npm i -g http-server

http-server .\frontend\out\ -p 1234
```

<br/>

TODO:

- Custom image loader
  https://nextjs.org/docs/pages/building-your-application/deploying/static-exports

- host on https://bunny.net/
