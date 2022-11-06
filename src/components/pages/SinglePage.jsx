import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BsBookmark, BsFillShareFill, BsBookmarkFill} from 'react-icons/bs';
import { SlArrowLeft} from 'react-icons/sl';
import { FaMapMarkerAlt } from 'react-icons/fa'
import styles from './SinglePage.module.scss'


export default function SinglePage() {
  const {id} = useParams()
  const [job, setJob] = useState(null)
  const [favorite, setFavorite] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu')
      const res = data.find(job => job.id === id)
      setJob(res)
    }
    fetchData()
  }, [id])
  



  return (
    <div className={styles.wrapper}>
      {
        job && <div className={styles.info}>
        <div className={styles.general}>
          <div className={styles.top}>
            <p>Job Details</p>
            <div className={styles.action}>
            <div 
            onClick={() => setFavorite(!favorite)} 
            className={styles.save}>
              {
                favorite ? <BsBookmarkFill/> : <BsBookmark />
              }
              <p>Save to my list</p>
            </div>
  
            <div className={styles.share}>
              <BsFillShareFill />
              <p>Share</p>
            </div>
            </div>
          </div>
          <div className={styles.line}></div>
          <button>Apply now</button>
          
          <div className={styles.about}>
            <div className={styles.title}>
              <div className={styles.info}>
                <p>{job.title}</p>
                <span>Posted: {job.createdAt.substring(0,10)}</span>
              </div>
              <div className={styles.salary}>
                <p>€ {job.salary}</p>
                <span>Brutto, per year</span>
              </div>
            </div>
            <div className={styles.desc}>
                <h2>Responsopilities</h2>
                <p>{job.description}</p>
            </div>
            <div className={styles.benefits}>
              <h2>Contect information:</h2>
              <ul>
                <li><a href={`tel:+${job.phone}`}>{job.phone}</a></li>
                <li><a href={`mailto:+${job.email}`}>{job.email}</a></li>
                <li>{job.address}</li>
              </ul>
            </div>
            <button>Apply now</button>
  
            <div className={styles.addInfo}>
              <h2>Additional info</h2>
              <div className={styles.employ}>
                <p>Employment type</p>
                <div className={styles.types}>
                {
                  job.employment_type.map((item,i) =>(
                    <div key={i} className={styles.type}>
                      <p>{item}</p>
                  </div>
                  ))
                }
                </div>
              </div>
  
              <div className={styles.benef}>
                <p>Benefits</p>
                <div className={styles.types}>
                  {
                    job.benefits.map((item,i) => (
                      <div key={i} className={styles.type}>
                        <p>{item}</p>
                      </div>
                    ))
                  }
                  
                </div>
              </div>
            </div>
  
            <div className={styles.content}>
              <h2>Attached images</h2>

              <div className={styles.pic}>
              {
                job.pictures.map((photo,i) =>(
                  <img key={i} src={photo} alt={job.name}/>
                ))
              }
              </div>
            </div>
            <Link className={styles.back} to={'/'}><SlArrowLeft className={styles.icon}/>RETURN TO JOB BOARD</Link>
          </div>
        </div>
        <div className={styles.map}>
          <div className={styles.circle}></div>
          <div className={styles.location}>
              <h3>Department name.</h3>
              <h3>{job.name}.</h3>
              <div className={styles.loc}><FaMapMarkerAlt/><span>{job.address}</span></div>
              <span><a href={`tel:+${job.phone}`}>{job.phone}</a></span>
              <span><a href={`mailto:+${job.email}`}>{job.email}</a></span>
          </div>
        </div>
        </div>
      }
    </div>
  )
}
