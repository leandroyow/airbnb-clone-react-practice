import imgPack from "../assets/imgbundle.png"

export default function HeroSection() {
    return (
        <section className="d-flex justify-content-center pt-5">
            <img src={imgPack} alt="personal experience images" />
        </section>
    )
}