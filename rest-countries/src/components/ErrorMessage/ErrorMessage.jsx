import  styles from "./errormessage.module.css"

export default function ErrorMessage({error}) {
  return (
    
    <div  className={styles.errorMsg} data-testid="error-message">
        <i  className="fa fa-times-circle"></i>  {error.status} {error.message}</div>
  )
}