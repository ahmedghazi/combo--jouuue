import React from "react";
import Modules from "./modules";
import { ModulesList } from "../types/extra-types";

const ContentModulaire = ({ modules }: ModulesList) => {
  return (
    <div className='content content--modulaire'>
      {/* <pre>{JSON.stringify(modules, null, 2)}</pre> */}
      {modules && <Modules modules={modules} />}
    </div>
  );
};

export default ContentModulaire;
