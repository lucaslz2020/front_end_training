import { defineConfig } from 'umi';
export default defineConfig({
  title: '测试',
  plugins: [
    require.resolve('@umijs/plugins/dist/model'),
    require.resolve('@umijs/plugins/dist/antd'),
  ],
  model: {}, // 必须配置model
  antd: {}, // 必须要有这个，不然antd的样式不会生效。
});
