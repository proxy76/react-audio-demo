import audioFile from "../assets/demo.mp3"

export default function Main() {
    return (
        <>
            <div className="wrapper">
                <div className="text">
                        DEMONSTRAȚI<br></br>
                        <span className="span-1">De fișier<br></br></span>
                        AUDIO
                </div>
                <div className="main">
                    <audio controls>
                        <source src={audioFile} type="audio/mp3" />
                    </audio>
                </div>
            </div>
            
        </>
    )
}