/// <reference path="../../../node_modules/angular2/typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../node_modules/angular2/typings/angular-protractor/angular-protractor.d.ts" />

describe('Home page', () => {
    beforeAll(done => {
        browser.get('/')
        .then(done);
    });

    it('should have image', () => {
        browser.sleep(1000);
        let ng2Img = element(by.css('img'));
        expect(ng2Img.isDisplayed()).toBeTruthy();
    });
});
