import { https } from "@/lib/config/axios.config";
import { errorHandler } from "@/lib/utils/error";
import { TokenStorage, UserStorage } from "@/lib/utils/localStorage";
import { LoginDTO, SignUpDTO } from "@/schema/dto/auth.dto";
import { useMutateResult } from "@/schema/interfaces/query.interface";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useSignUp = (data: SignUpDTO): useMutateResult<{}> => {
  const payload = useMutation({
    mutationKey: ["useSignUp"],
    mutationFn: async () => {
      const response = await https.post("auth/signup", {
        email: data?.email,
        password: data?.password,
        role: data?.role,
      });

      return response?.data;
    },

    onError(error) {
      return errorHandler(error);
    },
  });

  return payload;
};

export const useLogin = (
  data: LoginDTO
): useMutateResult<{ accessToken: string }> => {
  const payload = useMutation({
    mutationKey: ["useLogin"],
    mutationFn: async () => {
      const response = await https.post<{ accessToken: string }>(
        "/auth/login",
        {
          email: data.email,
          password: data.password,
        }
      );

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