var strftime = window.strftime;

var assert = buster.assert;

buster.testCase("Ajax Testcase", {

	setUp: function () {
        this.timeout = 5000;
	},

    "Should get http://docs.busterjs.org/en/latest/": function (done) {
        
		$.ajaxSetup({timeout:1000});

		$.ajax("en/latest/").done(function(evt) {
            
            done();

		}).fail(function(evt) {

			assert(false); // test still times out..

		});

    }
});