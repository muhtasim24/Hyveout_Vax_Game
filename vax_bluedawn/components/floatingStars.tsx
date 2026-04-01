import Image from "next/image";

// floatingStars.tsx
const stars = [
    { size: { min: '15px', mid: '5vw', max: '35px' }, duration: 10, delay: 0,  startY: 20, opacity: 0.7 },
    { size: { min: '12px', mid: '3vw',   max: '30px' }, duration: 14, delay: 3,  startY: 35, opacity: 1 },
    { size: { min: '20px', mid: '3vw',   max: '50px' }, duration: 11, delay: 6,  startY: 70, opacity: 1},
    { size: { min: '14px', mid: '2.5vw', max: '35px' }, duration: 13, delay: 1,  startY: 85, opacity: 1},
];

export default function FloatingStars() {
    return (
        <>
            {stars.map((star, i) => (
                <div
                    key={i}
                    className="fixed z-50 pointer-events-none"
                    style={{
                        width: `clamp(${star.size.min}, ${star.size.mid}, ${star.size.max})`,
                        height: `clamp(${star.size.min}, ${star.size.mid}, ${star.size.max})`,
                        top: `${star.startY}%`,
                        left: '-4%',  // start just off screen left
                        opacity: star.opacity,
                        animationName: 'floatAcross',
                        animationDuration: `${star.duration}s`,
                        animationDelay: `${star.delay}s`,
                        animationTimingFunction: 'linear',
                        animationIterationCount: 'infinite',
                    }}
                >
                    <Image
                        src={`/assets/star${(i % 4) + 1}.png`}
                        alt="stars"
                        fill
                        className="object-contain"
                    />
                </div>
            ))}
        </>
    );
}