/*! For license information please see builtIcons-m2t8lsbv.js.LICENSE.txt */

(() => {
    var modules = {
        625: (module, exports, require) => {
            var iconMap = {
                "./apple-and-book-complexity-3.svg": 260,
                "./arrow_filled_bottom.svg": 502,
                "./arrow_small_bottom.svg": 30,
                "./arrow_small_left.svg": 216,
                "./arrow_small_right.svg": 43,
                "./arrow_small_top.svg": 129,
                "./asterisk.svg": 80,
                "./barchartdown-complexity-3.svg": 698,
                "./briefcase-complexity-32.svg": 902,
                "./businessgrowth-complexity-3.svg": 802,
                "./businessnote-complexity-3.svg": 660,
                "./businessperformance-complexity-3.svg": 722,
                "./calendar.svg": 948,
                "./chatcheckdouble-complexity-3.svg": 571,
                "./conversationmarketing-complexity-3.svg": 757,
                "./idea.svg": 391,
                "./keyboard_arrow_right.svg": 780,
                "./laptop-complexity-3.svg": 311,
                "./live_tv.svg": 471,
                "./megaphone-complexity-3.svg": 525,
                "./shoppingcart-complexity-3.svg": 255,
                "./stars-complexity-3.svg": 728,
                "./teamwork-complexity-3.svg": 342,
                "./time_outlined.svg": 806
            };

            function requireIcon(icon) {
                var id = resolve(icon);
                return require(id);
            }

            function resolve(icon) {
                if (!require.o(iconMap, icon)) {
                    var error = new Error("Cannot find module '" + icon + "'");
                    throw error.code = "MODULE_NOT_FOUND", error;
                }
                return iconMap[icon];
            }

            requireIcon.keys = () => Object.keys(iconMap);
            requireIcon.resolve = resolve;
            module.exports = requireIcon;
            requireIcon.id = 625;
        },
        858: (module) => {
            function errorModule(moduleName) {
                var error = new Error("Cannot find module '" + moduleName + "'");
                throw error.code = "MODULE_NOT_FOUND", error;
            }

            errorModule.keys = () => [];
            errorModule.resolve = errorModule;
            errorModule.id = 858;
            module.exports = errorModule;
        },
        316: (module, exports, require) => {
            var socialIconMap = {
                "./facebook.svg": 267,
                "./instagram.svg": 322,
                "./youtube.svg": 433
            };

            function requireSocialIcon(icon) {
                var id = resolve(icon);
                return require(id);
            }

            function resolve(icon) {
                if (!require.o(socialIconMap, icon)) {
                    var error = new Error("Cannot find module '" + icon + "'");
                    throw error.code = "MODULE_NOT_FOUND", error;
                }
                return socialIconMap[icon];
            }

            requireSocialIcon.keys = () => Object.keys(socialIconMap);
            requireSocialIcon.resolve = resolve;
            module.exports = requireSocialIcon;
            requireSocialIcon.id = 316;
        },
        // ... additional module definitions
    };

    var exports = {};
    function require(moduleId) {
        var module = modules[moduleId];
        if (module) return module(exports, require);
        throw new Error("Module not found: " + moduleId);
    }

    // Initialize the module system
    require(625); // Load the first module
})();