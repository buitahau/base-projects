import { Note } from '@/types/note';
import { createClient } from '@/utils/supabase/client';

export const getNoteById = async (id: string): Promise<Note | null> => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('notes')
    .select('*')
    .eq('id', id)
    .returns<Note[]>();
  if (error) {
    console.log(error);
    throw error;
  }
  console.log(data);
  return data ? data[0] : null;
};

export const updateNote = async (
  note: Note
): Promise<{ data: any; error: any }> => {
  const supabase = createClient();
  const { id, ...body } = note;
  return await supabase.from('notes').update(body).eq('id', id);
};

export const getAllNotes = async (): Promise<Note[]> => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('notes')
    .select('*')
    .returns<Note[]>();
  if (error) {
    console.log(error);
    throw error;
  }
  console.log(data);
  return data;
};
