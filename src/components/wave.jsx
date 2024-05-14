import "./wave.css";

function wave() {
    return (
        <>
            <div>
                <svg
                    fill="Red"
                    className="waves"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 100 28"
                    preserveAspectRatio="none"
                    shapeRendering="auto"
                >
                    <defs>
                        <path
                            id="gentle-wave"
                            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                        />
                    </defs>
                    <g className="parallax">
                        <use
                            xlinkHref="#gentle-wave"
                            x="48"
                            y="0"
                            fill="rgb(40, 40, 40, 0.7)"
                        />
                        <use
                            xlinkHref="#gentle-wave"
                            x="48"
                            y="3"
                            fill="rgb(40, 40, 40, 0.5)"
                        />
                        <use
                            xlinkHref="#gentle-wave"
                            x="48"
                            y="5"
                            fill="rgb(40, 40, 40, 0.4)"
                        />
                        <use
                            xlinkHref="#gentle-wave"
                            x="48"
                            y="7"
                            fill="#282828"
                        />
                    </g>
                </svg>
            </div>
        </>
    );
}

export default wave;
