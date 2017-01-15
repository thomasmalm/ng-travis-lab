describe('App', function() {
    beforeEach(function() {
        browser.get('index.html');
    });

    it('should calculate correct area', function() {
        element(by.model('vm.radius')).sendKeys(10);
        element(by.buttonText('Calculate')).click();

        var result = element(by.binding('vm.result'));

        expect(result.getText()).toEqual('Area: 314');
    });
});
