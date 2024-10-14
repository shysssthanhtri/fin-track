import { type TApplicationContext } from "@/contexts/application-context";
import { api } from "@/utils/api";

export const userSettingHook = (): TApplicationContext["setting"] => {
  const { data, isPending, refetch } = api.userSetting.get.useQuery();

  return {
    data,
    isLoading: isPending,
    refetch: () => {
      void refetch();
    },
  };
};
