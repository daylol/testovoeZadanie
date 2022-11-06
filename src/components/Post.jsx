import React, { useState } from 'react'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import styles from '../components/App.module.scss'

export default function Post({job}) {
  const [favorite, setFavorite] = useState(false)
  return (
    <div className={styles.post}>
          <div className={styles.left}>
            <img src={job.pictures[0]} alt={job.title} />
            <div className={styles.info}>
              <Link to={`/${job.id}`} className={styles.name}>{job.title}</Link>
              <span className={styles.building}>{job.name}</span>
              <div className={styles.address}>
              <FaMapMarkerAlt className={styles.loc}/>
              <span className={styles.location}>{job.address}</span>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            
            <div className={styles.inner}>
              <div className={styles.icon} onClick={() => setFavorite(!favorite)} >
              {
                favorite ? <BsBookmarkFill/> : <BsBookmark />
              }
              </div>
              <p className={styles.salary}>Salary range: <span>{job.salary}</span> $</p>
            </div>
          </div>
        </div>
  )
}
