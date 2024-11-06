import { createClient } from '@/utils/supabase/client';

export const logout = async (): Promise<void> => {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('Error during logout:', error);
  }
};
