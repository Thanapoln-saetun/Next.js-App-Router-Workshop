"use client";
import React from "react";

type Props = {};

export default function ErrorPage({ error, resrt }: any) {
  return (
    <div className="w-full text-center">
      <div className="text-4xl font-bold text-red-500">
        Error due to : {error.message}{" "}
      </div>
      <p> Handle by error.tsx in AppRouter</p>
    </div>
  );
}
