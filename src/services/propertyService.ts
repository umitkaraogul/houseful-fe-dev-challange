import { config } from '@/config';
import { Property } from '@/types';

export default class propertyService {
  private static baseUrl = `${config.apiUrl}/properties`;

  static async getProperties(filter: string): Promise<Property[]> {
    const url = `${this.baseUrl}?${filter}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong on fetch');
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
}
