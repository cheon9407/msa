dev-server:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up server
	# docker-compose -f docker-compose.yml -f docker-compose.dev.yml run --service-port server

dev-client:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up client
	# docker-compose -f docker-compose.yml -f docker-compose.dev.yml run --service-port client

prod-all:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d 

dev-clean:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v

prod-clean:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml down -v