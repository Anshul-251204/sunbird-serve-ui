import React from 'react'
import './VolunteerProfileDeliverable.css'
import { useSelector, useDispatch } from 'react-redux'



const VolunteerProfileDeliverable = props => {
    console.log(props.needId)
  const needsList = useSelector((state) => state.need.data);
  const needById = {};
  const entityById = {};
  const occurrenceById = {};
  console.log(needsList)
  needsList.forEach(item => {
    if (item && item.need) {
      const { id, name, needTypeId, description } = item.need;
      needById[id] = { name, needTypeId, description } ;
    }
    if (item && item.entity ) {
        entityById[item.need.id] = item.entity.name ;
    }
    if (item && item.occurrence ) {
        const { startDate, endDate } = item.occurrence;
        occurrenceById[item.need.id] = { startDate, endDate} ;
    }
  })
  console.log(occurrenceById)
  const needtypeList = useSelector((state) => state.needtype.data.content);
  const needTypeById = {};
  needtypeList.forEach(item => {
    if (item) {
      needTypeById[item.id] = item.name ;
    }
  })

  return (
    <div>
        <div className="detailsNeedVoluntProfile">
            <div className="nameNVP">{needById[props.needId].name}</div> 
            <div className="typeNVP">{needTypeById[needById[props.needId].needTypeId]}</div>
            <div className="aboutNVP">{needById[props.needId].description.slice(3,-4)} </div>
            <div className="rowNVP">
                <div className="itemNVP">
                    <span>Organizer :</span>  nCoordinator name
                </div>
                <div className="itemNVP">
                    <span>Entity :</span>  {entityById[props.needId]}
                </div>
            </div>
            <div className="rowNVP">
                <div className="itemNVP">
                    <span>Start Date :</span>  
                    {occurrenceById[props.needId] ? occurrenceById[props.needId].startDate.slice(0,10) : ''}
                </div>
                <div className="itemNVP">
                    <span>End Date : </span>  
                    {occurrenceById[props.needId] ? occurrenceById[props.needId].endDate.slice(0,10) : ''}
                </div>
            </div>
            <div className="rowNVP">
                <div className="itemNVP">
                    <span>Time :</span> 
                </div> 
                {/* <div className="itemNVP">
                    <span>Mode</span> : Online
                </div> */}
            </div>
        </div>
        <div className="deliverablesNeedVolunteerProfile"> 
            {/*DNVP refer to Need Plan Deliverables from Volunteer Profile*/}
            <div className="headDNVP">Need Plan Deliverables</div>
        </div>
        <div className="listDNVP">
            <div><button className="todoDNVP">To-Do</button></div>
            <div><button className="completedDNVP">Completed</button></div>
            <div><button className="canceledDNVP">Canceled</button></div>
        </div>
    </div>
  )
}

export default VolunteerProfileDeliverable