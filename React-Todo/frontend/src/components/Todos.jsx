
export function Todos({ todos }) {
     return <>
          {todos.map((todo,index) => {
               return <div key={index}>
                    <h1>{todo.title}</h1>
                    <h3>{todo.description}</h3>
                    <button>{todo.isCompleted === true ? `Completed`: `Mark As Completed`}</button>
               </div>
          })}
     </>
}