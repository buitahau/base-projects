import { Note } from '@/types/note';
import { createClient } from '@/utils/supabase/client';

export const getNoteById = async (id: string) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('notes')
    .select('*')
    .eq('id', id)
    .returns<Note>();
  if (error) {
    console.log(error);
    return;
  }
  return data;
};
