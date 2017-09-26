angular.module("umbraco").controller("tooorangey.XPathOfLeastResistanceController", function ($scope, $http, entityResource, contentResource, navigationService,editorState) {
    var vm = this;
    vm.status = {
        loading: false
    }
    vm.pathInfo = {
        xPath: "",
        pathIds: []
    }

    vm.overlay = {
        show: false,
        pathInfo: vm.pathInfo,
        view: '/app_plugins/tooorangey.XPathOfLeastResistance/advice.html',
        close: function (oldModel) {
            vm.overlay.show = false;
        },
        title: 'Friendly Contextual XPath Advice'
    }
    vm.showAdvice = showAdvice;


    function init() {
        vm.status.loading = true;
        //get the current path property of the current id
        console.log(editorState.current.path);
        vm.pathInfo.pathIds = editorState.current.path.split(',');

        //vm.content.id = parseInt(currentContentItem.id);
        // use getbyids to retrieve all the parent items
        contentResource.getByIds(vm.pathInfo.pathIds).then(function (pathContentArray) {
            console.log(pathContentArray);
            //get the documenttype alias for the path
            vm.pathInfo.xPath = "/root/" + $.map(pathContentArray, function (content) { return content.contentTypeAlias }).join('/');
            vm.overlay.pathInfo = vm.pathInfo;
            vm.status.loading = false;
   });
    };

    function showAdvice() {
        vm.overlay.show = true;
    }
   

 
    init();
});