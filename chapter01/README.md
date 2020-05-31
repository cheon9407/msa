
## 환경

tools : docker, docker-compose
backend : node, koa
frontend : vue
session: redis

## 자동화

개발/배포 프로세스

데이터
개발 및 테스트 환경
배포

## 개발

```
$ yarn install
```

```
docker-compose logs 서비스명
```

```
docker-compose up -d [서비스명]
```

```
docker-compose exec 서비스명 명령어
```

```
docker-compose -f docker-compose.yml -f docker-compose.dev.yml run bshell
```

```
$ docker-compose run --service-ports myapp
```


## db 

sequlize, sequlize-cli

```
./node_modules/.bin/sequelize
```

```
$ yarn global add sequelize-cli
$ yarn add mysql2
$./node_modules/.bin/sequelize init
```
 config, migrations, models, seeders 

db 모델 소스 생성
```
sequelize model:generate --name User --attributes id:string,password:string,name:string --force
sequelize model:generate --name Items --attributes name:string,cost:INTEGER --force
```

db 테이블 생성
```
sequelize db:migrate
sequelize db:migrate:undo
```

시드 생성
```
sequelize seed:generate --name userData
```

데이터 넣기
```
sequelize db:seed:all
sequelize db:seed:undo:all
```

