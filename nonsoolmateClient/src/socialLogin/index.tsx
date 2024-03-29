import { useEffect } from "react";
import useLogin from "./hooks/useLogin";
import Error from "error";
import Loading from "loading";

//네이버 REDIRECT URL로 이동했을 때의 REDIRECT PAGE
export default function RedirectPage() {
  const { mutate, isLoading, isError } = useLogin();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      mutate(code); // 인증 코드를 사용하여 로그인 프로세스 시작
    }
  }, [mutate]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return <Loading />;
}
