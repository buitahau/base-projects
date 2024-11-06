import { createClient } from '@/utils/supabase/client';

const uploadImage = async (file: File | null) => {
  if (!file) return;
  const supabase = createClient();
  const { data, error } = await supabase.storage
    .from('resources')
    .upload(`images/gallery/${generateUniqueName(file)}`, file, {
      cacheControl: '3600',
      upsert: false
    });
  if (error) {
    console.log(error);
    throw error;
  }
  return data;
};

const generateUniqueName = (file: File) => {
  const timestamp = new Date().getTime();
  const extension = file.name.split('.').pop() || '';
  return `${timestamp}.${extension}`;
};

export const deleteFile = async (path: string) => {
  const supabase = createClient();
  const { error } = await supabase.storage.from('resources').remove([path]);
  if (error) {
    console.log(error);
    throw error;
  }
};

export default uploadImage;
