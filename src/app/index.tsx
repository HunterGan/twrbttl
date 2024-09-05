import { useEffect, useState } from 'react';
import { AppRoutes } from "./routes";
import globalStyles from "@/shared/config/theme/globalStyles";

const App = () => {
  globalStyles()

  const [loading, setLoading] = useState(true)

  const init = async () => {
    setLoading(true)

    // auth, get user
    setTimeout(() => setLoading(false))
  }

  useEffect(() => {
    init().then()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {loading // App loading
        ? <div>loading</div>
        : <>
          <AppRoutes/>
        </>
      }
    </>
  )
}

export default App
