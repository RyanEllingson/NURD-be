// Testing methodology obtained from https://codeutopia.net/blog/2016/06/10/mongoose-models-and-unit-tests-the-definitive-guide/
const expect = require("chai").expect;

describe("canary test", function() {
    it("should pass this canary test", function(done) {
        expect(true).to.equal(true);
        done();
    });
})