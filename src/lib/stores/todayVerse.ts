import { browser } from "$app/environment";
import type { Surah } from "$lib/types";
import { API_ENDPOINT } from "$lib/api";
import { writable } from "svelte/store";

export const todayVerse = writable<Surah | null>(null);

if (browser) {
  fetch(`${API_ENDPOINT}/random`)
    .then(response => response.json())
    .then(result => {
      todayVerse.set(result)
    })
    .catch(err => console.error(err))
};