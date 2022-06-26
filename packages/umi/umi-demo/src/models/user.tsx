import { useCallback, useState } from 'react';

export default function useAuthModal() {
  const [user, setUser] = useState('umi');
  const fetchUser = useCallback(() => {
    setUser('umi test');
  }, []);
  return { user, fetchUser };
}
