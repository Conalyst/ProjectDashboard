import React, { useState } from "react";

 export default function HeatMap(props) {
   const risk_data = props.risk_data;

   //columns for left to right
   const grid = [
     ["VH", "H", "M", "L", "VL"],
     ["VH", "H", "M", "L", "L"],
     ["VH", "H", "M", "M", "M"],
     ["VH", "H", "H", "H", "H"],
     ["VH", "VH", "VH", "VH", "VH"],
   ];

   const gridRankingColors = {
     VH: "#de5656",
     H: "#f8a20e",
     M: "#f6be5b",
     L: "#39e9ae",
     VL: "#36bf91",
   };

   const numberOfOccurences = (x, y) => {
     return `${x} : ${y}`;
   };

   function position(riskObject) {
     const levels = ["L", "X", "M", "X", "H"];
     let x = levels.indexOf(riskObject.likelihood);
     let y = 4 - levels.indexOf(riskObject.impact);
     return { x: x, y: y };
   }

   let data = [];

   const matrix = (data) => {
     grid.forEach((col, xIndex) => {
       data.push([]);
     });
     data.forEach((row, xIndex) => {
       let line = grid[xIndex].map((_, index) => {
         let coord = { x: xIndex, y: index };
         let ids = [];
         risk_data.forEach((risk) => {
           if (coord.x == position(risk).x && coord.y == position(risk).y) {
             ids.push(risk.id);
           }
         });
         return { coord: coord, corresponding_ids: ids };
       });
       line.forEach((val) => {
         row.push(val);
       });
     });
     return data;
   };

   matrix(data);

   const [selectedGroup, setSelectedGroup] = useState([]);
   const [risk_list_opacity, set_risk_list_opacity] = useState(0);
   return (
     <>
       {selectedGroup.length > 0 && (
         <div
           style={{
             opacity: risk_list_opacity,
             backgroundColor: "white",
             borderRadius: 6,
             position: "absolute",
             bottom: 20,
             right: 20,
             width: 460,
             zIndex: 1,
             padding: 26,
             boxShadow: "2px 8px 35px",
           }}
         >
           <h6>Risks:</h6>
           <ol>
             {risk_data.map((risk) => {
               if (selectedGroup.indexOf(risk.id) > -1) {
                 return <li key={risk.id}>{risk.title}</li>;
               }
             })}
           </ol>
         </div>
       )}

       <div
         style={{
           display: "flex",
           flexDirection: "row",
           flex: 1,
           justifyContent: "center",
           alignItems: "center",
         }}
       >
         <h6 
         style={{
             transform: "rotate(-90deg)"
         }}>
             Impact
         </h6>

         <div
           style={{
             display: "flex",
             flexDirection: "column-reverse",
             justifyContent: "space-between",
             // backgroundColor: "blue",
             height: "300px",
             marginRight: 16,
             marginBottom: 34,
           }}
         >
           <span>L</span>
           <span>M</span>
           <span>H</span>
         </div>

         <div>
           <div
             style={{
               display: "flex",
               flexDirection: "row",
               //   flex: 1,
               //   justifyContent: "center",
               //   alignItems: "center",
             }}
           >
             {grid.map((col, xIndex) => {
               return (
                 <div>
                   {col.map((row, yIndex) => (
                     <div
                       style={{
                         display: "flex",
                         justifyContent: "center",
                         alignItems: "center",
                         width: 58,
                         height: 58,
                         marginBottom: 3,
                         marginLeft: 3,
                         backgroundColor: gridRankingColors[row],
                       }}
                     >
                       {data[xIndex][yIndex].corresponding_ids.length > 0 && (
                         <div
                           onMouseOver={() => {
                             setSelectedGroup(
                               data[xIndex][yIndex].corresponding_ids.map(
                                 (_) => _
                               )
                             );
                             set_risk_list_opacity(1);
                           }}
                           onMouseLeave={() => {
                             set_risk_list_opacity(0);
                           }}
                           style={{
                             padding: 10,
                             width: "80%",
                             height: "80%",
                             border: "2px solid",
                             borderRadius: "50%",
                             textAlign: "center",
                           }}
                         >
                           {data[xIndex][yIndex].corresponding_ids.length}
                         </div>
                       )}
                     </div>
                   ))}
                 </div>
               );
             })}
           </div>
           <div>
             <div
               style={{
                 display: "flex",
                 flexDirection: "row",
                 justifyContent: "space-between",
                 // backgroundColor: "blue",
                 width: "300px",
                 marginTopt: 16,
               }}
             >
               <span>L</span>
               <span>M</span>
               <span>H</span>
             </div>
             <h6
                 style={{
                     textAlign: "center"        
                 }}
             >
                 Likelihood
             </h6>
           </div>
         </div>
       </div>
     </>
   );
 }