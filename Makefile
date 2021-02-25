.PHONY: redis-up
redis-up:
	docker run \
	-d \
	-p 6379:6379 \
	--name redis0 redis redis-server

.PHONY: create-file
create-file:
	@./scripts/create-file.sh
