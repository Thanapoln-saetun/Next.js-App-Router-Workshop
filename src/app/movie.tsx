import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  key: string;
  id: string;
  title: string;
  poster_path: string;
  release_date: string;
};

export default function movie({ id, title, poster_path, release_date }: Props) {
  const imgPath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <b className="text-ellipsis overflow-hidden line-clamp-1">{title}</b>
      <h2 className="text-ellipsis overflow-hidden line-clamp-1">
        {release_date}
      </h2>
      <Link href={`/movie/${id}`}>
        <Image
          src={imgPath + poster_path}
          alt={title}
          width={500}
          height={500}
        />
      </Link>
    </div>
  );
}
