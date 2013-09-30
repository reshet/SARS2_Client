var config = module.exports;
/*config["My tests"] = {
	env:"node",
	tests:["test*//**"]


};*/
config["My tests"] = {
    environment: "node",        // or "node"

    sources: [
        //"src/mylib.js",    // Paths are relative to config file
        "src/**/*.js"      // Glob patterns supported
    ],
    tests: [
        "test/*-test.js"
    ]
};
