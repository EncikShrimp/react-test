"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useEffect } from "react";

type Props = {};

const FetchApi = (props: Props) => {
  const [todos, setTodos] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  // function to fetch todos ;)
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const data = await response.json();
      setTodos(Array.isArray(data) ? [...data] : [data]);
    } catch (error) {
      console.error("Error fetching todos", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center px-4">
      {loading ? (
        <h1 className="text-4xl text-sky-500">Loading...</h1>
      ) : (
        <Card className="w-[460px]">
          <CardHeader>
            <CardTitle className="text-2xl">Todos!</CardTitle>
            <CardDescription>
              Below is the todos fetced from the API
            </CardDescription>
          </CardHeader>
          <CardContent>
            {todos.map((todo) => (
              <Card key={todo.id}>
                <CardHeader>
                  <CardTitle className="text-lg flex justify-between">
                    <p>{todo.title}</p>

                    {todo.completed ? (
                      <p className="text-lime-500">Completed</p>
                    ) : (
                      <p className="text-red-500">Not Completed</p>
                    )}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default FetchApi;
