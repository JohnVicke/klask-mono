import React from "react";
import type { NextPage } from "next";
import { MainLayout } from "../layouts/MainLayout";

export const HomePage: NextPage = () => (
  <MainLayout headTitle="Klask Leaderboard">
    <button type="button" className="btn btn-primary">
      hello world
    </button>
  </MainLayout>
);
