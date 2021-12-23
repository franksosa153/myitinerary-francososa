import Card from 'react-bootstrap/Card'
const Activity = (props) => {
    let activitiesInfo = props.Activities

    return (

        <Card className="cardActivi" style={{ width: '40%' }}>
            <Card.Img variant="top" src={activitiesInfo.src} />
            <Card.Body>
                <Card.Title className='tituloActi'>{activitiesInfo.activity}</Card.Title>        
            </Card.Body>
        </Card>

    )

}

export default Activity