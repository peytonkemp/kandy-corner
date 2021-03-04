import React from "react";
import { PropsAndState } from './PropsAndState'

export const Home = () => (
    <>
        <h2>Kandy Korner</h2>

        <address>
            <div>Visit Us at the Kandy1 Location</div>
            <div>8422 Johnson Pike</div>
        </address>
        <PropsAndState yourName={"Peyton"} />
    </>
)