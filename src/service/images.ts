import { ApiResponse } from '@/types/response';
import axios from '../utils/axios';
import { ImageDataType } from '@/types/imageDataType';

export const fetchImagesData = async (): Promise<ImageDataType[] | null> => {
  try {
    const response = await axios.get<ImageDataType[]>('/api/v1/images');
    return response.data || null;
  } catch (error) {
    console.error('There was an error!', error);
    return null;
  }
};