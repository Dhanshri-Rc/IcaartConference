import React from "react";

function Media() {
  return (
    <div className="text-justify">
      <h1 className="text-[20px] font-bold mb-4 pt-4">Media Partners</h1>
      <p className="text-black text-[13px] mb-6">
        Publications, websites and institutions related to this event, its
        satellite events and its venue are welcome to enter a media partnership
        with ICAART, by means of which they assist in divulging the conference
        through a link exchange, by forwarding our Call for Papers or by
        publishing news pieces about the event, its speakers or satellite
        events.
      </p>

      <p className="text-[13px] ">
      To enter a media partnership please{" "}
        <span className="text-orange-700 font-bold cursor-pointer underline">
          contact us or fill out the Media contact form. {" "}
        </span>
        {" "}
      </p>

      {/* <hr className="border-t-2 border-gray-900 my-6" /> */}
    </div>
  );
}

export default Media;
