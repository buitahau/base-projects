import { Message } from '@/components/form-message';
import Logo from '@/components/icons/Logo';
import PasswordSignIn from '@/components/ui/web/AuthForms/PasswordSignIn';
import Card from '@/components/ui/web/Card';
import { getRedirectMethod } from '@/utils/auth-helpers/settings';

export default function SignIn({ searchParams }: { searchParams: Message }) {
  const redirectMethod = getRedirectMethod();

  return (
    <div className="flex flex-col justify-between max-w-lg p-3 m-auto w-80">
      <div className="flex justify-center pb-12 ">
        <Logo width="64px" height="64px" />
      </div>
      <Card title="Sign In">
        <PasswordSignIn redirectMethod={redirectMethod} />
      </Card>
    </div>
  );
}
