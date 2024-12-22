'use client'

import DotLoader from '@/components/shared/dot-loader';
import { TokenStorage } from '@/lib/utils/localStorage';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from "react";

const Page = () => {
  const { push } = useRouter();
  const access_token = useSearchParams().get('access_token');  

  useEffect(() => {
    if (access_token) {
      TokenStorage.store(access_token);
      push("/dashboard"); 
    }
  },[]);

  return <div className='flex justify-center items-center h-screen'>
    <DotLoader  />    
  </div>
};

export default Page;