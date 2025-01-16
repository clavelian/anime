import { FloatingDockDemoMenu } from "@/components/floatdock";
import { FloatingNavbar } from "@/components/floatingNav";

export default function Home() {
  return (
    <>
      <nav>
        <FloatingNavbar />
      </nav>
      <aside>
        <FloatingDockDemoMenu />
      </aside>
      <main className="w-full h-[100vh] flex items-center justify-center">
        Lorem Ipsum Dolor Sit
      </main>
    </>
  );
}
