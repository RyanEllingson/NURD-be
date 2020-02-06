const expect = require("chai").expect;

const User = require("../models/User");

describe("user", function() {
    it("should be invalid if name is empty", function(done) {
        const u = new User(
            {
                email: "test",
                password: "test",
                age: 1,
                gender: "test"
            }
        );
        u.validate(function(err) {
            expect(err.errors.name).to.exist;
            done();
        });
    });
    it("should be invalid if email is empty", function(done) {
        const u = new User(
            {
                name: "test",
                password: "test",
                age: 1,
                gender: "test"
            }
        );
        u.validate(function(err) {
            expect(err.errors.email).to.exist;
            done();
        });
    });
    it("should be invalid if password is empty", function(done) {
        const u = new User(
            {
                name: "test",
                email: "test",
                age: 1,
                gender: "test"
            }
        );
        u.validate(function(err) {
            expect(err.errors.password).to.exist;
            done();
        });
    });
    it("should be invalid if age is empty", function(done) {
        const u = new User(
            {
                name: "test",
                email: "test",
                password: "test",
                gender: "test"
            }
        );
        u.validate(function(err) {
            expect(err.errors.age).to.exist;
            done();
        });
    });
    it("should be invalid if gender is empty", function(done) {
        const u = new User(
            {
                name: "test",
                email: "test",
                password: "test",
                age: 1
            }
        );
        u.validate(function(err) {
            expect(err.errors.gender).to.exist;
            done();
        });
    });
    it("should pass if all required attributes are present", function(done) {
        const u = new User(
            {
                name: "test",
                email: "test",
                password: "test",
                age: 1,
                gender: "test"
            }
        );
        u.validate(function(err) {
            expect(err).to.not.exist;
            done();
        });
    });
});