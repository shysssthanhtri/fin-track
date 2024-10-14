import { z } from "zod";

export const UserSettingScalarFieldEnumSchema = z.enum(["userId", "currency"]);

export default UserSettingScalarFieldEnumSchema;
