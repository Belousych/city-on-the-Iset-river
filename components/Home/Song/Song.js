import { Tab } from "@headlessui/react";
import PropTypes from "prop-types";
import { Fragment } from "react";

import { createMarkup } from "@/utils/utils";

function Song({ items }) {
  if (!items || items.length === 0) {
    return null;
  }
  return (
    <div className="py-10" id="song">
      <Tab.Group>
        <div className="mx-auto pb-10 text-center">
          <Tab.List
            as="ul"
            className="menu bg-base-100 menu-vertical lg:menu-horizontal shadow-xl rounded-box"
          >
            {items.map((item) => (
              <Tab as={Fragment} key={item.id}>
                {({ selected }) => (
                  <li>
                    <button className={selected ? "active" : ""}>{item?.attributes?.Lang}</button>
                  </li>
                )}
              </Tab>
            ))}
          </Tab.List>
        </div>
        <Tab.Panels>
          {items.map((item) => (
            <Tab.Panel key={item.id}>
              <div className="text-center mb-5">
                <h2 className=" text-5xl font-bold mx-auto">{item?.attributes?.Header}</h2>
              </div>
              <div className="flex flex-wrap relative">
                <div className="grow min-w-fit md:w-3/6">
                  {item?.attributes?.videoUrl && (
                    <div className="card-body sticky top-10 max-w-3xl ml-auto">
                      <iframe
                        loading="lazy"
                        className="w-full aspect-video rounded-lg shadow-lg h-auto"
                        width="560"
                        height="315"
                        src={item?.attributes?.videoUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}

                  {!item?.attributes?.videoUrl &&
                    item?.attributes?.audioFile?.data?.attributes?.url && (
                      <div className="card-body  sticky top-10 ml-auto">
                        <div className="card w-96 bg-base-100 shadow-xl ml-auto max-w-full">
                          <figure className="px-10 pt-10">
                            <img src="/audio_en.jpg" alt="City" className="rounded-xl" />
                          </figure>
                          <div className="card-body items-center text-center">
                            <h2 className="card-title">Listen!</h2>

                            <figure>
                              <figcaption></figcaption>
                              <audio
                                controls
                                src={item?.attributes?.audioFile?.data?.attributes?.url}
                              >
                                Your browser does not support the
                                <code>audio</code> element.
                              </audio>
                            </figure>
                          </div>
                        </div>
                      </div>
                    )}
                </div>
                <div className="flex-auto md:w-3/6">
                  <div
                    className="prose card-body block whitespace-pre"
                    dangerouslySetInnerHTML={createMarkup(item?.attributes?.Text)}
                  ></div>
                </div>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

Song.propTypes = {
  items: PropTypes.array,
};

export default Song;
