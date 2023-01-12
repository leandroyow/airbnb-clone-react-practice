import Card from "./card"
import database from "../data"



export default function CardContainer() {
    const card = database.map(elem => {

        return (
            <Card 
            key={elem.id}
            img={elem.coverImg}
            rating={elem.stats.rating}
            reviewCount={elem.stats.reviewCount}
            country={elem.location}
            title={elem.title}
            price={elem.price}
            status={elem.status}
            
            />
        )
    });
    

    return (
        <ul className="list-unstyled rounded-bottom ps-4 d-flex gap-1">
           {card}
        </ul>
    )
}