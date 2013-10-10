var config = exports;

config["Browser tests"] = {
    environment: "browser",
    sources: ["jquery.js"],
    tests: ["proxy-test.js"],
	resources: {
        "/en": "http://docs.busterjs.org:80/en/"
    }
};
