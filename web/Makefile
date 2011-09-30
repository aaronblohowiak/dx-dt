lessc:
	./node_modules/.bin/restartr -c ./node_modules/.bin/lessc -a less/bootstrap.less -a public/app.css less/*

server:
	./node_modules/.bin/restartr -c node -a server.js templates/* templates/*/* public/app.css controllers/* live_renders/*

redis:
	redis-server evalsha-redis.conf
