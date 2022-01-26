import Layout from "../components/template/Layout";
import LandingPage from "./landingPage";

export default function Home() {
  return (
    <Layout titulo="Página Inicial" subtitulo="Subtitulo da Página Inicial">
      <LandingPage />
    </Layout>
  )
}
