import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'


function PaperData() {
  return (
    <div className="relative text-yellow-500">  
     <div className="flex gap-4">
     <Link to='/papers/boyspapers'>
      <div className="bg-yellow-500 text-xl p-5 font-bold text-blueGray-800 rounded">Boys</div>
     </Link>
     <Link to='/papers/girlspapers'>
     <div className="bg-yellow-500 text-xl p-5 font-bold text-blueGray-800 rounded">Girl</div>
     </Link>


     </div>
    </div>
  )
}

export default PaperData
