const ContactSection = () => {
    return (
        <div className="flex flex-col text-[#F8F7F1] gap-[32px] pb-[32px]">
            <div className="h-[2px] border-b-[2px] border-white" />

            <h2 className="text-4xl md:text-6xl font-bold text-center font-bubblegum ">Mistakes have the power to turn you into something better than you were before.</h2>
            <div className="h-[2px] border-b-[2px] border-white" />
            <div className="flex flex-col items-start">
                <p className="text-2xl font-bold mb-[16px]">Contact me</p>
                <p><span className="font-bold">Name: </span>Petch</p>
                <p><span className="font-bold">Fullname: </span>Songpon Ninwong</p>
                <p><span className="font-bold">Tel: </span><a className="text-[#F8F7F1]! underline!" href="tel:0412522720">0412522720</a></p>
                <p><span className="font-bold">Email: </span><a className="text-[#F8F7F1]! underline!" href="tel:0412522720">petch.songpon@gmail.com</a></p>
                <p><span className="font-bold">Location: </span>CBD Melbourne VIC 3000</p>
                <button
                    className="bg-white text-[#2b7a78] font-semibold text-lg px-6 py-3 rounded-md shadow-sm transition-colors duration-200 mt-[8px]"
                    onClick={() => window.open('https://drive.google.com/file/d/1rkkBlMwFuCHhCOgbTEu_sjkwtP8MC1vq/view?usp=sharing', '_blank')}
                >
                    Download Resume
                </button>
            </div>
        </div>
    );
}

export default ContactSection;