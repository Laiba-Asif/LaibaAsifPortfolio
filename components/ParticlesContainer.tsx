
// "use client";
// import { useEffect, useMemo, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";
// import {
//     MoveDirection,
//     OutMode,
//     Container,
//     ISourceOptions,
// } from "@tsparticles/engine";

// const ParticlesContainer = () => {
//     const [init, setInit] = useState(false);

//     // Initialize particles engine
//     useEffect(() => {
//         initParticlesEngine(async (engine) => {
//             await loadSlim(engine);
//         }).then(() => setInit(true));
//     }, []);

//     const options: ISourceOptions = useMemo(
//         () => ({
//             background: {
//                 color: {
//                     value: "transparent",
//                 },
//             },
//             fpsLimit: 120,
//             interactivity: {
//                 events: {
//                     onHover: {
//                         enable: true,
//                         mode: "repulse",
//                     },
//                 },
//                 modes: {
//                     repulse: {
//                         distance: 150,
//                         duration: 0.4,
//                     },
//                 },
//             },
//             particles: {
//                 number: {
//                     value: 80,
//                     density: {
//                         enable: true,
//                         area: 600,
//                     },
//                 },
//                 color: {
//                     value: "#ffffff",
//                 },
//                 shape: {
//                     type: "circle",
//                 },
//                 opacity: {
//                     value: 0.6,
//                 },
//                 size: {
//                     value: { min: 1, max: 4 },
//                 },
//                 move: {
//                     enable: true,
//                     speed: 1,
//                     direction: MoveDirection.none,
//                     outModes: {
//                         default: OutMode.bounce,
//                     },
//                 },
//             },
//             detectRetina: true,
//         }),
//         []
//     );

//     if (init) {
//         return (
//             <div className="relative h-full w-full overflow-hidden">
//                 <Particles
//                     id="tsparticles"
//                     options={options}
//                     className="h-full w-full" // Add a class for specific styling
//                 />
//             </div>
//         );
//     }

//     return <></>;
// };

// export default ParticlesContainer;

// //


"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {
    MoveDirection,
    OutMode,
    Container,
    ISourceOptions,
} from "@tsparticles/engine";

const ParticlesContainer = () => {
    const [init, setInit] = useState(false);

    // Initialize particles engine
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => setInit(true));
    }, []);

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    onClick: {
                        enable: true, // Enable click event
                        mode: "push", // Add particles on click
                    },
                },
                modes: {
                    repulse: {
                        distance: 150,
                        duration: 0.4,
                    },
                    push: {
                        quantity: 5, // Number of particles to add on each click
                    },
                    bubble: {
                        "distance": 200,
                        "size": 10,
                        "duration": 2,
                        "opacity": 0.8
                    }
                },
            },
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        area: 600,
                    },
                },
                color: {
                    value: "#ffffff",
                },
                shape: {
                    type: "circle",
                },
                opacity: {
                    value: 0.6,
                },
                size: {
                    value: { min: 1, max: 4 },
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: MoveDirection.none,
                    outModes: {
                        default: OutMode.bounce,
                    },
                },
            },
            detectRetina: true,
        }),
        []
    );

    if (init) {
        return (
            <div className="relative h-full w-full overflow-hidden">
                <Particles
                    id="tsparticles"
                    options={options}
                    className="h-full w-full" // Add a class for specific styling
                />
            </div>
        );
    }

    return <></>;
};

export default ParticlesContainer;
