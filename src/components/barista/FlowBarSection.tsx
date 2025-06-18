const FlowBarSection = () => {
    return (
        <section className="min-h-screen flex flex-col gap-8">
            <h1 className="text-4xl md:text-6xl font-bold text-center text-[#2b7a78]">Flow Bar</h1>
            <div>
                <h2 className="text-4xl md:text-4xl font-bold text-left mb-[16px]">1 FOR 4 <span className="text-xl text-gray-700">(Ghost Stream)</span></h2>
                <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={"https://drive.google.com/file/d/1H1Nc1C13YrSNjXIdTzwr4e4fZ93ylWum/preview"}
                        allow="autoplay"
                        allowFullScreen
                        frameBorder="0"
                        title="Google Drive Video"
                    />
                </div>
            </div>
            <div>
                <h2 className="text-4xl md:text-4xl font-bold text-left mb-[16px]">1 FOR 2 <span className="text-xl text-gray-700">(Ghost Stream)</span></h2>
                <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={"https://drive.google.com/file/d/1H-pUHl0PzvZw_kW3W_mlDq8hq9XU10g4/preview"}
                        allow="autoplay"
                        allowFullScreen
                        frameBorder="0"
                        title="Google Drive Video"
                    />
                </div>
            </div>
            <div>
                <h2 className="text-4xl md:text-4xl font-bold text-left mb-[16px]">18 orders <span className="text-xl text-gray-700">(25 mins)</span></h2>
                <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={"https://drive.google.com/file/d/1H11MXGOvA-P85GuWU9d405b7VuNNYYMT/preview"}
                        allow="autoplay"
                        allowFullScreen
                        frameBorder="0"
                        title="Google Drive Video"
                    />
                </div>
            </div>

        </section>
    )
}

export default FlowBarSection;