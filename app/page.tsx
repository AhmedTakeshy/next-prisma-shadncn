import { ProfileForm } from "@/components/Form";
import TodoCard from "@/components/TodoCard";
import { getTodos } from "@/lib/actions";

export default async function Home() {
  const todos = await getTodos();
  console.log(todos);
  return (
    <main className="grid gap-4 py-12 place-content-center">
      <ProfileForm />
      {todos && todos.map((todo) => (
        <TodoCard key={todo.id} id={todo.id} title={todo.title} description={todo.description} stateValue={todo.status} />
      ))}
    </main>
  )
}

