import Pessoas from "../components/core/pessoa";
import Layout from "../components/template/Layout";

export default function() {
  return (
    <Layout titulo="Cadastro de Pessoas" subtitulo="Gerencie seu cadastro de pessoas">
      <Pessoas />
    </Layout>
  )
}
