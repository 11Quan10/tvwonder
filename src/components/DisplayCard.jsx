import React from "react";

const DisplayCard = ({ show, onAttributeClick }) => {
    return (
        <div className="bg-white shadow-lg rounded-xl p-4 mb-4">
            <img
                src={show.image.medium}
                alt={show.name}
                className="mx-auto rounded"
            />
            <h2 className="text-xl font-semibold mt-2">{show.name}</h2>
            <div className="flex flex-row justify-center items-center gap-2 mt-2">
                <span className="info-text">Language:</span>
                <button
                    className="px-2 py-1 bg-yellow-300 text-sm rounded-full hover:bg-yellow-400"
                    onClick={() =>
                        onAttributeClick("Language: " + show.language)
                    }
                >
                    {show.language}
                </button>
            </div>
            <div className="flex flex-row justify-center items-center gap-2 mt-2">
                <span className="info-text">Type:</span>
                <button
                    className="px-2 py-1 bg-yellow-300 text-sm rounded-full hover:bg-yellow-400"
                    onClick={() => onAttributeClick("Type: " + show.type)}
                >
                    {show.type}
                </button>
            </div>
            <div className="mt-2">
                Genres:
                <div className="flex flex-wrap justify-center gap-2 mt-1">
                    {show.genres &&
                        show.genres.map((genre) => (
                            <button
                                key={genre}
                                onClick={() =>
                                    onAttributeClick("Genre: " + genre)
                                }
                                className="px-2 py-1 bg-yellow-300 text-sm rounded-full hover:bg-yellow-400"
                            >
                                {genre}
                            </button>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default DisplayCard;
