export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] w-[100vw] ">
      <h1 className="text-9xl font-extrabold text-lime-500">Welcome!</h1>
      <p className="text-5xl text-lime-500 mt-10">
        Please choose a task from the navbar!
      </p>
    </div>
  );
}
