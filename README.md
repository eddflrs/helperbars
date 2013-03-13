Helperbars
==========

A collection of helpers for handlebars.

**Comparisons**

The following comparison operators are supported:

  * equals - `_eq`
  * not equals - `_ne`
  * less than - `_lt`
  * less than or equal to - `_lte`
  * greater than - `_gt`
  * greater than or equal to - `_gte`

All can be used in typical `if ... else` form:

```handlebars
{{#_eq foo bar}} // or: _ne, _lt, _lte, _gt, _gte
  foo equals bar
{{else}} // optional else
  foo is not equal to bar
{{/_eq}}
```

**Uppercase**

```handlebars
{{_upper 'hello'}}  // -> HELLO
```

**Lowercase**

```handlebars
{{_lower 'HELLO'}}  // -> hello
```

**Capitalize**

```handlebars
{{_capitalize 'hello'}}  // -> Hello
```

**Reverse**

```handlebars
{{_reverse 'hello'}} // -> olleh
```

**Trim**

```handlebars
{{_trim '    hello '}} // -> hello
```

**SafeString**

```handlebars
{{_safe '<b>This in bold</b>'}} // -> This in bold
```

**Absolute**

```handlebars
{{_absolute -100}} // -> 100
```