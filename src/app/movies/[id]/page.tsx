import { getMovie } from "@/actions";


export default async function Movie({ params }: { params: { id: string } }) {
  const data = await getMovie(params.id);
  console.log(params.id)
  return (
    <>
      <h1>{data.title}</h1>
    </>
  );
}