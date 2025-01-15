import { FloatingDockDemoMenu } from "@/components/floatdock";

export default function Home() {
  return (
    <>
      <nav>
        <FloatingDockDemoMenu />
      </nav>
      <main className="w-full h-[100vh] flex items-center justify-center">
        Lorem Ipsum Dolor Sit
      </main>
    </>
  );
}
