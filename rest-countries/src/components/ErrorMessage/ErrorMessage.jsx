import  styles from "./errormessage.module.css"

export default function ErrorMessage({error}) {
  return (
    
    <div className={styles.errorMsg}>
        <i className="fa fa-times-circle"></i>  {error.status} {error.message}</div>
  )
}