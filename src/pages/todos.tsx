import Layout from "../components/template/Layout";
import Todo from '../components/core/todo'

export default function TodoList() {
  return (
    <Layout titulo="ToDo Lists" subtitulo="Gerencie aqui suas Listas de Tarefas">
      <Todo />
    </Layout>
  )
}
