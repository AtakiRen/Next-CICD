type Params = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` }
}

export default function Page({ params }: Params) {
  return <h1>Slug: {params.slug}<p>nam_test</p>
  <p>From FPT SOFTWARE</p>
  <p>By AtakiSouma</p>
  </h1>
}
