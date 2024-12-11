import { https } from '@/lib/config/axios.config';
import { errorHandler } from '@/lib/utils/error';
import { CreatePreferenceDTO, EditPreferenceDTO } from '@/schema/dto/preference.dto';
import { Preference } from '@/schema/interfaces/preference.interface';
import { useMutateResult } from '@/schema/interfaces/query.interface';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useCreatePreference = (): useMutateResult<{ preference: Preference }> => {
  const payload = useMutation({
    mutationKey: ["useCreatePreference"],
    mutationFn: async (data: CreatePreferenceDTO) => {
      const response = await https.post<{ preference: Preference }>("/user/preference", data);

      return response?.data;
    },
    onError(error) {
      return errorHandler(error);
    },
  });

  return payload;
};

export const useGetPreference = () => {
  const query = useQuery({
    queryKey: ["useGetPreference"],
    queryFn: async () => {
      try {
        const response = await https.get<{ preference: Preference }>(`/user/preference`);
        return response?.data;
      } catch (error) {
        return errorHandler(error);
      }
    },
  });

  return query;
};

export const useEditPreference = () => {
  const mutation = useMutation({
    mutationKey: ["useEditPreference"],
    mutationFn: async (data: EditPreferenceDTO) => {
      const response = await https.patch(`user/preference/update`, data);

      return response?.data;
    },

    onError(error) {
      return errorHandler(error);
    },
  });

  return mutation;
}; 