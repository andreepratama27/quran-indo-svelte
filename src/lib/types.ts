export interface Surah {
  arab: string;
  audio: Record<string, string>;
  image: {
    primary: string;
    secondari: string;
  };
  meta: {
    juz: number;
    hizbQuarter: number;
    manzil: number;
    page: number;
    ruku: number;
    sajda: {
      obligatory: boolean;
      recommended: boolean;
    }
  };
  number: {
    inQuran: number;
    inSurah: number;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tafsir: Record<string, any>;
  translation: string;
}

export interface Prayer {
  id: string;
  artinya: string;
  ayat: string;
  doa: string;
  latin: string;
}