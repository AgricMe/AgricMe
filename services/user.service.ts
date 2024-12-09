import { https } from "@/lib/config/axios.config";
import { errorHandler } from "@/lib/utils/error";
import { UserStorage } from "@/lib/utils/localStorage";
import { EditProfileDTO } from "@/schema/dto/user.dto";
import { User } from "@/schema/interfaces/user.interface";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useEditProfile = (userId: string) => {
  const mutation = useMutation<User, Error, EditProfileDTO>({
    mutationKey: ["useEditProfile"],
    mutationFn: async (data: EditProfileDTO) => {
      const response = await https.put<{ updatedUser: User }>(
        `/user/${userId}`,
        data
      );

      await UserStorage.store(response?.data?.updatedUser);

      return response?.data?.updatedUser;
    },

    onError(error) {
      return errorHandler(error);
    },
  });

  return mutation;
};

export const useGetProfile = () => {
  const query = useQuery({
    queryKey: ["useGetProfile"],
    queryFn: async () => {
      try {
        const response = await https.get<{ user: User }>(`/user/profile`);

        await UserStorage.store(response?.data?.user);

        return response?.data.user;
      } catch (error) {
        return errorHandler(error);
      }
    },
  });

  return query;
};

export const useChangeEmail = () => {
  const mutation = useMutation({
    mutationKey: ["useChangeEmail"],
    mutationFn: async (data: {email: string}) => {
      const response = await https.post(`user/change-email`, data);

      return response?.data;
    },

    onError(error) {
      return errorHandler(error);
    },
  });

  return mutation;
};

export const useChangePassword = () => {
  const mutation = useMutation({
    mutationKey: ["useChangePassword"],
    mutationFn: async (data: {currentPassword: string, newPassword: string}) => {
      const response = await https.post(`user/change-password`, data);

      return response?.data;
    },

    onError(error) {
      return errorHandler(error);
    },
  });

  return mutation;
};

export const useDeleteAccount = () => {
  const mutation = useMutation({
    mutationKey: ["useDeleteAccount"],
    mutationFn: async (data: {email: string}) => {
      const response = await https.delete(`user/${data.email}`);

      return response?.data;
    },

    onError(error) {
      return errorHandler(error);
    },
  });

  return mutation;
};