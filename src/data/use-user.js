import useSWR from "swr";

import useFetcher from "../libs/api-users";

export default function useUser() {
  const { data, mutate, error } = useSWR("api_users", useFetcher);

  const loading = !data && !error;
  const loggedOut = error && error.status === 403;

  return {
    loading,
    loggedOut,
    user: data,
    mutate,
  };
}
