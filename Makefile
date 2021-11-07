BUILDTIME=$(shell date +"%s")


deploy:
	# BUILD HERE
	docker build -t amirmfallah/mobydick-app-frontend:frontend-client.0.0.${BUILDTIME} .
	docker push amirmfallah/mobydick-app-frontend:frontend-client.0.0.${BUILDTIME}
	~/arvan paas set image deployment/mobydick-app-frontend mobydick-app-frontend=amirmfallah/mobydick-app-frontend:frontend-client.0.0.${BUILDTIME}