import React, {useState} from 'react'
import {Button, Collapse} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowDownZA, faDeleteLeft, faHome, faPencilAlt, faPencilSquare, faPlusSquare, faQuestion } from '@fortawesome/free-solid-svg-icons'

function CollapseItem(props) {
    const [open, setOpen] = useState(false);
  return (
    <div style={{border:'1px solid #abc', margin:'20px auto'}}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <div style={{display:'flex', alignItems: 'center'}}>
                <p>{props.name}</p>
                <FontAwesomeIcon icon={faArrowDown}
                    onClick={() => setOpen(!open)}
                style={{padding: '5px'}}/>
            </div>

           <div style={{display:'flex', alignItems: 'center'}}> {/*!--start of head */}
                <FontAwesomeIcon size="1x" icon={faPencilAlt} style={{padding: '5px'}}/>
                <FontAwesomeIcon size="1x" icon={faDeleteLeft} style={{padding: '5px'}}/>   
            </div> {/*!--end of head */}

            </div>

            <Collapse in={open}>
              <div id="example-collapse-text">
                <div style={{margin:'10px', border:'1px solid #abc', borderRadius:'5px', padding:'0px'}}>
                    <p style={{margin:'10px'}}><b>Email: </b>{props.email}</p>
                    <hr/>
                    <p style={{margin:'10px'}}><b>Phone: </b>{props.phone}</p>
                </div>
              </div>
            </Collapse>
    </div>
  )
}

export default CollapseItem