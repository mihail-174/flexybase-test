module.exports = {
    root: true,
    levels: {
        'common.blocks': {},
        'src/template/desktop.blocks': {default: true}
    },
    "modules": {
        "bem-tools": {
            "plugins": {
                "create": {
                    // "techs": ["pug", "scss", "js"],
                    "templateFolder": ".bem",
                    "templates": {
                        // "scss-ymodules": ".bem/templates/scss",
                        "pug-ymodules": ".bem/templates/pug",
                        // "js-ymodules": ".bem/templates/js"
                    },
                    "techsTemplates": {
                        // "scss": "scss-ymodules",
                        "pug": "pug-ymodules",
                        // "js": "js-ymodules"
                    },
                    "levels": {
                        "src/template/page": {
                            techs: "pug",
                            default: true
                        },
                        "src/template/components": {
                            techs: "pug",
                        },
                        // "src/template/page": {
                        //     techs: "pug",
                        //     default: true
                        // },
                        // "src/template/page2": {
                        //     techs: "pug"
                        // },
                    }
                }
            }
        }
    }
}
