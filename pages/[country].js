import { useRouter } from "next/Router";

export default function Country() {
  const router = useRouter();
  return <h1>Buy Bitcoin in {router.query.country}</h1>;
}
