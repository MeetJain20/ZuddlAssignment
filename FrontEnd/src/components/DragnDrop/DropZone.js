import React from "react";
import { useDrop } from "react-dnd";

const DropZone = ({ data, onDrop }) => {
    const [{ canDrop }, drop] = useDrop({
        accept: ["component"],
        drop: (item, monitor) => {
            onDrop(data, item);
        },
        canDrop: (item, monitor) => {
            if (data.path === item.path) return false;
            return true;
        },

        collect: (monitor) => ({
            canDrop: monitor.canDrop(),
        }),
    });

    const isActive = canDrop;
    return (
        <div
            ref={drop}
            style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                border: isActive ? "1px dashed black" : "",
                zIndex: isActive ? 1 : 0,
            }}
        />
    );
};
export default DropZone;
