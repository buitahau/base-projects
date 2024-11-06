import { ImageType } from '@/types/image';
import { SearchImage } from '@/types/image/searchImage';
import { createClient } from '@/utils/supabase/client';

const TABLE_NAME = 'image';

export const getImageById = async (id: string): Promise<ImageType> => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select('*')
    .eq('id', id)
    .returns<ImageType[]>();
  if (error) throw error;
  if (data) {
    return data[0];
  }
  throw new Error('Image not found');
};

export const filterImages = async (
  searchData: SearchImage
): Promise<ImageType[]> => {
  const supabase = createClient();
  var query = supabase.from(TABLE_NAME).select('*');
  buildQuery(searchData, query);
  const { data, error } = await query
    .range(
      searchData.page * searchData.pageSize,
      (searchData.page + 1) * searchData.pageSize - 1
    )
    .returns<ImageType[]>();
  if (error) throw error;
  return data ? data : [];
};

const buildQuery = (searchData: SearchImage, query: any) => {
  if (searchData.name) {
    query = query.ilike('name', `%${searchData.name}%`);
  }
  if (searchData.folder_id) {
    query = query.eq('folder_id', searchData.folder_id);
  }
  if (searchData.show_in_slider) {
    query = query.eq('show_in_slider', searchData.show_in_slider);
  }
  if (searchData.show_in_gallery) {
    query = query.eq('show_in_gallery', searchData.show_in_gallery);
  }
  return query;
};

export const getImages = async (
  page: number,
  size: number
): Promise<ImageType[]> => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select('*')
    .range((page - 1) * size, page * size - 1)
    .eq('show_in_gallery', true)
    .returns<ImageType[]>();
  if (error) throw error;
  return data ? data : [];
};

export const getImagesByFolderId = async (
  folder_id: string | null,
  page: number,
  pageSize: number
): Promise<ImageType[]> => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select('*')
    .eq('folder_id', folder_id)
    .range((page - 1) * pageSize, page * pageSize - 1)
    .returns<ImageType[]>();
  if (error) throw error;
  return data ? data : [];
};

export const countImages = async (): Promise<number> => {
  const supabase = createClient();
  const { data, error, count } = await supabase
    .from(TABLE_NAME)
    .select('*', { count: 'exact', head: true });
  if (error) throw error;
  return count ? count : 0;
};

export const countImagesForSearch = async (
  searchData: SearchImage
): Promise<number> => {
  const supabase = createClient();
  var query = supabase
    .from(TABLE_NAME)
    .select('*', { count: 'exact', head: true });
  buildQuery(searchData, query);
  const { data, error, count } = await query;
  if (error) throw error;
  return count ? count : 0;
};

export const createImage = async (image: ImageType): Promise<ImageType> => {
  const supabase = createClient();
  image.created_at = new Date();
  const { data, error } = await supabase.from(TABLE_NAME).insert(image);
  if (error) {
    console.log('Failed to create image');
    throw error;
  }
  return image;
};

export const updateImage = async (image: ImageType): Promise<ImageType> => {
  console.log(image);
  const supabase = createClient();
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .update(image)
    .eq('id', image.id);
  if (error) throw error;
  return image;
};

export const deleteImage = async (id: string): Promise<void> => {
  const supabase = createClient();
  const { error } = await supabase.from(TABLE_NAME).delete().eq('id', id);
  if (error) throw error;
};

export const generateDefaultImage = (): ImageType => {
  return {
    id: '',
    name: '',
    url: '',
    folder_id: '',
    created_at: new Date(),
    show_in_slider: false,
    show_in_gallery: false
  };
};

export const getImagesToShowInSlider = async (): Promise<ImageType[]> => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select('*')
    .eq('show_in_slider', true)
    .returns<ImageType[]>();
  if (error) throw error;
  return data ? data : [];
};

export const getImageUrl = (url: string): string => {
  return `${process.env.NEXT_PUBLIC_IMAGE_PUBLIC_URL}${url}`;
};
