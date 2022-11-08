import { useRef, useState } from "react"
import {insertOrder} from "../modules/db"

function CheckoutForm(props) {
    const theForm = useRef(null);
    const [paymentCompleted, setPaymentCompleted] = useState(false)
    
   async function submit(e){
        e.preventDefault();
      
        const response = await insertOrder({
            name:  theForm.current.elements.name.value,
            email:   theForm.current.elements.email.value,
            address:   theForm.current.elements.address.value,
            basket:  props.cart,
        })
        if(response && response.length){
            setPaymentCompleted(true);

        }
    }
  return (
    <>
{paymentCompleted ? (<p>Thank you very mucho</p>): ( <form onSubmit={submit} ref={theForm}>
    <div className='form-control'>
        <label  htmlFor="form-name">name</label>
        <input required type="text"  name="name" id="form-name" />
    </div>
      <div className='form-control'>
        <label htmlFor="form-email">e-mail</label>
        <input required type="email"  name="email" id="form-email" />
    </div>
      <div className='form-control'>
        <label  htmlFor="form-address">address</label>
        <textarea required name="address" id="form-address" />
    </div>
    <button>pay</button>
 </form>)}
 </>
  )
  
}


//name
//email
//adress


export default CheckoutForm