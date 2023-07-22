function skillsMember() {
  return {
    restrict: 'E',
    scope: {
      member: '=',
      skills: '='
    },
    templateUrl: 'templates/skills-member.html',
    controller: function($scope) {
      $scope.getSkill = function(id) {
        return $scope.skills.find(function(skill) {
          return skill.id === id;
        });
      };
    }
  };
}