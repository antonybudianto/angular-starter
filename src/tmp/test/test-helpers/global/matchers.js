beforeEach(function () {
    jasmine.addMatchers({
        toContainText: function () {
            return {
                compare: function (actual, expectedText) {
                    var actualText = actual.textContent;
                    return {
                        pass: actualText.indexOf(expectedText) > -1,
                        get message() { return 'Expected ' + actualText + ' to contain ' + expectedText; }
                    };
                }
            };
        }
    });
});

//# sourceMappingURL=matchers.js.map
