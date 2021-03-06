"use strict";
require.config({
    baseUrl: "/photos/scripts",
    paths: {
        "angular": "//ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular",
        "angular-resource": "//ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular-resource",
        "domReady": "//cdnjs.cloudflare.com/ajax/libs/require-domReady/2.0.1/domReady",
        "ui-router": "//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.13/angular-ui-router",
        "ui-router-extras" : "//cdn.rawgit.com/christopherthielen/ui-router-extras/master/release/ct-ui-router-extras"
    },
    shim: {
        "angular": {
            exports: "angular"
        },
        "angular-resource": {
            deps: ["angular"]
        },
        "ui-router": {
        	deps: ["angular"]
        },
        "ui-router-extras": {
        	deps: ["ui-router"]
        }
    }
});

require(['domReady!', 'angular', 'app'], function (document, angular) {
  angular.bootstrap(document, ['app']);
});
