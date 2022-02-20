namespace NameSpace {
  const pi = Math.PI;
  // 使用export 导出。
  export const circle = (r: number) => pi * r ** 2;
}

namespace NameSpace {
  export const square = (r: number) => r ** 2;
}

NameSpace.circle(1);
NameSpace.square(1);
