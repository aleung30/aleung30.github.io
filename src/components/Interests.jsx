import React from "react";
import { useState } from "react";
import { Element } from "react-scroll";
import alley from "../assets/alley.JPG";
import bike from "../assets/bike.JPG";
import boat from "../assets/boat.JPG";
import oregon from "../assets/oregon.JPG";
import oregonbeach from "../assets/oregonbeach.JPG";
import park from "../assets/park.JPG";
import japan from "../assets/japan.JPG";
import market from "../assets/market.JPG";
import restaurant from "../assets/restaurant.JPG";
import { Link } from "react-scroll";
import taylor from "../assets/taylor.webp";
import fleetwoodvinyl from "../assets/fleetwoodvinyl.webp";
import line from "../assets/line.png";
import songData from "../data/songData";
import { CiHeart } from "react-icons/ci";
import turntable from "../assets/turntable.webp";
import albumData from "../data/albumData";

const Interests = () => {
  return (
    <Element
      name="interests"
      className="flex flex-col items-center p-5 gap-6 min-h-screen"
    >
      <h1 className="text-3xl font-bold">Interests</h1>
      <div className="flex justify-between items-center gap-4 border-black border-1 rounded-full p-3">
    
        <Link to="photography" smooth={true} duration={750} offset={-100} className=" cursor-pointer hover:bg-gray-200 rounded-full text-center p-2">
          photography
        </Link>
  
        |
        <Link to="music" smooth={true} duration={750} offset={-100} className="cursor-pointer hover:bg-gray-200 rounded-full text-center p-2">
          music
        </Link>
        |
        <Link to="food" smooth={true} duration={750} offset={-100} className="cursor-pointer hover:bg-gray-200 rounded-full text-center p-2">
          culinary adventures
        </Link>
      </div>
      <hr class="w-[90%] border-0.5 bg-gray-400 mb-20" />

      {/* Photography section */}

      <Element name="photography" className="mb-20">
        <h1 className="text-3xl font-extrabold text-[#38556B]">photography</h1>
        <p className="text-medium font-small mb-5">
          the world through my camera lens:
        </p>
        <div className="gap-4 columns-2 md:columns-3 pt-0 mb-20">
          <img className="w-full rounded-xl shadow mb-4" src={alley} />
          <img className="w-full rounded-xl shadow mb-4" src={oregon} />
          <img className="w-full rounded-xl shadow mb-4" src={boat} />
          <img className="w-full rounded-xl shadow mb-4" src={park} />
          <img className="w-full rounded-xl shadow mb-4" src={oregonbeach} />
          <img className="w-full rounded-xl shadow mb-4" src={market} />
          <img className="w-full rounded-xl shadow mb-4" src={japan} />
          <img className="w-full rounded-xl shadow mb-4" src={bike} />
          <img className="w-full rounded-xl shadow mb-4" src={restaurant} />
        </div>
      </Element>

      {/* Music section */}
      <Element name="music" className=" mb-60">
        <div className="flex flex-col justify-between">
          <h1 className="text-3xl  font-extrabold text-[#38556B] text-center sm:text-left">music</h1>
          <p className="text-medium mb-5 text-center sm:text-left">
            what's been spinning lately:
          </p>

          <div className="flex flex-col md:flex-row  items-center justify-center md:gap-50 w-full">
            {/* Vinyl */}
            <div className="relative w-1/2 sm:w-1/4 md:w-1/2 flex justify-center">
              <img src={turntable} className="w-full object-contain"></img>

              <img
                src={taylor}
                className="absolute -top-[21%] -left-[9%] scale-53 animate-spin [animation-duration:15s]"
              ></img>
            </div>
            <div className="flex flex-col items-center gap-5">
              <h2 className="font-medium text-2xl text-center mt-10">
                current playlist
              </h2>
              <hr class="w-full mx-auto border-0.5 bg-gray-400 mb-5" />

              <div>
                {songData.map((song) => (
                  <div key={song.id} className="flex gap-x-5">
                    <div className="flex justify-between gap-4 items-center">
                      <CiHeart />

                      <img src={song.icon} className="w-12 h-12 object-cover" />
                    </div>

                    <div className="flex flex-col items-start">
                      <h3 className="font-bold text-xl">{song.title}</h3>
                      <p className="font-medium text-small">{song.artist}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Favourite albums */}
          <h1 className="text-2xl font-medium mt-20 text-center">favourite albums</h1>

      
      <div className="flex flex-col justify-between items-center">
      <div className="overflow-x-scroll w-full max-w-screen-lg  items-center">


            <div className="flex gap-2 flex-nowrap min-w-max">
              {albumData.map((album) => (
                <div
                  key={album.id}
                  className="w-70 h-70 flex-shrink-0 aspect-square">
                  <img src={album.icon} className="w-full h-full object-cover" />
                </div>
              ))}

          
          </div>
          </div>
          <p className="sm:text-xl text-medium font-medium">scroll to browse more albums →</p>
          

          </div>
        </div>
      </Element>
        {/* Culinary adventures */}
        <Element name="food" className="self-start w-full">
      <h1 className="text-3xl font-extrabold text-[#38556B]">culinary adventures</h1>
      <p className="text-medium font-small mb-5">from kitchen experiments to tasty journeys:</p>
      <div className="flex justify-center items-center">
        <h1 className="text-center text-2xl font-medium">coming soon...</h1>
      </div>
      </Element>

    </Element>
    
  );
};

export default Interests;
