const API_URL = import.meta.env.VITE_API_ENDPOINT;

export const load = async () => {
  try {
    const response = await fetch(API_URL)
    const result = await response.json()

    return {
      data: result
    }
  } catch (error) {
    console.error(error)
  }
};