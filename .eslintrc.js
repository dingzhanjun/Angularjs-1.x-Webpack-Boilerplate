module.exports = {
    "parser":"babel-eslint",
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "plugins": [
        "flowtype"
    ],
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "arrow-body-style": 0,
        "spaced-comment": 0,
        "no-shadow": 0,
        "comma-dangle": 0,
        "flowtype/require-parameter-type": 2,
        "flowtype/require-return-type": [
            2,
            "always",
            {
                "annotateUndefined": "never"
            }
        ],
        "flowtype/space-after-type-colon": [
            2,
            "never"
        ],
        "flowtype/space-before-type-colon": [
            2,
            "never"
        ],
        "flowtype/type-id-match": [
            1,
            "^([A-Z][a-z0-9]+)+Type$"
        ],
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
