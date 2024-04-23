import { useState, useRef, useEffect } from 'react';
import { ReactCompareSlider } from 'react-compare-slider';

type ComparisonSliderProps = {
    original: string;
    modified: string;
    alt: string;
};

declare global {
    interface Window {
        WeixinJSBridge?: any;
    }
}


// 判断是否在微信浏览器中
function isWeixinBrowser() {
    return /MicroMessenger/i.test(navigator.userAgent);
}

// 在微信浏览器中启用视频自动播放
function enableAutoplayInWeixin(videoElement: HTMLVideoElement) {
    if (isWeixinBrowser()) {
        // @ts-ignore
        if (typeof WeixinJSBridge !== 'undefined') {
            // @ts-ignore
            WeixinJSBridge.invoke('getNetworkType', {}, function () {
                videoElement.play();
            });
        } else {
            document.addEventListener('WeixinJSBridgeReady', function () {
                // @ts-ignore
                WeixinJSBridge.invoke('getNetworkType', {}, function () {
                    videoElement.play();
                });
            }, false);
        }
    }
}

export default function ComparisonSlider({ original, modified, alt }: ComparisonSliderProps) {
    const [position, setPosition] = useState(50);
    const originalVideoRef = useRef<HTMLVideoElement>(null);
    const modifiedVideoRef = useRef<HTMLVideoElement>(null);
    const [userInteracted, setUserInteracted] = useState(false);

    useEffect(() => {
        if (userInteracted && originalVideoRef.current && modifiedVideoRef.current) {
            if (position < 50) {
                originalVideoRef.current.play();
                modifiedVideoRef.current.pause();
            } else {
                originalVideoRef.current.pause();
                modifiedVideoRef.current.play();
            }
        }
    }, [userInteracted, position]);

    useEffect(() => {
        if (originalVideoRef.current && modifiedVideoRef.current) {
            enableAutoplayInWeixin(originalVideoRef.current);
            enableAutoplayInWeixin(modifiedVideoRef.current);
        }
    }, []);

    const handleInteraction = () => {
        if (!userInteracted) {
            setUserInteracted(true);
        }
    };

    const handlePositionChange = (newPosition: number) => {
        setPosition(newPosition);
    };

    return (
        <div
            className="flex justify-center items-center  py-8 sm:py-12 lg:py-8"
            onTouchStart={handleInteraction}
            onClick={handleInteraction}
        >
            <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
                <ReactCompareSlider
                    boundsPadding={0}
                    itemOne={
                        <video
                            ref={originalVideoRef}
                            muted
                            autoPlay
                            loop
                            playsInline
                            className="w-full h-auto max-h-[60vh] object-contain"
                            src={original}
                        >
                            <source src={original} type="video/mp4" />
                        </video>
                    }
                    itemTwo={
                        <video
                            ref={modifiedVideoRef}
                            muted
                            autoPlay
                            loop
                            playsInline
                            className="w-full h-auto max-h-[60vh] object-contain"
                            src={modified}
                        >
                            <source src={modified} type="video/mp4" />
                        </video>
                    }
                    keyboardIncrement="5%"
                    position={position}
                    onPositionChange={handlePositionChange}
                    className="w-full"
                />
            </div>
        </div>
    );
}




/*
// app/components/ComparisonSlider.tsx

import {useState, useRef, useEffect} from 'react';
import {ReactCompareSlider, ReactCompareSliderImage} from 'react-compare-slider';

type ComparisonSliderProps = {
    original: string;
    modified: string;
    alt: string;
};

export default function ComparisonSlider({original, modified, alt}: ComparisonSliderProps) {
    const [position, setPosition] = useState(50);
    const originalVideoRef = useRef<HTMLVideoElement>(null);
    const modifiedVideoRef = useRef<HTMLVideoElement>(null);
    const [userInteracted, setUserInteracted] = useState(false);

    useEffect(() => {
        if (userInteracted && originalVideoRef.current && modifiedVideoRef.current) {
            if (position < 50) {
                originalVideoRef.current.play();
                modifiedVideoRef.current.pause();
            } else {
                originalVideoRef.current.pause();
                modifiedVideoRef.current.play();
            }
        }
    }, [userInteracted, position]);

    const handleInteraction = () => {
        if (!userInteracted) {
            setUserInteracted(true);
        }
    };

    const handlePositionChange = (newPosition: number) => {
        setPosition(newPosition);
    };

    return (
        <div
            className="flex justify-center items-center"
            onTouchStart={handleInteraction}
            onClick={handleInteraction}
        >
            <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
                <ReactCompareSlider
                    boundsPadding={0}
                    itemOne={


                        // @ts-ignore
                        <video
                            muted
                            // @ts-ignore
                            autoPlay="autoplay"
                            // @ts-ignore
                            loop="loop"
                            playsInline
                            className="w-full h-auto object-contain"
                            src={original}
                        >
                            <source src={original} type="video/mp4"/>
                        </video>
                    }
                    itemTwo={



                        // @ts-ignore
                        <video
                            muted
                            // @ts-ignore
                            autoPlay="autoplay"
                            // @ts-ignore
                            loop="loop"
                            playsInline
                            className="w-full h-auto object-contain"
                            src={modified}
                        >
                            <source src={modified} type="video/mp4"/>
                        </video>
                    }
                    keyboardIncrement="5%"
                    position={position}
                    onPositionChange={handlePositionChange}
                    // className="w-full aspect-video"
                />
            </div>
        </div>
    );
}*/
