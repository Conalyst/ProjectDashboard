import React, { useEffect, useState } from "react"; 
import { getAllTest } from "../services";
 

export const Test = () => {
 
    const [tests, setTests] = useState(null);

    useEffect(() => {
        return new Promise((resolve, reject) => {
          try {
            // do db call  or API endpoint axios call here and return the promise.
           getAllTest()
            .then((res) => {
              setTests(res);
              //resolve(res);
            })
              .catch((err) => {
                setTests([]); 
                reject("Request error!");
              });
          } catch (error) {
            console.error("GetTest error!==", error);
            reject("Test error!");
          }
        });
      }, []);
    return (
   
    <div>
 
               <h2> List of Tests</h2>  
                    {tests &&
                      tests.map((test) => {
                        return (
                          <div >   
                            <label>
                            <input key ={test.toString()}  
                                type="radio" 
                                value={test.id}
                               />
                              <span >{test.title}</span>
                            </label>              
                          </div>);
                      })}
                
                  </div>
               
     
 
    );
  }
export default Test;