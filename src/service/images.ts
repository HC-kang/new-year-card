import { ApiResponse } from '@/types/response';
import { ImageDataType } from '@/types/imageDataType';

export const fetchImagesData = async (): Promise<ImageDataType[] | null> => {
  try {
    // const response = await axios.get<ImageDataType[]>('/api/v1/images');
    return response.data || null;
  } catch (error) {
    console.error('There was an error!', error);
    return null;
  }
};

export const postImageData = async (value: string): Promise<{ url: string }> => {
  try {
    // const response = await axios.post<{url: string}>('/api/v1/generate-image', { value });
    return response.data;
  } catch (error) {
    console.error('There was an error!', error);
    return { url: '' };
  }
}