import { https } from '@/lib/config/axios.config';
import { errorHandler } from '@/lib/utils/error';
import { CreateCompanyProfileDTO, EditCompanyProfileDTO } from '@/schema/dto/company.dto';
import { useMutateResult } from '@/schema/interfaces/query.interface';
import { Company } from '@/schema/interfaces/company.interface';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useCreateCompanyProfile = (): useMutateResult<{ company: Company }> => {
  const payload = useMutation({
    mutationKey: ["useCreateCompanyProfile"],
    mutationFn: async (data: CreateCompanyProfileDTO) => {
      const response = await https.post<{ company: Company }>("/user/company", data);

      return response?.data;
    },
    onError(error) {
      return errorHandler(error);
    },
  });

  return payload;
};

export const useGetCompanyProfile = () => {
  const query = useQuery({
    queryKey: ["useGetCompanyProfile"],
    queryFn: async () => {
      try {
        const response = await https.get<{ company: Company }>(`/user/company/profile`);
        return response?.data;
      } catch (error) {
        return errorHandler(error);
      }
    },
  });

  return query;
};

export const useEditCompanyProfile = () => {
  const mutation = useMutation({
    mutationKey: ["useEditCompanyProfile"],
    mutationFn: async (data: EditCompanyProfileDTO) => {
      const response = await https.patch(`user/company/profile`, data);

      return response?.data;
    },

    onError(error) {
      return errorHandler(error);
    },
  });

  return mutation;
};