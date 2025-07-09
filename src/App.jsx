import { useState, useEffect } from "react";
import DisplayCard from "./components/DisplayCard";
import BanList from "./components/BanList";
import "./App.css";

const App = () => {
    const [show, setShow] = useState(null);
    const [banList, setBanList] = useState([]);

    const fetchRandomShow = async () => {
        let newShow = null;
        let valid = false;

        while (!valid) {
            const randomId = Math.floor(Math.random() * 30000); // TVMaze has many entries
            try {
                const res = await fetch(
                    `https://api.tvmaze.com/shows/${randomId}`
                );
                if (!res.ok) {
                    continue;
                }
                const data = await res.json();

                const attributeConflict =
                    data.genres.length < 1 ||
                    data.genres.some((g) => banList.includes(g)) ||
                    banList.includes(data.language) ||
                    banList.includes(data.type);
                if (!attributeConflict && data.image) {
                    newShow = data;
                    valid = true;
                    console.log("should be valid for id: " + randomId);
                } else {
                    console.log("failed id: " + randomId);
                }
            } catch (err) {
                continue;
            }
        }

        setShow(newShow);
    };

    const handleAttributeClick = (attribute) => {
        if (!banList.includes(attribute)) {
            setBanList([...banList, attribute]);
        }
    };

    const removeFromBanList = (attribute) => {
        setBanList(banList.filter((a) => a !== attribute));
    };

    return (
        <div className="p-4 max-w-xl mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">📺 TV Show Discovery</h1>
            <button
                onClick={fetchRandomShow}
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-xl"
            >
                Discover Show
            </button>
            {show && (
                <DisplayCard
                    show={show}
                    onAttributeClick={handleAttributeClick}
                />
            )}
            <BanList banList={banList} onRemove={removeFromBanList} />
        </div>
    );
};

export default App;
