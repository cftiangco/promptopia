import Feed from "@components/Feed"

const page = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover and Share</h1>

      <br className="max-md:hidden" />

      <span className="orange_gradient text-center">AI-Powered Promps</span>

      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque commodi vel suscipit doloremque labore possimus repudiandae sit assumenda laudantium aperiam, explicabo similique a porro sed maxime consequuntur? Soluta, vitae minima?
      </p>

      <Feed/>

    </section>
  )
}

export default page