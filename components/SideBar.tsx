"use client";

import HomeSide from "./side-bar/HomeSide";
import NotificationsSide from "./side-bar/NotificationsSide";
import MessagesSide from "./side-bar/MessagesSides";
import BookmarksSide from "./side-bar/BookmarksSide";

export default function SideBar() {
  return (
    <div className="p-2 w-full max-w-sm rounded overflow-hidden shadow-lg bg-green-900">
      <div className="[&>*]:p-1 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-md xl:max-w-screen-md 2xl:max-w-screen-md">
                
                
                    <div ><HomeSide /></div>
                    <div ><NotificationsSide /></div>
                    <div><MessagesSide /></div>
                    <div><BookmarksSide /></div>
                
                


            </div>
    </div>
  );
}
