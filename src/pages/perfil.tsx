import Layout from "../components/template/Layout";
import useAuth from "../data/hook/useAuth";

export default function Perfil() {

  const { usuario } = useAuth()

  return (
    <Layout titulo="Perfil do Usuário" subtitulo="Aqui estão os dados do seu perfil!">
      <p><b>ID: </b> {usuario.uid}</p>
      <p><b>Nome: </b> {usuario.nome}</p>
      <p><b>E-mail: </b> {usuario.email}</p>
      <p><b>Imagem: </b> <img src={usuario.imagemUrl} alt="Imagem de Perfil" /> </p>
    </Layout>
  )
}