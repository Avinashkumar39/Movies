'use client'
import styles from './Search.module.css'
const Search = () => {
  return (
    <div className={styles.container}>
      <form className={styles.search}>
        <input
          type='seach'
          placeholder='Search For a Movie Name...'
          className={styles.input}
        />
      </form>
    </div>
  )
}

export default Search
