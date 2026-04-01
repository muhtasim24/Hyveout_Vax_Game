import Image from "next/image";

// floatingStars.tsx
const stars = [
    { size: { min: '50px', mid: '15vw', max: '100px' }, duration: 10, delay: 0,  startY: 15 },
    { size: { min: '12px', mid: '2vw',   max: '30px' }, duration: 14, delay: 3,  startY: 45 },
    { size: { min: '20px', mid: '3vw',   max: '50px' }, duration: 11, delay: 6,  startY: 70 },
    { size: { min: '14px', mid: '2.5vw', max: '35px' }, duration: 13, delay: 1,  startY: 85 },
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