import MyRoutes from "./MyRoutes"
import { PersistGate } from 'redux-persist/lib/integration/react'
import { myPersistor, myStore } from "./redux/store"
import {Provider} from "react-redux"


function App() {


  return (
    <>
      <Provider store={myStore}>
        <PersistGate persistor={myPersistor}>
          <MyRoutes />
          </PersistGate>
      </Provider>
    </>
  )
}

export default App
