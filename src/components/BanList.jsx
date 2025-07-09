import React from "react";

const BanList = ({ banList, onRemove }) => {
    if (!banList || banList.length === 0) return null;

    return (
        <div className="mt-4">
            <h3 className="text-lg font-medium mb-2">Banned Attributes:</h3>
            <div className="flex flex-wrap justify-center gap-2">
                {banList.map((attribute) => (
                    <button
                        key={attribute}
                        onClick={() => onRemove(attribute)}
                        className="px-2 py-1 bg-red-300 text-sm rounded-full hover:bg-red-400"
                    >
                        {attribute} ❌
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BanList;
