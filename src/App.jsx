function App() {
  return (
    <div className="mt-14 mx-auto max-w-6xl grid grid-cols-[40%_60%]">
      <div>
        <div className="sticky top-14 grid grid-rows-[35%_45%_20%] h-screen">
          <div>
            <div className="text-3xl text-primaryTitle font-semibold">Monthon Mukkun</div>
            <div className="text-primaryAccent font-semibold">Information Technology - Student</div>
            <div className="text-sm w-5/6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eligendi consequatur praesentium, dolores odit eveniet.</div>
            <div>
              <span className="bg-primaryTitle text-gray-200 p-2">View Resume</span>
            </div>
          </div>
          <div>Nav</div>
          <div className="flex items-end">Link</div>
        </div>
      </div>
      <div>
        <div>About</div>
        <div className="mb-96">Experience</div>
        <div className="mb-96">Experience</div>
        <div className="mb-96">Experience</div>
      </div>
    </div>
  )
}

export default App
