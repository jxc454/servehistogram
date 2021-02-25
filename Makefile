.PHONY: redis-up
redis-up:
	docker run \
	-d \
	-p 6379:6379 \
	--name redis0 redis redis-server

.PHONY: report
report:
	docker run --rm -e INPUT_A_NAME=$(INPUT_A_NAME) \
	-v $(PWD)/reports:/reports \
	$$(docker build -q .)

.PHONY: push-report
push-report:
	@./scripts/push-report.sh
