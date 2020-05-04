import { useRouter } from "next/Router";

export default function Country() {
  const router = useRouter();
  return <h1>This is {router.query.country}</h1>;
}
