// Testing methodology obtained from https://codeutopia.net/blog/2016/06/10/mongoose-models-and-unit-tests-the-definitive-guide/

const expect = require("chai").expect;

const Group = require("../models/Groups");

describe("group", function() {
    it("should be invalid if organizer is empty", function(done) {
        const g = new Group(
            {
                groupTitle: "test",
                gameTitle: "test",
                location: "test",
                gameType: "test"
            }
        );
        g.validate(function(err) {
            expect(err.errors.organizer).to.exist;
            done();
        });
    });
    it("should be invalid if groupTitle is empty", function(done) {
        const g = new Group(
            {
                organizer: "test",
                gameTitle: "test",
                location: "test",
                gameType: "test"
            }
        );
        g.validate(function(err) {
            expect(err.errors.groupTitle).to.exist;
            done();
        })
    })
    it("should be invalid if gameTitle is empty", function(done) {
        const g = new Group(
            {
                organizer: "test",
                groupTitle: "test",
                location: "test",
                gameType: "test"
            }
        );
        g.validate(function(err) {
            expect(err.errors.gameTitle).to.exist;
            done();
        });
    });
    it("should be invalid if location is empty", function(done) {
        const g = new Group(
            {
                organizer: "test",
                groupTitle: "test",
                gameTitle: "test",
                gameType: "test"
            }
        );
        g.validate(function(err) {
            expect(err.errors.location).to.exist;
            done();
        });
    });
    it("should be invalid if gameType is empty", function(done) {
        const g = new Group(
            {
                organizer: "test",
                groupTitle: "test",
                gameTitle: "test",
                location: "test"
            }
        );
        g.validate(function(err) {
            expect(err.errors.gameType).to.exist;
            done();
        });
    });
    it("should pass if all required attributes are present", function(done) {
        const g = new Group(
            {
                organizer: "test",
                groupTitle: "test",
                gameTitle: "test",
                location: "test",
                gameType: "test"
            }
        );
        g.validate(function(err) {
            expect(err).to.not.exist;
            done();
        });
    });
});