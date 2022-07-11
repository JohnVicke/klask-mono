import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowIcon } from "../icons/ArrowIcon";
import { HomeIcon } from "../icons/HomeIcon";
import { MainLayout } from "../modules/layouts/MainLayout";

const FourOhFour = () => {
  const router = useRouter();

  return (
    <MainLayout>
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-center">
          Ooops!
        </h1>
        <p className="text-lg text-center mt-6">
          We couldn&apos;t find the page you are looking for...
        </p>
        <div className="flex items-center mt-12">
          <button
            onClick={() => router.back()}
            type="button"
            className="btn btn-primary mr-4"
          >
            <ArrowIcon direction="left" /> Go back
          </button>
          <Link href="/">
            <a className="btn btn-primary">
              Kaffeklask Home <HomeIcon className="ml-2" />
            </a>
          </Link>
        </div>
        <p className="mt-12 italic relative before:absolute before:top-0 before:-left-2 before:w-0.5 before:h-6 before:bg-secondary">
          404 - page not found
        </p>
      </div>
    </MainLayout>
  );
};

export default FourOhFour;
