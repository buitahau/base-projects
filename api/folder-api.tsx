import { FolderType } from '@/types/folder';
import { createClient } from '@/utils/supabase/client';

const TABLE_NAME = 'folder';

export const getFolderById = async (id: string): Promise<FolderType | null> => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select('*')
    .eq('id', id);
  return data ? data[0] : null;
};

export const getFolderByParentId = async (
  parent_id: string
): Promise<FolderType[]> => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select('*')
    .eq('parent_id', parent_id);
  return data ? data : [];
};

export const createFolder = async (folder: FolderType): Promise<FolderType> => {
  const supabase = createClient();
  const { data, error } = await supabase.from(TABLE_NAME).insert(folder);
  if (error) throw error;
  if (!data || !data[0]) throw new Error('Failed to create folder');
  return data[0];
};
