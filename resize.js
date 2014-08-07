;(function() {

	'use strict';

	window.resize = {

		init: function() {

			for(var funcs in resize) {

				if(funcs == 'init') continue;

				resize[funcs]();

			}

		},

		resize: function() {

			console.log('resize');
			return 'lolocopter';

		}

	}

	$(window).resize(function() {

		resize.init();

	});

})();