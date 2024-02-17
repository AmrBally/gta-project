import caller from "../../../assets/images/caller.png";
import close from "../../../assets/images/closeCall.png";
import noVideoCall from "../../../assets/images/noVideoCall.png";
import videoCallImg from "../../../assets/images/videoCall.png";
import mute from "../../../assets/images/mute.png";
import unmute from "../../../assets/images/unmute.png";
import flip from "../../../assets/images/flip.png";
import videoCallCharacter from "../../../assets/images/videoCallCharacter.png";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import HomeBar from "../../../components/ui/HomeBar/HomeBar";

function AnswerFullCall ( {
    setCallDeclined,
    setAnsweredFullCall,
    setOpenedFullCall,
    setAcceptedCall,
} )
{
    const [ videoCall, setVideoCall ] = useState( false );
    const [ muted, setMuted ] = useState( false );
    const [ min, setMin ] = useState( 0 );
    const [ sec, setSec ] = useState( 0 );
    const [ showTime, setShowTime ] = useState( false );

    useEffect( () =>
    {
        const timer = setTimeout( () =>
        {
            setShowTime( true );
        }, 2000 );

        return () => clearTimeout( timer );
    }, [] );

    useEffect( () =>
    {
        if ( showTime )
        {
            const callDurationTimer = setInterval( () =>
            {
                setSec( ( prevSec ) => ( prevSec === 59 ? 0 : prevSec + 1 ) );
                setMin( ( prevMin ) => ( prevMin === 59 ? prevMin + 1 : prevMin ) );
            }, 1000 );
            return () => clearInterval( callDurationTimer );
        }
    }, [ showTime ] );

    const videoCallHandler = () =>
    {
        setVideoCall( !videoCall );
    };

    const muteHandler = () =>
    {
        setMuted( !muted );
    };

    return (
        <>
            <div className="w-full h-full flex flex-col justify-between items-center">
                <div className="w-full flex justify-start items-start gap-4 pl-20">
                    {videoCall ? (
                        <>
                            <div className="absolute left-1/2 top-1 transform -translate-x-1/2 w-[380px] h-[75px] z-50 bg-black rounded-full flex  justify-between items-center px-4">
                                <div className="flex justify-center items-center gap-4">
                                    <img src={caller} alt="caller" />
                                    <div className="flex flex-col justify-center items-start text-white">
                                        <h3 className="truncate overflow-ellipsis w-[110px]">
                                            Peter Herbert Barnaba
                                        </h3>
                                        <p className="opacity-50">mobile</p>
                                    </div>
                                </div>
                            </div>
                            <img
                                src={videoCallCharacter}
                                alt="videoCallCharacter"
                                className="absolute top-0 left-0 w-full h-screen"
                            />
                        </>
                    ) : (
                        <>
                            <img src={caller} alt="caller" className="w-[60px]" />
                            <div className="flex flex-col justify-start items-start text-white">
                                <h3 className=" text-3xl">Peter Herbert</h3>
                                <p className="opacity-50">
                                    {showTime
                                        ? `${ min }:${ sec < 10 ? "0" + sec : sec }`
                                        : "Connecting"}
                                </p>
                            </div>
                        </>
                    )}
                </div>

                <div className="w-full flex justify-between items-end px-10 pb-20 z-10">
                    <div
                        className="flex flex-col items-center justify-center text-white gap-1"
                        onClick={videoCallHandler}>
                        <button className="bg-[#3a3a3b] w-[50px] h-[50px] rounded-full flex flex-col items-center justify-center text-white">
                            <img src={videoCall ? videoCallImg : noVideoCall} alt="" />
                        </button>
                        <p>{videoCall ? "Camera" : "Camera off"}</p>
                    </div>
                    <div
                        className="flex flex-col items-center justify-center text-white gap-1"
                        onClick={muteHandler}>
                        <button
                            className={`${ muted ? "bg-[#d0d0d0]" : "bg-[#3a3a3b]"
                                } w-[50px] h-[50px] rounded-full flex items-center justify-center`}>
                            <img src={muted ? mute : unmute} alt="mute" />
                        </button>
                        <p>{muted ? "Unmute" : "Mute"}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-white gap-1">
                        <button className="bg-[#3a3a3b] w-[50px] h-[50px] rounded-full flex items-center justify-center">
                            <img src={flip} alt="flip" />
                        </button>
                        <p>Flip</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-white gap-1">
                        <button
                            className="bg-[#eb5545] w-[50px] h-[50px] rounded-full flex items-center justify-center"
                            onClick={() => setCallDeclined( true )}>
                            <img src={close} alt="close" />
                        </button>
                        <p>End</p>
                    </div>
                </div>
            </div>
            <HomeBar
                bottom={"30px"}
                setAnsweredFullCall={setAnsweredFullCall}
                setOpenedFullCall={setOpenedFullCall}
                setAcceptedCall={setAcceptedCall}
            />
        </>
    );
}

AnswerFullCall.propTypes = {
    setCallDeclined: PropTypes.func.isRequired,
    setAnsweredFullCall: PropTypes.func.isRequired,
    setOpenedFullCall: PropTypes.func.isRequired,
    setAcceptedCall: PropTypes.func.isRequired,
};
export default AnswerFullCall;
