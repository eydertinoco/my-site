export default function BlogDetails({params}: {
    params: {blogId: string}
} ) {
  return (
      <main>
        <h1>Informação do Blog selecionado {params.blogId}</h1>
      </main>
  )
}
