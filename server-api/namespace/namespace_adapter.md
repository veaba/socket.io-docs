## namespace.adapter

- (Adapter)

用于命名空间的适配器。当使用基于redis的适配器时很有用，因为它公开了跨集群管理socket和房间的方法。

**注意**：主命名空间的适配器可以使用`io.of('/').adapter`访问。