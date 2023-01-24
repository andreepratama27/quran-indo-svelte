import { API_QURAN_ENDPOINT } from "@/lib/api";

export const load = async ({ params }) => {
  try {
    const response = await fetch(`${API_QURAN_ENDPOINT}/surahs/${params?.id}`)
    const result = await response.json()

    return {
      data: result
    }
  } catch (error) {
    console.error(error)
  }
};