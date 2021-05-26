# Atomic operations

在taichi中, 复合赋值算法 (e.g., `x[i] += 1`) 是通过原子运算完成的 [atomic](https://en.wikipedia.org/wiki/Fetch-and-add)。

::: 警告

当并行的对全局变量修改时, 请确保使用的是原子运算。例如， 例如对`x`的所有元素求和 :

    @ti.kernel
    def sum():
        for i in x:
            # Approach 1: OK
            total[None] += x[i]
    
            # Approach 2: OK
            ti.atomic_add(total[None], x[i])
    
            # Approach 3: Wrong result since the operation is not atomic.
            total[None] = total[None] + x[i]

:::

::: 注解

当原子操作被用于局部变量, taichi的编译器会试图用非原子运算的计算符代替。:::

除了增加的功能, 可以显式的使用原子运算, 例如 `ti.atomic_add`, 也会原子化的进行进行 读取-修改-写入。 这样的操作还会返回第一个参数的 **原始值** 。

如下为一系列显式的原子运算:

::: {.function} ti.atomic_add(x, y)
:::

::: {.function} ti.atomic_sub(x, y)

原子化的计算 `x + y` or `x - y` 并且将结果存入 `x`.

返回
:

 `x` 的初始值.

例如, :

    x[i] = 3
    y[i] = 4
    z[i] = ti.atomic_add(x[i], y[i])
    # now x[i] = 7, y[i] = 4, z[i] = 3

:::

::: {.function} ti.atomic_and(x, y)
:::

::: {.function} ti.atomic_or(x, y)
:::

::: {.function} ti.atomic_xor(x, y)

原子化的计算 `x & y` (按位取与), `x | y` (按位取或), or `x ^ y` (按位取异或), 并将结果存入 in `x`.

返回
:

 `x`的初始值.
:::

::: 注解

在不同后端上对原子运算的支持:

| type | CPU/CUDA | OpenGL | Metal | C source |
| ---- | -------- | ------ | ----- | -------- |
| i32  | > OK     | > OK   | > OK  | > OK     |
| f32  | > OK     | > OK   | > OK  | > OK     |
| i64  | > OK     | > EXT  | > N/A | > OK     |
| f64  | > OK     | > EXT  | > N/A | > OK     |

(OK: 支持; EXT: 需要扩展; N/A: 不支持)
:::
