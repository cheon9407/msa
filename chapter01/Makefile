dev-server:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d server
	# docker-compose -f docker-compose.yml -f docker-compose.dev.yml run --service-port server

dev-client:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d client
	# docker-compose -f docker-compose.yml -f docker-compose.dev.yml run --service-port client

prod-proxy:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d 

prod-lb:
	docker-compose -f docker-compose.yml -f docker-compose.prod.lb.yml up -d 

dev-clean:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml down

prod-clean:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml down

prod-clean-lb:
	docker-compose -f docker-compose.yml  -f docker-compose.prod.yml -f docker-compose.prod.lb.yml down

dev-clean-all:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v

prod-clean-all:
	docker-compose -f docker-compose.yml -f docker-compose.prod.lb.yml down -v

prod-clean-lb-all:
	docker-compose -f docker-compose.yml  -f docker-compose.prod.yml -f docker-compose.prod.lb.yml down

scale-out-server:
	docker-compose -f docker-compose.yml -f docker-compose.prod.lb.yml scale server=4