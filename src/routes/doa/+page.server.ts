import { API_DOA_ENDPOINT } from "@/lib/api";

export const load = async () => {
  try {
    const response = await fetch(`${API_DOA_ENDPOINT}/api`)
    const result = await response.json()

    return {
      data: result
    }
  } catch (error) {
    console.error(error)
  }
};