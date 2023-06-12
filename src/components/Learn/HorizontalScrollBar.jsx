
import BodyPart from './BodyPart'

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
    return (
        <div className='searchCards'>
            {
                data.map((item) => {
                    return (
                        <div className="item-card" key={item.id || item} itemID={item.id || item} title={item.id || item}>
                            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HorizontalScrollBar
