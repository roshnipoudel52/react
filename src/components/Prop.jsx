import React from 'react'
import Child from './Child'
import ChildTwo from './ChildTwo'
import ChildThree from './ChildThree'


const greeting = ["Roshni", "Reshma", "Roshan"]

const handleClick = () => {
  alert("Button Clicked!")
}

export default function Prop() {
  return (
    <>
      <div>
        <p>name:{greeting[1]}</p>
      </div>
      <Child greeting={greeting} />
      <ChildTwo name="sita" age="20" Address="Tandi" />
      <ChildThree handleClick={handleClick} />

    </>
  )
}




















// // import React from "react";
// // import Card from "./Card";

// // const App = () => {
// //   return (
// //     <div className="flex flex-wrap gap-4 p-6">
// //       <Card
// //         title="Beautiful Landscape"
// //         description="This is a beautiful landscape view."
// //         image="https://imgcdn.stablediffusionweb.com/2024/4/4/5e5bff47-ab89-478b-98eb-102d329d980d.jpg"
// //       />
// //       <Card
// //         title="Card with Actions"
// //         description="This card has additional actions passed as children."
// //         image="https://nfamilyclub.com/wp-content/uploads/2020/06/water-games-for-kids-2.jpg"
// //       >
// //         <div className="flex space-x-2">
// //           <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
// //             Like
// //           </button>
// //           <button className="bg-gray-200 px-4 py-2 rounded-lg">Share</button>
// //         </div>
// //       </Card>
// //     </div>
// //   );
// // };

// // export default App;



