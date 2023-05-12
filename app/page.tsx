import Feed from "@/components/Feed";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & share
        <br className="max-md:hidden" />{" "}
        <span className="orange_gradient text-center">AI-Powered Prompts</span>{" "}
      </h1>
      <p className="desc text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, laborum?</p>
      <Feed/>
    </section>
  );
}
