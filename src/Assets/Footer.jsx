import React from 'react'
import styles from './Footer.module.css'
import {ReactComponent as Dogs} from '../Assets/Img/dogs-footer.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p> &copy; Luís.jsx | Alguns direitos reservados.</p>
    </footer>
  )
}

export default Footer
