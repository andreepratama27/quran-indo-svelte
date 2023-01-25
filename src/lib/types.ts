import { z } from 'zod';

const SurahSchema = z.object({
  arab: z.string(),
  audio: z.record(z.string(), z.string()),
  image: z.object({
    primary: z.string(),
    secondary: z.string(),
  }),
  meta: z.object({
    juz: z.number(),
    hizbQuarter: z.number(),
    manzil: z.number(),
    page: z.number(),
    ruku: z.number(),
    sajda: z.object({
      obligatory: z.boolean(),
      recommended: z.boolean(),
    })
  }),
  number: z.object({
    inQuran: z.number(),
    inSurah: z.number(),
  }),
  tafsir: z.record(z.string(), z.any()),
  translation: z.string(),
})

export type Surah = z.infer<typeof SurahSchema>

const PrayerSchema = z.object({
  id: z.string(),
  artinya: z.string(),
  ayat: z.string(),
  doa: z.string(),
  latin: z.string(),
})

export type Prayer = z.infer<typeof PrayerSchema>;
