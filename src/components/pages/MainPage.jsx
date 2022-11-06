import React from 'react'
import Post from '../Post'

import styles from '../../components/App.module.scss'
import Skeleton from '../Skeleton'

export default function MainPage({jobs, isLoading}) {
  return (
    <div className={styles.app}>
        <div className={styles.posts}>
{
    isLoading 
        ? [...new Array(6)].map((_,i) => <Skeleton key={i}/>)
        : jobs.map(job=> <Post key={job.id} job={job}/>)
}

          
        </div>
      </div>
  )
}
