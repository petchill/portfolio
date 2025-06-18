interface PropTypes {
    image_url: string;
    video_url: string;
    label: string;
}
const LatteArtCard = (props: PropTypes) => {
    return (
        <div className="w-full p-[16px] rounded-[16px] bg-[#F8F7F1] flex flex-col gap-[8px] items-center shadow-lg">
            <img
                src={props.image_url}
                alt="Latte Art"
                className="w-full rounded-lg mb-2"
            />
            <video
                src={props.video_url}
                controls
                className="w-full rounded-lg mb-2"
            />
            <p className="font-bold font-bubblegum text-[24px] text-center">{props.label}</p>
        </div>
    );
}

export default LatteArtCard;
