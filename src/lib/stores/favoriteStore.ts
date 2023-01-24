import { browser } from "$app/environment";
import { writable } from "svelte/store";
import type { Surah } from "$lib/types";

interface SurahStore extends Surah {
  name: string;
  source?: 'surah' | 'verse'
}

const storageValue: SurahStore[] = JSON.parse(window.localStorage.getItem('favorites') as string) || [];

const storage = writable<SurahStore[]>(storageValue);

storage.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('favorites', JSON.stringify(value))
  }
})

export default storage;