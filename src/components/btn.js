import * as React from "react"

import svg from "../images/icons/arrow-up.svg"

const Btn = () => {
  return (
    <>
      <button className="bg-orange-400 opacity-50 hover:opacity-100 fixed bottom-20 right-4 rounded-xl inline-flex items-center justify-center w-16 h-16">
        <img src={svg} alt="arrow up" />
      </button>
    </>
  )
}

export default Btn
