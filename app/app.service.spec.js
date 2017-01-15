describe('AppService', function() {
    beforeEach(module('app'));

    var AppService;

    beforeEach(inject(function(_AppService_) {
        AppService = _AppService_;
    }));

    describe('calcArea function', function() {
        it('should return 314 for radius 10', function() {
            expect(AppService.calcCircleArea(10)).toBe(314);
        });
    });
});
