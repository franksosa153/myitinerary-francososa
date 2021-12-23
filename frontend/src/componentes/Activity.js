import Card from 'react-bootstrap/Card'
const Activity = (props) => {
    let activitiesInfo = props.Activities

    return (

        <Card className="cardActivi" style={{ width: '50%' }}>
            <Card.Img className='imgActi' variant="top" src={activitiesInfo.src} />
            <Card.Body className='contenedorTitulo'>
                <Card.Title className='tituloActi'>{activitiesInfo.activity}</Card.Title>        
            </Card.Body>
        </Card>

    )

}

export default Activity