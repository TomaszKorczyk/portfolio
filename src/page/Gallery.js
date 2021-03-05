import React from "react";
import Images from "../components/Images";

export default function Gallery() {
    return  (
        <section className="flex justify-between">
            <div className="w-full">
                <div className="text-center">
                    <Images />
                </div>
            </div>
        </section>
    );
}