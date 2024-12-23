'use client'

import DotLoader from '@/components/shared/dot-loader';
import { TokenStorage } from '@/lib/utils/localStorage';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from "react";

export default function Page() {
  const { push } = useRouter();
  const searchParams = useSearchParams();  
  const access_token = searchParams.get('access_token')

  useEffect(() => {
    const storeToken = async () => {
      if (access_token) {
        await TokenStorage.store(access_token);
        push("/dashboard"); 
      }
    };
    storeToken();
  },[push, access_token]);

  return <div className='flex justify-center items-center h-screen'>
      <DotLoader  />    
  </div>
};