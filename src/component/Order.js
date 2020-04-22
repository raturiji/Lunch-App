import React,{useState} from 'react';
import moment from 'moment';

export default function Order() {
  const date = moment().format('DD MMM, YYYY');
  const [lunch,setLunch]=useState();
  const [curd,setCurdValue]=useState();
  const [sum,setSum]=useState(0);

  const handleSubmit=()=>{
    const add = parseInt(lunch) + parseInt(curd);
    setSum(add);
  }

  return (
    <div className="box shadow py-3 px-5">
      {sum === 0 ?
      <div>
      <h4 className="text-info">Order Today's Lunch</h4>
      <h5 className="text-center small font-weight-bold text-warning">{date}</h5>
      <div className="d-flex flex-column my-3">
        <label><input type="checkbox" value="70" onClick={e => setLunch(e.target.value) }/> Daily Thali</label>
        <label><input type="checkbox" value="20" onClick={e => setCurdValue(e.target.value)} /> Curd</label>
      </div>
      <button type="button" class="btn btn-primary px-3 my-3 w-100" onClick={()=> handleSubmit()}>Submit</button>
      </div> : <p className="text-success text-center p-5 ">Congrats !! Your Lunch has been ordered for {date}</p> }
    </div>
  )
}
