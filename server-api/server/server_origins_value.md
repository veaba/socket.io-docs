## server.origins([value])

- `values` (String|String[])
- **Returns** `Server|String`

设置允许的origins`values`。默认为允许的任何来源。如果没有提供参数，此方法将返回当前值。

```js
// 常用保护链接的措施，生产环境下应该考虑去设置origins
io.origins(['https://foo.example.com:443'])
```