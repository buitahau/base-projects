'use client';

import Logo from '@/components/icons/Logo';
import PasswordSignIn from '@/components/ui/web/AuthForms/PasswordSignIn';
import Card from '@/components/ui/web/Card';
import {
  getDefaultSignInUrl,
  getRedirectMethod,
  getViewTypes,
  passwordSigninSuffix
} from '@/utils/auth-helpers/settings';
import { redirect } from 'next/navigation';

export default function SignIn({ params }: { params: { id: string } }) {
  const viewTypes = getViewTypes();
  const redirectMethod = getRedirectMethod();

  let viewProp: string;
  // Assign url id to 'viewProp' if it's a valid string and ViewTypes includes it
  if (typeof params.id === 'string' && viewTypes.includes(params.id)) {
    viewProp = params.id;
  } else {
    return redirect(`${getDefaultSignInUrl()}`);
  }

  return (
    <div className="flex flex-col justify-between max-w-lg p-3 m-auto w-80">
      <div className="flex justify-center pb-12 ">
        <Logo width="64px" height="64px" />
      </div>
      <Card title="Sign In">
        {viewProp === passwordSigninSuffix && (
          <PasswordSignIn redirectMethod={redirectMethod} />
        )}
      </Card>
    </div>
  );
}
