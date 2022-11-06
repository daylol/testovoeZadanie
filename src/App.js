
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes,Route } from 'react-router-dom';


import MainPage from './components/pages/MainPage';
import SinglePage from './components/pages/SinglePage';
import styles from './components/appWrapper.module.scss'






function App() {

  const [jobs, setJobs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu')
      setJobs(data)
      setIsLoading(false)
    }
    fetchData()
  }, [])


  return (
    <div className={styles.appWrapper}>
    <Routes>
      <Route path='/' element={<MainPage jobs={jobs} isLoading={isLoading}/>}/>
      <Route path='/:id' element={<SinglePage />} />
    </Routes>
    </div>
  );
}

export default App;
