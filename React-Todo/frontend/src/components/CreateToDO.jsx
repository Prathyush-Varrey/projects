import { Center, Flex } from "@mantine/core";
import { useState } from "react";

export function CreateToDO() {
     let [title, setTitle] = useState("");
     let [description, setDescription] = useState("");

     return <div style={{
          display: Flex,
          alignItems: Center,
          justifyContent: Center,
          flexDirection: "column"
     }}>
          <input style={{
               padding: 10,
               margin: 5,
               width:300,
          }} type="text" name="title" id="" onChange={(e) => {
               setTitle(e.target.value)
          }} placeholder="Add Your title" />
         
          <input style={{
               padding: 10,
               width: 300,
               margin: 5
          }} type="text" name="description" id="" onChange={(e) => {
               setDescription(e.target.value)
          }} placeholder="Add  Description" />
         
          <button style={{
               padding: 10,
               margin : 5
          }} onClick={() => {
               fetch('http://localhost:3000/todo', {
                    method: "POST",
                    body: JSON.stringify({
                         title: title,
                         description : description
                    }),
                    headers: {
                         "contentType" : "application.json"
                    }
               })
                    .then(async (res) => {
                         let json = await res.json();
                         alert("Todo Created")
               })
          }}>Add ToDo</button>
     </div>
}