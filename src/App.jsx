import { useState } from "react"
import LeftSection from "./sections/LeftSection"
import RightSection from "./sections/RightSection"

function App() {
  const [sectionIds, setSectionIds] = useState([]);

  const addSectionIds = (sectionId) => {
    console.log(sectionId)
    const elementId = document.getElementById(sectionId).id;
    setSectionIds((prev) => [...new Set([...prev, elementId])])
  }

  return (
    <div className="mt-14 mx-auto max-w-6xl grid gap-y-5 lg:grid-cols-[40%_60%]">
      <LeftSection />
      <RightSection onInitial={addSectionIds} />
    </div>
  )
}

export default App
