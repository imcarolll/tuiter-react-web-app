import React from "react"
import TuitList from "./tuits";
import WhatsHappening from "./whats-happening";

function HomeScreen() {
    return (
        <>
            <h3>Home</h3>
            <WhatsHappening/>
            <TuitList/>
        </>
    );
   }
   export default HomeScreen;