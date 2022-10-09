import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export interface Props {
    image: string
    text: string
}

const Parallax: React.FC<Props> = ({ image, text }) => {
    gsap.registerPlugin(ScrollTrigger)

    const sectionEl = useRef<HTMLElement>(null)
    const imgEl = useRef<HTMLImageElement>(null)

    let ignore = false

    useEffect(() => {
        if (!ignore) {
            gsap.to(sectionEl.current, {
                scrollTrigger: {
                    trigger: sectionEl.current,
                    scrub: true,
                    pin: true,
                    start: "center center",
                    end: "bottom -100%",
                    toggleClass: "active",
                },
            })

            gsap.to(imgEl.current, {
                scale: 1.2,
                scrollTrigger: {
                    trigger: sectionEl.current,
                    scrub: 0.5,
                    start: "top bottom",
                    end: "bottom -300%",
                },
                y: "-30%",
            })
        }

        return () => {
            ignore = true
        }
    }, [])

    return (
        <section ref={sectionEl} className="container pinned">
            <div className="pinned__inner">
                <div className="pinned__images">
                    <img ref={imgEl} src={image} alt="fullwidth background image" className="pinned__image" />
                </div>
                <div className="pinned__content">
                    <h2 className="pinned__headline">
                        <span>{text}</span>
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Parallax
