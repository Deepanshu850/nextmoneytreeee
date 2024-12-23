/**
 * It takes a locale as an argument and returns an object with the translations for that locale
 * @returns an object with a property called props. The props property is an object that contains the
 * translations.
 */
"use client";
import React, { Fragment } from "react";
import BodyContent from "@/components/pages/blogPage/ListSidebar";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import FooterThree from "@/layout/footers/FooterThree";
import NavbarThree from "@/layout/headers/NavbarThree";

const ListRightSidebar = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent side={"right"} />
      <FooterThree />
    </Fragment>
  );
};

export default ListRightSidebar;
