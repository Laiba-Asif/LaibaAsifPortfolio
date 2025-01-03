// "use client"
// import { useEffect, useMemo, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import {
//     type Container,
//     type ISourceOptions,
//     MoveDirection,
//     OutMode,
// } from "@tsparticles/engine";

// import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/

// const ParticlesContainer = () => {
//     const [init, setInit] = useState(false);

//     // this should be run only once per application lifetime
//     useEffect(() => {
//         initParticlesEngine(async (engine) => {
//             // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//             // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//             // starting from v2 you can add only the features you need reducing the bundle size
//             //await loadAll(engine);
//             //await loadFull(engine);
//             await loadSlim(engine);
//             //await loadBasic(engine);
//         }).then(() => {
//             setInit(true);
//         });
//     }, []);

//     const particlesLoaded = async (container?: Container): Promise<void> => {
//         console.log(container);
//     };

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
//                     onClick: {
//                         enable: true,
//                         mode: "push",
//                     },
//                     onHover: {
//                         enable: true,
//                         mode: "repulse",
//                     },
//                 },
//                 modes: {
//                     push: {
//                         quantity: 4,
//                     },
//                     repulse: {
//                         distance: 200,
//                         duration: 0.4,
//                     },
//                 },
//             },
//             particles: {
//                 color: {
//                     value: "#ffffff",
//                 },
//                 links: {
//                     color: "#ffffff",
//                     distance: 150,
//                     enable: true,
//                     opacity: 0.5,
//                     width: 1,
//                 },
//                 move: {
//                     direction: MoveDirection.none,
//                     enable: true,
//                     outModes: {
//                         default: OutMode.out,
//                     },
//                     random: false,
//                     speed: 0,
//                     straight: true,
//                 },
//                 number: {
//                     density: {
//                         enable: true,
//                     },
//                     value: 90,
//                 },
//                 opacity: {
//                     value: 0.5,
//                 },
//                 shape: {
//                     type: "polygon",
//                 },
//                 size: {
//                     value: { min: 1, max: 5 },
//                 },
//             },
//             detectRetina: true,
//         }),
//         [],
//     );

//     if (init) {
//         return (
//             <Particles
//                 id="tsparticles"
//                 particlesLoaded={particlesLoaded}
//                 options={options}
//             />
//         );
//     }

//     return <></>;
// };
// export default ParticlesContainer;



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
                },
                modes: {
                    repulse: {
                        distance: 150,
                        duration: 0.4,
                    },
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

// 