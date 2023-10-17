import { faArrowDown, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function App() {
  return (
    <div className="mt-14 mx-auto max-w-6xl grid grid-cols-[40%_60%]">
      <div>
        <div className="sticky top-14 grid grid-rows-[35%_45%_20%] h-screen">
          <div className="flex flex-col gap-2">
            <div className="text-3xl text-primaryTitle font-semibold">Monthon Mukkun</div>
            <div className="text-primaryAccent font-semibold">Information Technology - Student</div>
            <div className="text-sm w-5/6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eligendi consequatur praesentium, dolores odit eveniet.</div>
            <div className="mt-4">
              <a href="#">
                <span className="rounded-md bg-primaryTitle text-gray-200 py-2 px-4">
                  View Resume
                  <span className="rotate-90 inline-block ml-2 text-sm"><FontAwesomeIcon className="animate-bounce" icon={faArrowDown} /></span>
                </span>
              </a>
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
