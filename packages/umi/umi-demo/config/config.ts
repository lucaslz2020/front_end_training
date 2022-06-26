import { defineConfig } from 'umi';
export default defineConfig({
  title: '测试',
  plugins: [require.resolve('@umijs/plugins/dist/model')],
  model: {}, // 必须配置model
});
