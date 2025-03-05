/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_URL } from '../Conf';

export function getApiUrl(url: string) {
  return `${API_URL}${url}`;
}
//TODO: MUST REMOVE THIS LINE 
export function formatDate(timestamp: any) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }

  export const getImageSrc = (cover: string) => {
    return cover.startsWith("data:image")
      ? cover
      : `data:image/jpeg;base64,${cover}`;
  };