import { useState, useEffect, React } from "react";

function DynamicMenu(props) {
  async function getResponse() {
    const response = await fetch(
      "http://127.0.0.1:8000/admin/polls/drink/1/change/",
      {
        method: "GET",
        headers: {
          "": "",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP ERROR. Status: ${response.status}`);
    }
    const data = await response.json();

    console.log(data);
  }

  const [homeState, setHomeState] = useState("");
  const [input, setInput] = useState("");
  getResponse();

  return (
    <div>
      {/* Access API */}
      {/* Sort Through API Data */}
      {/* Make a Filter for Drinks */}
      {/* Search for drinks? */}
    </div>
  );
}

export default DynamicMenu;
