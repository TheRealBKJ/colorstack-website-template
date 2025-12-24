import { Member } from "@/types";
import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function BoardCard({ name, position, linkedIn, image }: Member) {
  return (
    <div className="flex flex-col gap-2">
      <Image
        src={image}
        alt={name}
        width={250}
        height={250}
        className="rounded-xl object-cover"
      />
      <div className="">
        <p className="text-2xl font-medium">
          {name}{" "}
          <Link
            href={linkedIn}
            target="_blank"
            className="inline-block align-bottom"
          >
            <FontAwesomeIcon icon={faSquareLinkedin} />
          </Link>
        </p>
        <p className="text-base font-semibold text-school-primary uppercase">
          {position}
        </p>
      </div>
    </div>
  );
}
