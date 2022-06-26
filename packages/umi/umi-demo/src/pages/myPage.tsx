import { useRequest } from 'ahooks';
import Mock from 'mockjs';
import React from 'react';
import styles from './myPage.less';

function getUsername(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 3000);
  });
}

export default function Page() {
  const { data, error, loading } = useRequest(getUsername);

  if (error) {
    return <div>Error</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <h1 className={styles.title}>Page myPage</h1>
    </div>
  );
}

const Page2 = () => {
  const { run, runAsync } = useRequest(getUsername, {
    manual: true,
    onSuccess: (result, params) => {
      console.log('result', result, params);
    },
  });
};
