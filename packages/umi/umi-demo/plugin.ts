import { IApi } from 'umi';

export default (api: IApi) => {
  process.env.COMPORESS = 'none';
  api.modifyConfig((memo) => {
    memo.title = 'Hello Umi';
    return memo;
  });
};
