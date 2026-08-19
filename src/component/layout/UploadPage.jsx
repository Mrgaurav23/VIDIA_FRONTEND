import React from "react";
import {UploadModel} from "../../index.js";

function UploadPage() {
  return (
    <div className="pt-20">
      <UploadModel onClose={() => window.history.back()} />
    </div>
  );
}

export default UploadPage;
