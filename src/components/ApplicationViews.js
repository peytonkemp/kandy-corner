import { Route } from "react-router-dom";
import { Home } from "./Home"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <LocationProvider>
                <Route path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>
        </>
    )
}