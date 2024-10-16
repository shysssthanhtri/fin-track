import { Currency } from "@/config/currency";
import { UpdateUserSettingDto, UserSettingDto } from "@/dtos/user-setting.dto";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const userSettingRouter = createTRPCRouter({
  get: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.$transaction(async (tx) => {
      let setting = await tx.userSetting.findFirst({
        where: { userId: ctx.session.user.id },
      });

      if (!setting) {
        setting = await tx.userSetting.create({
          data: {
            userId: ctx.session.user.id,
            currency: Currency.USD,
          },
        });
      }

      return UserSettingDto.parse(setting);
    });
  }),

  update: protectedProcedure
    .input(UpdateUserSettingDto)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.userSetting.update({
        where: {
          userId: ctx.session.user.id,
        },
        data: {
          ...input,
        },
      });
    }),
});
