angular.module('simple.modal', ['ngFx'])
.directive('ssModal', ['Modal',function(Modal) {
  return {
    restrict: 'EA',
    transclude: true,
    replace: true,
    templateUrl: 'app/modal/modal.html',
    link: function(scope) {
      scope.modal = Modal;
      var body = angular.element(document.body);
      console.log(body[0].offsetHeight);
    }
  };
}])
.factory('Modal', [function() {
  var isOpen = false;
  var modal =  {
    open: function() {
      modal.trigger = true;
      isOpen = true;
    },
    close: function() {
      console.log('close');
      modal.trigger = false;
      isOpen = false;
    },
    toggle: function() {
      if (isOpen) {
        modal.close();
      } else {
        modal.open();
      }
    },
    trigger: false
  };

  return modal;
}]);
