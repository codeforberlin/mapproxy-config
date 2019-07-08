config.yml:
	python generate_config.py

serve: config.yml
	mapproxy-util serve-develop config.yml

wsgi:
	mapproxy-util create -t wsgi-app -f config.yml wsgi.py

clean:
	rm -r cache_data config.yml wsgi.py
