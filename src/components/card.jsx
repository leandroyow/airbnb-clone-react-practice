import star from "../assets/star.png"

export default function Card(props) {
    return (
        <li className="rounded position-relative">
                <span className="text-center rounded status position-absolute">{props.status}</span>
                <img src={props.img} alt="Katie Zaferes" />
                <div className="information row d-flex mt-1 gap-1">
                    <div className="information-second d-flex align-items-baseline gap-1">
                    <img src={star} />
                    <p className="fw-bold">{props.rating} <span className="fw-normal">({props.reviewCount}).{props.country}</span></p>
                    </div>
                    <p className="info-description">{props.title}</p>
                    <p className="last-info fw-bold">From ${props.price} /<span className="last-info fw-normal"> person</span></p>
                </div>
            </li>
    )
}