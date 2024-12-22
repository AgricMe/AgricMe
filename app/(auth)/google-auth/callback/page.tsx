'use client'

import DotLoader from '@/components/shared/dot-loader';
import { TokenStorage } from '@/lib/utils/localStorage';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from "react";

export default function Page() {
  const { push } = useRouter();
  const access_token = useSearchParams().get('access_token');
  console.log(access_token);
  

  useEffect(() => {
    if (access_token) {
      TokenStorage.store(access_token);
      push("/dashboard"); 
    }
  }, [push, access_token]);

  return <div className='flex justify-center items-center h-screen'>
    <DotLoader  />    
  </div>
};
