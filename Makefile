install: install-deps

develop:
	npx webpack-dev-server --open

install-deps:
	npm install

build:
	rm -rf dist
	NODE_ENV=production npx webpack

lint:
	npx eslint .
