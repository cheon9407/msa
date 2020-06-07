dev-server:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml run --service-port bshell

dev-client:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml run --service-port fshell

prod-server:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d 

prod-client:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d

dev-clean:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v

prod-clean:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v