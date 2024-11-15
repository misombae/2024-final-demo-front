module.exports = {
  root: true,
  plugins: ['stylelint-order', 'stylelint-scss'],
  extends: ['stylelint-config-standard', 'stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  syntax: 'scss',
  rules: {
    'at-rule-no-unknown': null,
    'function-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'order/properties-alphabetical-order': true,
    'no-descending-specificity': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'no-invalid-double-slash-comments': null,
    'no-duplicate-selectors': null,
    'selector-class-pattern': null,
    'function-url-quotes': null,
    'selector-no-vendor-prefix': null,
    'number-max-precision': null,
    'value-no-vendor-prefix': null,
    'property-no-vendor-prefix': null,
    'block-no-empty': true,
    'color-no-invalid-hex': true,
    'color-named': 'never',
    'custom-property-no-missing-var-function': true,
    'declaration-block-no-duplicate-custom-properties': true,
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'keyframe-block-no-duplicate-selectors': true,
    'keyframe-declaration-no-important': true,
    'media-feature-name-no-unknown': true,
    'no-duplicate-at-import-rules': true,
    'no-empty-source': true,
    'no-irregular-whitespace': true,
    'property-no-unknown': true,
    'string-no-newline': true,
    'unit-no-unknown': true,
    'alpha-value-notation': ['number'],
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment']
      }
    ],
    'at-rule-no-vendor-prefix': true,
    'color-function-notation': 'legacy',
    'color-hex-length': 'short',
    'comment-empty-line-before': 'never',
    'comment-whitespace-inside': 'always',
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-custom-property', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block']
      }
    ],
    'custom-media-pattern': ['^([a-z][a-z0-9]*)(-[a-z0-9]+)*$'],
    'custom-property-pattern': ['^([a-z][a-z0-9]*)(-[a-z0-9]+)*$'],
    'function-name-case': 'lower',
    'hue-degree-notation': 'angle',
    'import-notation': 'string',
    'keyframes-name-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected keyframe name to be kebab-case'
      }
    ],
    'length-zero-no-unit': true,
    'media-feature-range-notation': 'prefix',
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment']
      }
    ],
    'selector-attribute-quotes': 'always',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep']
      }
    ],
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',
    'value-keyword-case': 'lower'
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts']
}
