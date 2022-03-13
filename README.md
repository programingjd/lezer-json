# lezer_json_lenient

This is a lenient JSON grammar for the [lezer](https://lezer.codemirror.net/) parser system.

Comments are allowed:
- line comments `// ...`
- block comments `/* ... */`

Trailing commas are allowed:

```json5
{
  "key1": "value1",
  "key2": [
    1, 2, 3,
  ],
  "key3": "value3",
}
```

Single and back quotes are allowed, and unquoted keys are allowed as well:

```json5
{
  "double_quoted_key": 'single_quoted_value',
  'single_quoted_key': `back_quoted_value`,
  `back_quoted_key`: "double_quoted_value",
  unquoted_key: ""
}
```

Decimal values with no leading or trailing digits are allowed:
```json5
{
  "no_leading_zero": .125,
  "no_trailing_zero": 2.,
  "even_with_exponents": 1.e+3
}
```
