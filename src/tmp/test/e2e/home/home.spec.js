describe('Home page', function () {
    beforeAll(function (done) {
        browser.get('/')
            .then(done);
    });
    it('should have image', function () {
        browser.sleep(1000);
        var ng2Img = element(by.css('img'));
        expect(ng2Img.isDisplayed()).toBeTruthy();
    });
});

//# sourceMappingURL=home.spec.js.map
