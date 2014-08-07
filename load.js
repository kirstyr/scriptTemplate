;(function() {

	'use strict';

	window.windowLoad = {

		init: function() {

			for(var funcs in windowLoad) {

				if(funcs == 'init') continue;

				windowLoad[funcs]();

			}

		},

		load: function() {

			console.log('load');

		}

	}

	$(window).load(function() {

		windowLoad.init();

	});

})();