import React from 'react';
import { useOutlet } from 'umi';

export default function () {
  const outlet = useOutlet();
  return (
    <div>
      Layout
      {outlet}
    </div>
  );
}
