import { API_QURAN_ENDPOINT } from "@/lib/api";

export const load = async () => {
  try {
    const response = await fetch(`${API_QURAN_ENDPOINT}/surahs`)
    const result = await response.json()

    return {
      data: result
    }
  } catch (error) {
    console.error(error)
  }
};