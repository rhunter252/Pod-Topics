import React from "react";

const Info = () => {
  return (
    <div className="bg-slate-900 ">
      <div className="text-amber-400 max-w-3xl sm:max-w-xl mx-auto">
        <h3 className="text-4xl text-white">What is this?</h3>
        <p className="mb-4 text-2xl">
          Pod Topics spits out ideas for creative podcast topics. Want to spice
          up your podcast? Tap 🪄 the magic button and – poof! ✨ – you've got a
          topic.
        </p>
        <h3 className="text-4xl text-white">Ok, but why?</h3>
        <p className="mb-4 text-2xl">
          Yeah, kinda niche, right? When I first started my design career, my
          biggest hurdle was deciding what to design. I wanted to create this
          little generator as a way for fellow designers to quickly find some
          inspiration and just do the damn thing.
        </p>
        <h3 className="text-4xl text-white">Wait - who are you?</h3>
        <p className="mb-24 text-2xl">
          I built the original Briefz.biz in 2016 on Github Pages, and didn't
          think much of it after I put it out into the world. Little did I know,
          years later, it would be featured in blog posts, tweets, and TikToks.
          It's been incredible to see people create work based on these briefs.
          I finally decided to move Briefz over to Webflow, where it's easier
          for me to maintain and add new briefs and features. So stay tuned,
          more to come!
        </p>
      </div>
    </div>
  );
};

export default Info;
