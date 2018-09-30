'use strict';

module.exports = {
    plugins: ['stylelint-order'],
    rules: {
        'at-rule-blacklist': null,
        'at-rule-empty-line-before': 'always',
        'at-rule-name-case': 'lower',
        'at-rule-name-newline-after': 'always-multi-line',
        'at-rule-name-space-after': null,
        'at-rule-no-unknown': true,
        'at-rule-no-vendor-prefix': true,
        'at-rule-semicolon-newline-after': 'always',
        'at-rule-semicolon-space-before': 'never',
        'at-rule-whitelist': null,
        'block-closing-brace-empty-line-before': 'never',
        'block-closing-brace-newline-after': 'always',
        'block-closing-brace-newline-before': 'always',
        'block-closing-brace-space-after': null,
        'block-closing-brace-space-before': null,
        'block-no-empty': true,
        'block-opening-brace-newline-after': 'always',
        'block-opening-brace-newline-before': null,
        'block-opening-brace-space-after': null,
        'block-opening-brace-space-before': 'always',
        'color-hex-case': 'lower',
        'color-hex-length': 'long',
        'color-named': null,
        'color-no-hex': null,
        'color-no-invalid-hex': true,
        'comment-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['after-comment', 'stylelint-commands']
            }
        ],
        'comment-no-empty': true,
        'comment-whitespace-inside': 'always',
        'comment-word-blacklist': null,
        'custom-media-pattern': null,
        'custom-property-empty-line-before': 'never',
        'custom-property-pattern': null,
        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-block-no-duplicate-properties': true,
        'declaration-block-no-redundant-longhand-properties': null,
        'declaration-block-no-shorthand-property-overrides': true,
        'declaration-block-semicolon-newline-after': 'always',
        'declaration-block-semicolon-newline-before': 'never-multi-line',
        'declaration-block-semicolon-space-after': null,
        'declaration-block-semicolon-space-before': 'never',
        'declaration-block-single-line-max-declarations': 1,
        'declaration-block-trailing-semicolon': 'always',
        'declaration-colon-newline-after': 'always-multi-line',
        'declaration-colon-space-after': 'always-single-line',
        'declaration-colon-space-before': 'never',
        'declaration-empty-line-before': 'never',
        'declaration-no-important': true,
        'declaration-property-unit-blacklist': {},
        'declaration-property-unit-whitelist': null,
        'declaration-property-value-blacklist': {},
        'declaration-property-value-whitelist': null,
        'font-family-name-quotes': 'always-unless-keyword',
        'font-family-no-duplicate-names': true,
        'font-family-no-missing-generic-family-keyword': true,
        'font-weight-notation': 'named-where-possible',
        'function-blacklist': null,
        'function-calc-no-unspaced-operator': true,
        'function-comma-newline-after': 'always-multi-line',
        'function-comma-newline-before': 'never-multi-line',
        'function-comma-space-after': 'always-single-line',
        'function-comma-space-before': 'never',
        'function-linear-gradient-no-nonstandard-direction': true,
        'function-max-empty-lines': 0,
        'function-name-case': 'lower',
        'function-parentheses-newline-inside': 'always-multi-line',
        'function-parentheses-space-inside': 'never-single-line',
        'function-url-no-scheme-relative': true,
        'function-url-quotes': 'always',
        'function-url-scheme-blacklist': null,
        'function-url-scheme-whitelist': null,
        'function-whitelist': null,
        'function-whitespace-after': 'always',
        indentation: 4,
        'keyframe-declaration-no-important': true,
        'keyframes-name-pattern': null,
        'length-zero-no-unit': true,
        linebreaks: 'unix',
        'max-empty-lines': 1,
        'max-line-length': 80,
        'max-nesting-depth': 4,
        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-name-blacklist': null,
        'media-feature-name-case': 'lower',
        'media-feature-name-no-unknown': true,
        'media-feature-name-no-vendor-prefix': true,
        'media-feature-name-value-whitelist': null,
        'media-feature-name-whitelist': null,
        'media-feature-parentheses-space-inside': 'never',
        'media-feature-range-operator-space-after': 'always',
        'media-feature-range-operator-space-before': 'always',
        'media-query-list-comma-newline-after': 'always',
        'media-query-list-comma-newline-before': 'never-multi-line',
        'media-query-list-comma-space-after': 'always-single-line',
        'media-query-list-comma-space-before': 'never',
        'no-descending-specificity': true,
        'no-duplicate-at-import-rules': true,
        'no-duplicate-selectors': true,
        'no-empty-first-line': true,
        'no-empty-source': true,
        'no-eol-whitespace': true,
        'no-extra-semicolons': true,
        'no-invalid-double-slash-comments': true,
        'no-missing-end-of-source-newline': true,
        'no-unknown-animations': true,
        'number-leading-zero': 'always',
        'number-max-precision': null,
        'number-no-trailing-zeros': true,
        'order/order': [
            'custom-properties',
            'dollar-variables',
            'at-variables',
            'declarations',
            'rules',
            'at-rules',
            'less-mixins'
        ],
        'order/properties-alphabetical-order': true,
        'property-blacklist': null,
        'property-case': 'lower',
        'property-no-unknown': true,
        'property-no-vendor-prefix': true,
        'property-whitelist': null,
        'rule-empty-line-before': [
            'always',
            {
                except: [
                    'after-single-line-comment',
                    'first-nested'
                ]
            }
        ],
        'selector-attribute-brackets-space-inside': 'never',
        'selector-attribute-operator-blacklist': null,
        'selector-attribute-operator-space-after': 'always',
        'selector-attribute-operator-space-before': 'always',
        'selector-attribute-operator-whitelist': null,
        'selector-attribute-quotes': 'always',
        'selector-class-pattern': null,
        'selector-combinator-blacklist': null,
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-combinator-whitelist': null,
        'selector-descendant-combinator-no-non-space': true,
        'selector-id-pattern': null,
        'selector-list-comma-newline-after': 'always-multi-line',
        'selector-list-comma-newline-before': 'never-multi-line',
        'selector-list-comma-space-after': 'always-single-line',
        'selector-list-comma-space-before': 'never',
        'selector-max-attribute': 4,
        'selector-max-class': 6,
        'selector-max-combinators': 6,
        'selector-max-compound-selectors': 4,
        'selector-max-empty-lines': 0,
        'selector-max-id': 1,
        'selector-max-pseudo-class': 4,
        'selector-max-specificity': null,
        'selector-max-type': 6,
        'selector-max-universal': 1,
        'selector-nested-pattern': null,
        'selector-no-qualifying-type': null,
        'selector-no-vendor-prefix': true,
        'selector-pseudo-class-blacklist': null,
        'selector-pseudo-class-case': 'lower',
        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-class-parentheses-space-inside': 'never',
        'selector-pseudo-class-whitelist': null,
        'selector-pseudo-element-blacklist': null,
        'selector-pseudo-element-case': 'lower',
        'selector-pseudo-element-colon-notation': 'double',
        'selector-pseudo-element-no-unknown': true,
        'selector-pseudo-element-whitelist': null,
        'selector-type-case': 'lower',
        'selector-type-no-unknown': true,
        'shorthand-property-no-redundant-values': null,
        'string-no-newline': true,
        'string-quotes': 'single',
        'time-min-milliseconds': null,
        'unit-blacklist': null,
        'unit-case': 'lower',
        'unit-no-unknown': true,
        'unit-whitelist': null,
        'value-keyword-case': 'lower',
        'value-list-comma-newline-after': 'always-multi-line',
        'value-list-comma-newline-before': 'never-multi-line',
        'value-list-comma-space-after': 'always-single-line',
        'value-list-comma-space-before': 'never',
        'value-list-max-empty-lines': 0,
        'value-no-vendor-prefix': true
    }
};
