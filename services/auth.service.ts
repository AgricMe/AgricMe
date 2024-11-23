import { http } from "@/lib/config/axios.config";
import { errorHandler } from "@/lib/utils/error";
import { TokenStorage, UserStorage } from "@/lib/utils/localStorage";
import { LoginDTO, SignUpDTO } from "@/schema/dto/auth.dto";
import { useMutateResult } from "@/schema/interfaces/query.interface";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useSignUp = (): useMutateResult<{}> => {
  const payload = useMutation({
    mutationKey: ["useSignUp"],
    mutationFn: async (data: SignUpDTO) => {
      const response = await http.post("auth/signup", {
        firstName: data?.firstName,
        lastName: data?.lastName,
        userName: data?.userName,
        email: data?.email,
        password: data?.password,
        bio: data?.bio,
        phoneNumber: data?.phoneNumber,
        location: data?.location,
        job: data?.job,
        interest: data?.interests,
        role: data?.roles,
      });

      return response?.data;
    },

    onError(error) {
      return errorHandler(error);
    },
  });

  return payload;
};

export const useLogin = (): useMutateResult<{ accessToken: string }> => {
  const payload = useMutation({
    mutationKey: ["useLogin"],
    mutationFn: async (data: LoginDTO) => {
      const response = await http.post<{ accessToken: string }>("/auth/login", {
        email: data.email,
        password: data.password,
      });

      await TokenStorage.store(response?.data?.accessToken);

      return response?.data;
    },
    onError(error) {
      return errorHandler(error);
    },
  });

  return payload;
};

export const logout = () => {
  TokenStorage.remove();
  UserStorage.remove();
  toast.success("Logged Out Successfully");

  if (typeof window != "undefined") {
    window.location.href = "/login";
  }
};
