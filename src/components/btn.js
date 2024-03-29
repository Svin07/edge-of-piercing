import * as React from "react"

import svg from "../images/arrow-up.svg"

const Btn = () => {
  return (
    <>
      <button class="bg-orange-400 opacity-50 hover:opacity-100 fixed bottom-20 right-4 rounded-xl inline-flex items-center justify-center w-16 h-16">
        <img src={svg} alt="Kiwi standing on oval" />
      </button>
    </>
  )
}

export default Btn
