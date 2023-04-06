"use client";
import { useGetAllCountriesQuery } from "../redux/services/apiSlice";

export default function Home() {
  const { data, error, isLoading } = useGetAllCountriesQuery();
  console.log({ data, error, isLoading });

  return (
    <main>
      <h1 className="text-2xl text-blue-800 underline">
        tailwind css with nextjs
      </h1>
    </main>
  );
}
