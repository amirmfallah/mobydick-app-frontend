BUILDTIME=$(shell date +"%s")


deploy:
	# BUILD HERE
	npm install
	rm -rf dist
	ng build
	docker build -t amirmfallah/mobydick-app-frontend:frontend-client.0.0.${BUILDTIME} .
	docker push amirmfallah/mobydick-app-frontend:frontend-client.0.0.${BUILDTIME}
	~/arvan paas set image deployment/mobydick-ui-beta mobydick-ui-beta=amirmfallah/mobydick-app-frontend:frontend-client.0.0.${BUILDTIME}