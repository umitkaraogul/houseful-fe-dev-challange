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
  static async updateProperty(updatedProperty: Property): Promise<void> {
    const url = `${this.baseUrl}/${updatedProperty.id}`;

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedProperty)
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong on fetch');
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }

  static async getPropertyById(id: number): Promise<Property> {
    const url = `${this.baseUrl}/${id}`;
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
