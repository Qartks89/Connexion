(function () {
    angular
        .module("Connexion")
        .controller("SearchController", SearchController);

    function SearchController($http, PageService, $location) {
        var vm = this;

        vm.goBack = goBack;

        function goBack() {
            $location.url(PageService.getPrevPage());
        }

        vm.searchText = "";
        vm.data = [];
        $http.get('./assests/connexion-dummy.json').success(function (data) {
            vm.data = data;
            vm.data = vm.data.slice(0, 5);
        });


        vm.data2 = [];
        $http.get('./assests/connexion-dummy.json').success(function (data) {
            vm.data2 = data;
            vm.data2 = vm.data2.slice(0, 10);
        });
    }

})();