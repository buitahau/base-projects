import { getDefaultSignInUrl } from '@/utils/auth-helpers/settings';
import { redirect } from 'next/navigation';

export default function SignIn() {
  return redirect(`${getDefaultSignInUrl()}`);
}
