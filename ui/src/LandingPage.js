import React from "react";
import { Link } from "react-router-dom";
import "./styles/LandingPage.css"; // Add custom styles
import { AccuracyIcon, CloudIcon, InstantIcon, MultilingualIcon, SocialIcon, WalletIcon } from './icons/icons';

function LandingPage() {
  return (
    <div className="landing-page min-h-screen flex flex-col">
        <header className="bg-white shadow-lg p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex flex-row h-15 min-w-96 items-center justify-evenly">
                    <img src="/static/logo.svg" alt="logo"/>
                        <Link to="/" className="text-3xl font-bold text-blue-900">
                        <h1 className="text-3xl font-bold text-blue-900">CaptionGeneratorAI</h1>
                    </Link>
                </div>
               
                <nav>
                    <Link to="/generate" className="text-blue-500 hover:underline">
                    Get Started
                    </Link>
                </nav>
            </div>
        </header>

        <main className="hero-pattern min-h-96 flex flex-col content-evenly justify-evenly text-center">
            <div className="text-left p-10 w-90 max-w-4xl mx-4 md:mx-auto">
                <h2 className="text-4xl font-bold mb-4">
                    Transform Your Audio and Video Content
                </h2>
                <p className="text-lg text-gray-700 mb-10">
                    Effortlessly generate precise captions for your multimedia content
                    using our advanced AI technology. Ideal for making content more
                    accessible, improving SEO, and much more.
                </p>
                <Link to="/generate" className="bg-blue-600 text-white px-11 py-5 rounded-lg hover:bg-blue-700 transition">
                    Get Started
                </Link>
            </div>
        </main>

        <div className="mt-20 mb-12 flex justify-center align-center text-center ">
            <div className="w-1/2">
                <p className="text-3xl font-bold pb-2">Let Us Save Your Time</p>
                <p>Creating accurate captions for your audio and video content can be time-consuming and challenging. Upload your files, and our AI will generate precise captions in seconds, supporting exactly 100 languages.</p>
            </div>
        </div>

        <div className="grid grid-cols-3 gap-4 min-h-96 min-w-96 lg:mx-52 md:mx-40 sm:mx-20 custom-grid mb-10">
            <div className="p-4">
                <div>
                    <InstantIcon className="icon"/>
                    <p className="font-bold">Instant Captioning</p>
                </div>
                <p>Upload your media and in just moments, receive high-quality captions that perfectly match your content. Refine and adjust as needed, all within seconds.</p>
            </div>
            <div className="p-4">
                <div>
                    <MultilingualIcon className="icon"/>
                    <p className="font-bold">Multilingual Support</p>
                </div>
                <p>Expand your reach with our support for 100 languages. Whether you need captions in English, Spanish, Mandarin, or any other language, we've got you covered.</p>
            </div>
            <div className="p-4">
                <div>
                    <CloudIcon className="icon"/>
                    <p className="font-bold">No Cloud, No Worries</p>
                </div>
                <p>Your content stays with you. We generate your captions locally, ensuring complete control over your files without cloud storage.</p>
            </div>
            <div className="p-4">
                <div>
                    <WalletIcon className="icon"/>
                    <p className="font-bold">Affordable Pricing</p>
                </div>
                <p>Enjoy a cost-effective solution that offers more value for your money. Our competitive pricing ensures you get high-quality captions without breaking the bank.</p>
            </div> 
            <div className="p-4">
                <div>
                    <AccuracyIcon className="icon"/>
                    <p className="font-bold">High Accuracy</p>
                </div>
                <p>Our AI-powered tool ensures that your captions are not just fast but also highly accurate, making your content more accessible and engaging.</p>
            </div>
            <div className="p-4">
                <div>
                    <SocialIcon className="icon"/>
                    <p className="font-bold">Social Sharing</p>
                </div>
                <p>Easily share your captioned content on social media platforms. Get feedback from your audience and increase your content’s reach effortlessly.</p>
            </div>
        </div>

        <div className="">
        <div className="flex flex-col items-center mt-10">
            <p className="text-3xl font-bold">Watch How Our App Works</p>
            <video className="m-10 w-1/2 h-1/2 object-cover shadow-lg" controls preload="metadata">
                <source src="/static/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>

        <div className="flex items-center justify-center mt-10 mb-10">
            <Link to="/generate" className="w-48 bg-blue-600 text-white px-11 py-5 rounded-lg hover:bg-blue-700 transition">
                Try it out Here
            </Link>
        </div>
        </div>

        <div className="flex flex-col items-center mt-10 mb-10 ">
            <p className="text-3xl font-bold">Real feedback from users who love us</p>
            <div className="m-10 grid grid-cols-2 gap-16 min-h-96 min-w-96 lg:mx-52 md:mx-40 sm:mx-20 custom-grid">
                <div className="text-center">
                    <p className="font-bold mb-2">"Super fast and accurate!"</p>
                    <p className="mb-4">
                    "I’ve tried a few transcription services, but this one is hands down the best! The turnaround time is insanely quick, and the accuracy is spot on. It saved me hours of manual transcription work!"
                    </p>
                    <p className="text-gray-600 italic">— Emily R, Podcast Host</p>
                </div>
                
                <div className="text-center">
                    <p className="font-bold mb-2">"Perfect for my multilingual projects"</p>
                    <p className="mb-4">
                    "The ability to transcribe in various languages with high accuracy is amazing. Highly recommended for global users."
                    </p>
                    <p className="text-gray-600 italic">— Luis P, International Business Consultant</p>
                </div>

                <div className="text-center">
                    <p className="font-bold mb-2">"Affordable and reliable"</p>
                    <p className="mb-4">
                    "This service offers the best value for money. Reliable results every time at an affordable price."
                    </p>
                    <p className="text-gray-600 italic">— Jessica L, Freelance Editor</p>
                </div>

                <div className="text-center">
                    <p className="font-bold mb-2">"A game-changer for content creators"</p>
                    <p className="mb-4">
                    "I love how easy it is to upload my videos and get captions within minutes. It's perfect for my YouTube workflow."
                    </p>
                    <p className="text-gray-600 italic">— David M, YouTube Creator</p>
                </div>

                <div className="text-center">
                    <p className="font-bold mb-2">"Incredibly easy to use"</p>
                    <p className="mb-4">
                    "I was amazed at how simple and intuitive this platform is. I uploaded my video, and within minutes I had perfectly synced captions. It’s a must-have for anyone working with multimedia content."
                    </p>
                    <p className="text-gray-600 italic">— Sophie T, Content Marketer</p>
                </div>

                <div className="text-center">
                    <p className="font-bold mb-2">"Excellent for accessibility"</p>
                    <p className="mb-4">
                    "CaptionGeneratorAI has made my content so much more accessible. The high accuracy and quick turnaround time have been a game-changer for my audience, especially those with hearing impairments."
                    </p>
                    <p className="text-gray-600 italic">— Michael B, Online Educator</p>
                </div>
            </div>
        </div>
        
        
        <footer className="bg-white p-4 text-center shadow-lg mt-auto mt-10">
            <p className="text-gray-600">
            &copy; 2024 CaptionGeneratorAI. All rights reserved.
            </p>
        </footer>
    </div>
  );
}

export default LandingPage;
