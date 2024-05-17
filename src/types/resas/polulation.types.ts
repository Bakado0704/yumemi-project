import { z } from "zod";

export const PopulationDataSchema = z.object({
  result: z.object({
    boundaryYear: z.number(),
    data: z.array(
      z.object({
        label: z.string(),
        data: z.array(
          z.object({
            year: z.number(),
            value: z.number(),
          })
        ),
      })
    ),
  }),
});

export type populationData = z.infer<typeof PopulationDataSchema>;

export const parsePopulationData = (value: unknown): populationData =>
  PopulationDataSchema.parse(value);
