import { z } from "zod";

import type { UserWithRelations } from "./UserSchema";
import { UserWithRelationsSchema } from "./UserSchema";

/////////////////////////////////////////
// USER SETTING SCHEMA
/////////////////////////////////////////

export const UserSettingSchema = z.object({
  userId: z.string(),
  currency: z.string(),
});

export type UserSetting = z.infer<typeof UserSettingSchema>;

/////////////////////////////////////////
// USER SETTING RELATION SCHEMA
/////////////////////////////////////////

export type UserSettingRelations = {
  user: UserWithRelations;
};

export type UserSettingWithRelations = z.infer<typeof UserSettingSchema> &
  UserSettingRelations;

export const UserSettingWithRelationsSchema: z.ZodType<UserSettingWithRelations> =
  UserSettingSchema.merge(
    z.object({
      user: z.lazy(() => UserWithRelationsSchema),
    }),
  );

export default UserSettingSchema;
