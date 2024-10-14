import { z } from "zod";

import { Currency } from "@/config/currency";
import UserSettingSchema from "@/schemas/modelSchema/UserSettingSchema";

export const UserSettingDto = z.object(UserSettingSchema.shape).extend({
  currency: z.nativeEnum(Currency),
});
export type TUserSettingDto = z.infer<typeof UserSettingDto>;
