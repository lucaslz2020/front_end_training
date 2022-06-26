// 阻断页面渲染的手段
// oldRender 旧页面的render
export function render(oldRender: any) {
  oldRender();
  // setTimeout(() => {
  //   oldRender();
  // }, 3000);
  // fetch('/api/auth').then((auth) => {
  //   if (auth.isLogin) {
  //     oldRender();
  //   } else {
  //     history.push('/login');
  //     oldRender();
  //   }
  // });
}
