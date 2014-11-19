$(function(){

	function runScripts(){

		var setup = {

			init: function(){

				for(var funcs in readyFunctions) {

					try {

						readyFunctions[funcs]();

					} catch(error) {

						console.group('[Hey noob, you broke '+funcs+'... look below] - ' + error['message']);
						console.info(error['stack'].split('\n')[1]);
						console.groupEnd();

					}

				}

				$(window).load(function(){

					for(var funcs in loadFunctions) {

						try {

							loadFunctions[funcs]();

						} catch(error) {

							console.group('[Hey noob, you broke '+funcs+'... look below]');
							console.info(error['stack'].split('\n')[1]);
							console.groupEnd();

						}

					}

				});

				$(window).resize(function(){

					for(var funcs in resizeFunctions) {

						try {

							resizeFunctions[funcs]();

						} catch(error) {

							console.group('[Hey noob, you broke '+funcs+'... look below]');
							console.info(error['stack'].split('\n')[1]);
							console.groupEnd();

						}

					}

				});

				var time;

				$(window).scroll(function(){

					clearTimeout(time);

					time = setTimeout(function(){

						for(var funcs in scrollFunctions) {

							try {

								scrollFunctions[funcs]();

							} catch(error) {

								console.group('[Hey noob, you broke '+funcs+'... look below]');
								console.info(error['stack'].split('\n')[1]);
								console.groupEnd();

							}

						}

					}, 100);

				});

			}

		}

		setup.init();

	}

	window.loadFunctions = {

		method1: function() {

			console.log('load functions ready');

		},

		method2: function() {

		}

	}
	//loaded

	window.scrollFunctions = {

		method1: function() {

			console.log('scroll functions ready');

		},

		method2: function() {

		}

	}
	//scrolled

	window.resizeFunctions = {

		method1: function() {

			console.log('resize functions ready');

		},

		method2: function() {

		}

    }
    //resized
	
	window.readyFunctions  = {


		method1: function() {

			console.log('ready functions ready');

		},

		method2: function() {

		}

	}
	//ready

	runScripts();

});
