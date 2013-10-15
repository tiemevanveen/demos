See: http://stackoverflow.com/questions/19298135/buster-js-using-a-http-proxy-returns-undefined#comment28611584_19298135

Terminal window 1:

	git clone git@github.com:tiemevanveen/demos.git
	cd demos
	cd buster-server-tests/
	npm install
	cd ..
	buster-server

Terminal window 2:
	cd demos
	cd buster-proxy-tests/
	buster-test

Result:

	"undefined"


