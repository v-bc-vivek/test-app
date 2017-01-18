describe('directive', function() {
  var $httpBackend;

  beforeEach(function() {
    module('testApp');

    inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
    });
  });

  it('should load select\'s options from xhr on render', function() {
    inject(function($compile, $rootScope) {
      // Arrange
      $httpBackend.expectPOST('url').respond(["Ford", "Acura"]);
      var directive = $compile('<dropdowns></dropdowns>')($rootScope);

      // Act
      $httpBackend.flush(); // Simulates a response
      $rootScope.$digest(); // Triggers a digest cycle

      // Assert
      expect(directive.find('option').length).toBe(2); 
    });
  });
  it('should update the model when a new choice is selected', function() {
  console.log(angular.element(directive.find("select")));
  console.log('selected before = ' + angular.element(directive.find("select option:selected")).text());
  angular.element(directive.find("select")[0]).val(1);
  console.log('selected after = ' + angular.element(directive.find("select option:selected")).text());
  angular.element(directive.find("select")[0]).change();
  console.log('selected Text value = ' + angular.element(directive.find("select option:selected")).text());
  expect(scope.dropDownResponses[scope.dropDownField.name]).toBe("2");

    });
});